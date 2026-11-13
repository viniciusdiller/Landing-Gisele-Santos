"use client";

import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppLink } from "@/services/property-service";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-[#FAFAF8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand identity com a Logo Real da Gisele */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="relative h-12 w-28 overflow-hidden rounded-md bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105 sm:w-36">
            <Image
              src="/images/gisele-logo.jpg"
              alt="Gisele S. Andrade Imóveis"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden border-l border-slate-200 pl-3.5 sm:flex sm:flex-col">
            <span className="font-display text-xs font-bold tracking-tight text-[#0B131F]">
              CRECI RJ 81717
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
              Saquarema • Região dos Lagos
            </span>
          </div>
        </Link>

        {/* Navigation links - Direto e Editorial */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#imoveis"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Imóveis
          </Link>
          <Link
            href="/#bairros"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Regiões
          </Link>
          <Link
            href="/#sobre-mim"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Sobre mim
          </Link>
          <Link
            href="/#financiamento"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Financiamento
          </Link>
          <Link
            href="/#proprietarios"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0B131F]"
          >
            Anunciar Imóvel
          </Link>
        </nav>

        {/* WhatsApp direct CTA - Limpo e profissional, sem status artificial */}
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-slate-500 lg:inline-block">
            (22) 99913-2185
          </span>
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
