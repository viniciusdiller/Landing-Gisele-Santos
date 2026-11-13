"use client";

import Image from "next/image";
import { VivaRealProperty } from "@/types/viva-real";
import { formatBRL, buildWhatsAppLink } from "@/services/property-service";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: VivaRealProperty;
  featured?: boolean;
  onSelect: (property: VivaRealProperty) => void;
}

export function PropertyCard({ property, featured = false, onSelect }: PropertyCardProps) {
  const primaryImage =
    property.media.find((m) => m.primary)?.url || property.media[0]?.url;

  if (featured) {
    // 16:9 Widescreen Asymmetrical Editorial Hero Property
    return (
      <article className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 transition-all duration-300 hover:border-slate-300">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Media Container (7 cols) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 lg:col-span-7 lg:aspect-auto lg:h-[480px]">
            <Image
              src={primaryImage}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {property.tag && (
                <Badge variant={property.tag === "Exclusividade" ? "amber" : "emerald"}>
                  {property.tag}
                </Badge>
              )}
              <Badge variant="dark">Ref: {property.listingId}</Badge>
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                <span>{property.address.city}</span>
                <span>•</span>
                <span className="text-[#0E7058]">{property.address.neighborhood}</span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#0B131F] sm:text-3xl">
                {property.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                {property.description}
              </p>

              {/* Curator Note Box */}
              {property.curatorNote && (
                <div className="mt-6 rounded-xl border border-emerald-100 bg-[#EBF6F2]/70 p-4">
                  <span className="block text-[11px] font-bold tracking-wider text-[#0E7058] uppercase">
                    Curadoria Gisele Andrade
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700 italic">
                    &ldquo;{property.curatorNote}&rdquo;
                  </p>
                </div>
              )}

              {/* Clean Metric Badges without noisy icon spam */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 tabular-nums">
                  <strong>{property.details.livingArea}</strong> m² privativos
                </span>
                {property.details.bedrooms > 0 && (
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 tabular-nums">
                    <strong>{property.details.bedrooms}</strong> quartos ({property.details.suites} suítes)
                  </span>
                )}
                {property.details.garageSpaces > 0 && (
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 tabular-nums">
                    <strong>{property.details.garageSpaces}</strong> vagas
                  </span>
                )}
              </div>
            </div>

            {/* Price & Action Row */}
            <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Valor de Venda
                </span>
                <span className="font-display text-2xl font-bold tabular-nums text-[#0B131F] sm:text-3xl">
                  {formatBRL(property.price.amount)}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onSelect(property)}
                  className="rounded-lg border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Ver Detalhes
                </button>
                <a
                  href={buildWhatsAppLink(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#0E7058] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all hover:bg-[#09503E] active:scale-[0.98]"
                >
                  Consultar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Vertical 4:5 Architectural Card
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      {/* Media with Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={primaryImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {property.tag && (
            <Badge variant={property.tag === "Exclusividade" ? "amber" : "emerald"}>
              {property.tag}
            </Badge>
          )}
          <Badge variant="dark">Ref: {property.listingId}</Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="text-[11px] font-semibold tracking-wider text-[#0E7058] uppercase">
            {property.address.neighborhood} • {property.propertyType}
          </div>

          <h4 className="mt-1.5 font-display text-lg font-bold leading-snug text-[#0B131F] line-clamp-2">
            {property.title}
          </h4>

          {/* Technical Specs without Clutter */}
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
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Investimento
            </span>
            <span className="font-display text-lg font-bold tabular-nums text-[#0B131F]">
              {formatBRL(property.price.amount)}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onSelect(property)}
              className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Ficha
            </button>
            <a
              href={buildWhatsAppLink(property)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#0B131F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0E7058]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
