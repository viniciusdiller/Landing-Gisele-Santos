import Link from "next/link";
import { buildWhatsAppLink } from "@/services/property-service";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070C14] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identity column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B131F]">
                <span className="font-display font-bold">GA</span>
              </div>
              <div>
                <span className="font-display text-base font-bold text-white">
                  GISELE S. ANDRADE
                </span>
                <span className="block text-xs text-slate-400">
                  Corretora de Imóveis • CRECI RJ 81717
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
              Intermediação imobiliária transparente em Saquarema, Itaúna, Gravatá,
              Porto da Roça, Praia da Vila e Vilatur. Segurança jurídica para quem compra,
              liquidez e discrição para quem vende.
            </p>
          </div>

          {/* Location & Contact info (4 cols) */}
          <div className="lg:col-span-4">
            <span className="block text-xs font-semibold tracking-wider text-white uppercase">
              Endereço Físico & Contato
            </span>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed">
              <li className="text-slate-300">
                <strong>Lake&apos;s Shopping:</strong> Av. Saquarema, 567 — Loja 23
              </li>
              <li>Porto Novo / Centro — Saquarema / RJ — CEP 28991-311</li>
              <li className="pt-2">
                <strong>WhatsApp / Tel:</strong> (22) 99913-2185
              </li>
              <li>
                <strong>E-mail:</strong> giselesandradeimoveis@gmail.com
              </li>
            </ul>
          </div>

          {/* Quick links & Social (3 cols) */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-semibold tracking-wider text-white uppercase">
              Canais Oficiais
            </span>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/giselesandradeimoveis/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram: @giselesandradeimoveis ↗
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Canal Direto de WhatsApp ↗
                </a>
              </li>
              <li>
                <Link href="#imoveis" className="transition-colors hover:text-white">
                  Carteira de Imóveis
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="transition-colors hover:text-white">
                  Sobre a Corretora
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Copyright and Disclaimer */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800/80 pt-8 text-[11px] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Gisele S. Andrade Imóveis. Todos os direitos reservados. CRECI RJ 81717.</p>
          <p>
            Valores sujeitos a alteração sem aviso prévio. Disponibilidade confirmada mediante consulta direta.
          </p>
        </div>
      </div>
    </footer>
  );
}
