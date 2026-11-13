"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppLink } from "@/services/property-service";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#FAFAF8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand identity com a Logo Real */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-11 w-28 overflow-hidden rounded-md bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-36">
            <Image
              src="/images/gisele-logo.png"
              alt="Gisele S. Andrade Imóveis"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden border-l border-slate-200 pl-3 sm:flex sm:flex-col">
            <span className="font-display text-xs font-bold tracking-tight text-[#0B131F]">
              CRECI RJ 81717
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
              Saquarema • Região dos Lagos
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right CTA Desktop & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0E7058] px-3.5 text-xs font-semibold tracking-wide text-white transition-all duration-150 hover:bg-[#09503E] active:scale-[0.98] sm:px-4"
          >
            WhatsApp
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Backdrop + Slide-down) */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-[#FAFAF8] px-6 py-6 shadow-xl md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#imoveis"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#0E7058]"
            >
              Imóveis Selecionados
            </Link>
            <Link
              href="/#bairros"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#0E7058]"
            >
              Regiões de Saquarema
            </Link>
            <Link
              href="/#sobre-mim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#0E7058]"
            >
              Sobre mim
            </Link>
            <Link
              href="/#financiamento"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#0E7058]"
            >
              Simulação de Financiamento
            </Link>
            <Link
              href="/#proprietarios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-800 transition-colors hover:text-[#0E7058]"
            >
              Para Proprietários
            </Link>
            <div className="border-t border-slate-200 pt-4">
              <span className="block text-xs font-semibold text-slate-500 uppercase">
                Endereço Físico
              </span>
              <p className="mt-1 text-xs text-slate-600">
                Av. Saquarema, 567 • Loja 23 (Lake&apos;s Shopping)
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
