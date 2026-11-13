"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { VivaRealProperty } from "@/types/viva-real";
import { formatBRL, buildWhatsAppLink } from "@/services/property-service";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: VivaRealProperty;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const primaryImage =
    property.media.find((m) => m.primary)?.url || property.media[0]?.url;

  if (featured) {
    // 16:9 Widescreen Asymmetrical Editorial Hero Property
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 transition-all duration-300 hover:border-slate-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Media Container (7 cols) */}
          <Link
            href={`/imoveis/${property.slug}`}
            className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:h-[500px]"
          >
            <Image
              src={primaryImage}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 sm:top-4 sm:left-4 sm:gap-2">
              {property.tag && (
                <Badge variant={property.tag === "Exclusividade" ? "amber" : "emerald"}>
                  {property.tag}
                </Badge>
              )}
              <Badge variant="dark">Ref: {property.listingId}</Badge>
            </div>
            {property.price.acceptsFinancing && (
              <div className="absolute bottom-3 left-3 rounded-md bg-[#0B131F]/90 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 backdrop-blur-sm sm:text-[11px]">
                Aceita Financiamento Bancário
              </div>
            )}
          </Link>

          {/* Editorial Content (5 cols) */}
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                <span>{property.address.city}</span>
                <span>•</span>
                <span className="text-[#0E7058]">{property.address.neighborhood}</span>
              </div>

              <Link href={`/imoveis/${property.slug}`}>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight text-[#0B131F] transition-colors hover:text-[#0E7058] sm:text-2xl lg:text-3xl">
                  {property.title}
                </h3>
              </Link>

              <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-sm">
                {property.description}
              </p>

              {/* Curator Note Box */}
              {property.curatorNote && (
                <div className="mt-4 rounded-xl border border-emerald-100 bg-[#EBF6F2]/70 p-3 sm:mt-5 sm:p-3.5">
                  <span className="block text-[10px] font-bold tracking-wider text-[#0E7058] uppercase">
                    Parecer de Gisele Andrade
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700 italic">
                    &ldquo;{property.curatorNote}&rdquo;
                  </p>
                </div>
              )}

              {/* Metric Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5 text-xs font-medium text-slate-700 sm:mt-5 sm:gap-2">
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 tabular-nums sm:px-3 sm:py-1.5">
                  <strong>{property.details.livingArea}</strong> m² privativos
                </span>
                {property.details.bedrooms > 0 && (
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 tabular-nums sm:px-3 sm:py-1.5">
                    <strong>{property.details.bedrooms}</strong> qts ({property.details.suites} suítes)
                  </span>
                )}
                {property.details.garageSpaces > 0 && (
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 tabular-nums sm:px-3 sm:py-1.5">
                    <strong>{property.details.garageSpaces}</strong> vagas
                  </span>
                )}
              </div>
            </div>

            {/* Price & Action Row */}
            <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <div>
                <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Valor de Venda
                </span>
                <span className="font-display text-2xl font-bold tabular-nums text-[#0B131F] sm:text-3xl">
                  {formatBRL(property.price.amount)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:flex">
                <Link
                  href={`/imoveis/${property.slug}`}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 px-3 text-center text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50 sm:px-4"
                >
                  Ver Imóvel
                </Link>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={buildWhatsAppLink(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0E7058] px-3 text-center text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#09503E] sm:px-4"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Vertical Architectural Card com Microinterações de Hover
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
    >
      {/* Media with Badges */}
      <Link
        href={`/imoveis/${property.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100"
      >
        <Image
          src={primaryImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {property.tag && (
            <Badge variant={property.tag === "Exclusividade" ? "amber" : "emerald"}>
              {property.tag}
            </Badge>
          )}
          <Badge variant="dark">Ref: {property.listingId}</Badge>
        </div>
        {property.price.acceptsFinancing && (
          <div className="absolute bottom-3 left-3 rounded bg-[#0B131F]/90 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-sm">
            Financiável
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="text-[11px] font-semibold tracking-wider text-[#0E7058] uppercase">
            {property.address.neighborhood} • {property.propertyType}
          </div>

          <Link href={`/imoveis/${property.slug}`}>
            <h4 className="mt-1.5 font-display text-base font-bold leading-snug text-[#0B131F] transition-colors hover:text-[#0E7058] sm:text-lg line-clamp-2">
              {property.title}
            </h4>
          </Link>

          {/* Technical Specs */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
            {property.details.livingArea > 0 ? (
              <span className="tabular-nums font-medium">
                {property.details.livingArea} m²
              </span>
            ) : (
              <span className="tabular-nums font-medium">
                {property.details.totalArea} m² total
              </span>
            )}
            <span>•</span>
            {property.details.bedrooms > 0 && (
              <span className="tabular-nums font-medium">
                {property.details.bedrooms} quartos
              </span>
            )}
            {property.details.garageSpaces > 0 && (
              <>
                <span>•</span>
                <span className="tabular-nums font-medium">
                  {property.details.garageSpaces} vagas
                </span>
              </>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 sm:mt-6 sm:pt-4">
          <div>
            <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Investimento
            </span>
            <span className="font-display text-base font-bold tabular-nums text-[#0B131F] sm:text-lg">
              {formatBRL(property.price.amount)}
            </span>
          </div>

          <div className="flex gap-1.5 sm:gap-2">
            <Link
              href={`/imoveis/${property.slug}`}
              className="rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:px-3"
            >
              Ficha
            </Link>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href={buildWhatsAppLink(property)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#0B131F] px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0E7058] sm:px-3"
            >
              WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
