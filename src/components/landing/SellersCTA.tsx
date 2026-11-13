import Image from "next/image";

export function SellersCTA() {
  const sellerWhatsApp =
    "https://wa.me/5522999132185?text=" +
    encodeURIComponent(
      "Olá Gisele! Sou proprietário de um imóvel em Saquarema e gostaria de avaliar a inclusão dele na sua carteira de imóveis selecionados."
    );

  return (
    <section id="proprietarios" className="border-t border-slate-200/80 bg-[#0B131F] py-16 sm:py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 relative h-12 w-36">
              <Image
                src="/images/gisele-logo-white.png"
                alt="Gisele Andrade"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Para Proprietários de Saquarema
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Seu imóvel anunciado para compradores reais, com produção fotográfica profissional.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Não colocamos uma placa e esquecemos o imóvel. Fazemos avaliação
              técnica de mercado baseada em negócios fechados recentes na região,
              filtro rigoroso de compradores e apresentação visual de alto padrão.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href={sellerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#0E7058] px-8 text-center text-sm font-semibold tracking-wide text-white shadow-xs transition-colors duration-150 hover:bg-[#09503E] active:scale-[0.98] sm:w-auto"
            >
              Avaliar e Anunciar meu Imóvel
            </a>
            <span className="mt-3 block text-xs text-slate-400">
              Sem exclusividade forçada • Análise preliminar gratuita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
