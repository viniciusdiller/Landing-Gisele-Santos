import Image from "next/image";
import { buildWhatsAppLink } from "@/services/property-service";

export function AboutBroker() {
  return (
    <section id="sobre-mim" className="border-t border-slate-200/80 bg-[#FAFAF8] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Container (5 cols) */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-900/10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Gisele S. Andrade - Corretora de Imóveis em Saquarema"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/50 via-transparent to-transparent" />
            </div>

            {/* Cartão de Identificação Profissional */}
            <div className="absolute -bottom-5 -right-2 rounded-xl border border-slate-200 bg-white p-3.5 shadow-lg sm:right-4 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-20 overflow-hidden">
                  <Image
                    src="/images/gisele-logo.png"
                    alt="Logo Gisele Andrade"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    Registro Profissional
                  </span>
                  <span className="font-display text-sm font-bold text-[#0B131F]">
                    CRECI RJ 81717
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto em Primeira Pessoa: Humano, Pragmático (7 cols) */}
          <div className="mt-4 lg:mt-0 lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
              Sobre mim
            </span>

            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl lg:text-4xl">
              Eu não vendo promessas. Vendo imóveis com endereço certo, chave na mão e documento na mesa.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Quem procura imóvel em Saquarema e na Região dos Lagos logo percebe um problema
                recorrente: anúncios de posse precária, loteamentos irregulares e corretores que
                somem na primeira pergunta técnica sobre a certidão de ônus reais.
              </p>
              <p>
                Eu trabalho de forma diferente. Atendo pessoalmente na minha loja no{" "}
                <strong>Lake&apos;s Shopping</strong> (Loja 23, em Porto Novo). Cada casa,
                terreno ou apartamento que entra na minha carteira passa primeiro por uma
                conferência rigorosa de RGI, escritura e viabilidade de financiamento bancário.
              </p>
              <p>
                Se você está vindo da capital, de outro estado ou já mora aqui e quer trocar
                de casa, eu conduzo todo o processo com você — desde a escolha do bairro ideal
                até a entrega das chaves no cartório.
              </p>
            </div>

            {/* Três pilares práticos */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs">
                <span className="font-display text-xs font-bold text-[#0B131F] uppercase">
                  Endereço Físico
                </span>
                <p className="mt-1 text-xs text-slate-500">
                  Lake&apos;s Shopping, loja 23. Você sabe exatamente onde me encontrar.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs">
                <span className="font-display text-xs font-bold text-[#0B131F] uppercase">
                  Auditoria de RGI
                </span>
                <p className="mt-1 text-xs text-slate-500">
                  Sem dor de cabeça futura com cartórios ou prefeitura.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs">
                <span className="font-display text-xs font-bold text-[#0B131F] uppercase">
                  Correspondente
                </span>
                <p className="mt-1 text-xs text-slate-500">
                  Agilidade na aprovação de crédito na Caixa e bancos privados.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppLink(undefined, "Gostaria de agendar um café no Lake's Shopping para conversar sobre imóveis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B131F] px-6 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-colors duration-150 hover:bg-[#162438] active:scale-[0.98]"
              >
                Falar Diretamente Comigo
              </a>
              <span className="text-xs text-slate-500">
                Av. Saquarema, 567 • Loja 23 (Lake&apos;s Shopping)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
