import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SellersCTA } from "@/components/landing/SellersCTA";
import {
  getAllProperties,
  getPropertyBySlug,
  formatBRL,
  buildWhatsAppLink,
  buildFinancingSimulatorLink,
} from "@/services/property-service";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />

      {/* Breadcrumb de navegação */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-10">
          <Link href="/" className="hover:text-[#0B131F]">
            Início
          </Link>
          <span>/</span>
          <Link href="/#imoveis" className="hover:text-[#0B131F]">
            Imóveis
          </Link>
          <span>/</span>
          <span className="truncate text-slate-800">{property.address.neighborhood}</span>
          <span>/</span>
          <span className="font-semibold text-[#0E7058]">Ref: {property.listingId}</span>
        </div>
      </div>

      <main className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Top Title & Badges */}
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {property.tag && (
                  <Badge variant={property.tag === "Exclusividade" ? "amber" : "emerald"}>
                    {property.tag}
                  </Badge>
                )}
                <Badge variant="dark">Ref: {property.listingId}</Badge>
                <Badge variant="neutral">
                  {property.details.legalStatus}
                </Badge>
                {property.price.acceptsFinancing && (
                  <Badge variant="emerald">Aceita Financiamento</Badge>
                )}
              </div>

              <h1 className="mt-3 font-display text-xl font-bold leading-tight text-[#0B131F] sm:text-3xl lg:text-4xl">
                {property.title}
              </h1>

              <p className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                {property.address.street && `${property.address.street}, `}
                {property.address.neighborhood} • {property.address.city} - {property.address.state}
              </p>
            </div>

            {/* Price Box */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm lg:text-right">
              <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Valor de Venda
              </span>
              <span className="font-display text-2xl font-bold tabular-nums text-[#0B131F] sm:text-3xl">
                {formatBRL(property.price.amount)}
              </span>
              {property.price.condoFee && (
                <span className="block text-xs text-slate-500">
                  Condomínio: {formatBRL(property.price.condoFee)}/mês
                </span>
              )}
            </div>
          </div>

          {/* Galeria de Fotos */}
          <div className="mt-6 space-y-3 sm:mt-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={property.media[0]?.url}
                alt={property.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {property.media[0]?.caption && (
                <div className="absolute right-3 bottom-3 left-3 rounded-lg bg-black/70 px-3 py-2 text-xs text-white backdrop-blur-md sm:right-4 sm:bottom-4 sm:left-4 sm:px-4 sm:py-2.5">
                  {property.media[0].caption}
                </div>
              )}
            </div>

            {/* Thumbnails grid */}
            {property.media.length > 1 && (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                {property.media.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100"
                  >
                    <Image src={img.url} alt="" fill sizes="50vw" className="object-cover" />
                    {img.caption && (
                      <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-white sm:text-[10px]">
                        {img.caption}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Grid com Especificações do XML e Sidebar de Contato */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-12 lg:gap-16">
            {/* Coluna Principal: Informações Técnicas do XML (8 cols) */}
            <div className="space-y-8 sm:space-y-12 lg:col-span-8">
              {/* Barra de Especificações Numéricas Tabulares com SVGs dedicados */}
              <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm sm:grid-cols-4 sm:gap-4 sm:p-6">
                {/* Área Útil */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#0E7058] sm:h-10 sm:w-10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Área Útil</span>
                    <strong className="font-display text-sm font-bold tabular-nums text-[#0B131F] sm:text-base">
                      {property.details.livingArea > 0 ? `${property.details.livingArea} m²` : "—"}
                    </strong>
                  </div>
                </div>

                {/* Quartos e Suítes */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#0E7058] sm:h-10 sm:w-10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Quartos</span>
                    <strong className="font-display text-sm font-bold tabular-nums text-[#0B131F] sm:text-base">
                      {property.details.bedrooms} ({property.details.suites} suítes)
                    </strong>
                  </div>
                </div>

                {/* Banheiros */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#0E7058] sm:h-10 sm:w-10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Banheiros</span>
                    <strong className="font-display text-sm font-bold tabular-nums text-[#0B131F] sm:text-base">
                      {property.details.bathrooms}
                    </strong>
                  </div>
                </div>

                {/* Vagas */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#0E7058] sm:h-10 sm:w-10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 16l-1-7m-11 7l1-7m0 0l2-2h8l2 2m-12 0h12M5 19a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Vagas</span>
                    <strong className="font-display text-sm font-bold tabular-nums text-[#0B131F] sm:text-base">
                      {property.details.garageSpaces}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Parecer Técnico Pessoal da Gisele */}
              {property.curatorNote && (
                <div className="rounded-2xl border border-emerald-200 bg-[#EBF6F2]/80 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0E7058]" />
                    <span className="font-display text-xs font-bold tracking-wider text-[#0E7058] uppercase">
                      Parecer Pessoal de Gisele Andrade • CRECI RJ 81717
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-700 italic sm:text-sm">
                    &ldquo;{property.curatorNote}&rdquo;
                  </p>
                </div>
              )}

              {/* Descrição Detalhada */}
              <div>
                <h3 className="font-display text-lg font-bold text-[#0B131F] sm:text-xl">
                  Sobre o Imóvel
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Características e Comodidades (Features do XML) */}
              {property.details.features.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B131F] sm:text-xl">
                    Comodidades do Imóvel
                  </h3>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {property.details.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0E7058] text-[10px] font-bold text-white">
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ficha Técnica e Registral */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-display text-base font-bold text-[#0B131F] sm:text-lg">
                  Ficha Técnica e Registral
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 sm:gap-4">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Código de Referência:</span>
                    <strong className="text-slate-800">{property.listingId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Tipo de Imóvel:</span>
                    <strong className="text-slate-800">{property.propertyType}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Situação Jurídica:</span>
                    <strong className="text-emerald-700">{property.details.legalStatus}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Posição Solar:</span>
                    <strong className="text-slate-800">{property.details.sunOrientation || "Sol da manhã"}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Área Construída:</span>
                    <strong className="tabular-nums text-slate-800">{property.details.builtArea || property.details.livingArea} m²</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Área Total do Lote:</span>
                    <strong className="tabular-nums text-slate-800">{property.details.totalArea || "—"} m²</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">IPTU Anual:</span>
                    <strong className="tabular-nums text-slate-800">{property.price.propertyTax ? formatBRL(property.price.propertyTax) : "Sob consulta"}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Condomínio Mensal:</span>
                    <strong className="tabular-nums text-slate-800">{property.price.condoFee ? formatBRL(property.price.condoFee) : "Não possui"}</strong>
                  </div>
                </div>
              </div>

              {/* Seção de Financiamento Dedicada ao Imóvel */}
              {property.price.acceptsFinancing && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
                        Condições de Pagamento
                      </span>
                      <h3 className="mt-1 font-display text-base font-bold text-[#0B131F] sm:text-lg">
                        Este imóvel aceita financiamento bancário
                      </h3>
                    </div>
                    <span className="inline-block rounded bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0E7058]">
                      Aprovamos seu Crédito
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Avaliamos sua documentação e cuidamos de todo o processo junto à Caixa, Itaú, Santander ou Bradesco.
                    {property.price.useFGTS && " Você pode utilizar o saldo do seu FGTS como parte do pagamento da entrada."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.price.banksAvailable?.map((bank, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                      >
                        {bank}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <a
                      href={buildFinancingSimulatorLink(property)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7058] hover:underline sm:text-sm"
                    >
                      Solicitar simulação exata das parcelas para este imóvel →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Fixa de Conversão e Agendamento Direto (4 cols) */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6 lg:sticky lg:top-28">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <div className="relative h-12 w-28 overflow-hidden">
                    <Image
                      src="/images/gisele-logo.png"
                      alt="Logo Gisele Andrade"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-[#0B131F]">
                      Gisele S. Andrade
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500">
                      CRECI RJ 81717
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                    Investimento
                  </span>
                  <span className="font-display text-2xl font-bold tabular-nums text-[#0B131F] sm:text-3xl">
                    {formatBRL(property.price.amount)}
                  </span>
                </div>

                <div className="mt-6 space-y-2.5 sm:space-y-3">
                  <a
                    href={buildWhatsAppLink(property)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0E7058] text-center text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#09503E]"
                  >
                    Agendar Visita no WhatsApp
                  </a>

                  {property.price.acceptsFinancing && (
                    <a
                      href={buildFinancingSimulatorLink(property)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-300 text-center text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Simular Financiamento
                    </a>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 text-center text-xs text-slate-500">
                  <p>
                    <strong>Atendimento no Lake&apos;s Shopping</strong>
                  </p>
                  <p className="mt-1 text-[11px]">
                    Av. Saquarema, 567 • Loja 23 • Porto Novo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SellersCTA />
      <Footer />
    </div>
  );
}
