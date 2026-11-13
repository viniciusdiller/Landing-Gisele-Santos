"use client";

import Link from "next/link";
import { buildWhatsAppLink } from "@/services/property-service";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand identity */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B131F] text-white transition-transform duration-200 group-hover:scale-105">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              GA
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-[#0B131F]">
              GISELE S. ANDRADE
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
              Imóveis em Saquarema • CRECI 81717
            </span>
          </div>
        </Link>

        {/* Navigation links - clean editorial */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#imoveis"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Imóveis Selecionados
          </Link>
          <Link
            href="#bairros"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Regiões
          </Link>
          <Link
            href="#sobre"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Sobre a Gisele
          </Link>
          <Link
            href="#proprietarios"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Anunciar Imóvel
          </Link>
        </nav>

        {/* WhatsApp direct CTA with live status pill */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-800 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            Disponível para atendimento
          </div>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0E7058] px-4 text-xs font-semibold tracking-wide text-white transition-all duration-150 hover:bg-[#09503E] active:scale-[0.98]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
