import Image from "next/image";
import { buildWhatsAppLink } from "@/services/property-service";

export function AboutBroker() {
  return (
    <section id="sobre" className="border-t border-slate-200/80 bg-[#FAFAF8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Container with Overlapping Offset (5 cols) */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-2xl shadow-slate-900/10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Gisele S. Andrade - Corretora de Imóveis em Saquarema"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/60 via-transparent to-transparent" />
            </div>

            {/* Credential Badge Floating Box */}
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:right-6">
              <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Conselho Regional
              </span>
              <span className="font-display text-lg font-bold text-[#0B131F]">
                CRECI RJ 81717
              </span>
              <span className="mt-1 block text-xs font-semibold text-[#0E7058]">
                Atendimento Consultivo Direto
              </span>
            </div>
          </div>

          {/* Editorial Authority Text (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
              Autoridade e Presença Local
            </span>

            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B131F] sm:text-4xl lg:text-5xl">
              Negociações imobiliárias conduzidas com rigor, transparência e endereço fixo.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Com sede estabelecida no <strong>Lake&apos;s Shopping</strong>, no coração de
                Porto Novo, <strong>Gisele S. Andrade</strong> construiu sua reputação no
                mercado de Saquarema com base em uma premissa simples: nenhum imóvel entra no
                portfólio sem uma verificação jurídica e documental prévia minuciosa.
              </p>
              <p>
                Em uma região onde muitos compradores enfrentam inseguranças com
                posses e loteamentos irregulares, a curadoria da Gisele garante a aquisição
                exclusiva de bens com <strong>Escritura Definitiva e RGI</strong>, além de suporte
                completo a financiamentos bancários pela Caixa e bancos privados.
              </p>
            </div>

            {/* Pillars of trust without cheesy icons */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-4">
                <span className="font-display text-sm font-bold text-[#0B131F]">
                  Auditoria de Documentação
                </span>
                <p className="mt-1 text-xs text-slate-500">
                  Checagem prévia de certidões, ônus e histórico de matrícula antes da visita.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-4">
                <span className="font-display text-sm font-bold text-[#0B131F]">
                  Atendimento Pessoal
                </span>
                <p className="mt-1 text-xs text-slate-500">
                  Você conversa diretamente com a corretora responsável, sem repasses ou intermediários.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0B131F] px-6 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#162438]"
              >
                Conversar Diretamente com a Gisele
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
