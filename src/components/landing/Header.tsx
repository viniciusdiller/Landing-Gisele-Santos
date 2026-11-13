"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/services/property-service";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Imóveis", href: "/#imoveis" },
    { label: "Regiões", href: "/#bairros" },
    { label: "Sobre mim", href: "/#sobre-mim" },
    { label: "Anunciar Imóvel", href: "/#proprietarios" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-[#FAFAF8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand identity com a Logo Real */}
        <Link href="/" className="group flex items-center gap-3 min-h-[44px] py-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative h-12 w-32 sm:h-14 sm:w-40"
          >
            <Image
              src="/images/gisele-logo.png"
              alt="Gisele S. Andrade Imóveis"
              fill
              priority
              className="object-contain object-left"
            />
          </motion.div>
          <div className="hidden border-l border-slate-200 pl-3 sm:flex sm:flex-col">
            <span className="font-display text-xs font-bold tracking-tight text-[#0B131F]">
              CRECI RJ 81717
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
              Saquarema • Região dos Lagos
            </span>
          </div>
        </Link>

        {/* Desktop Navigation com Labels Diretas em Linha Única */}
        <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative inline-flex items-center py-2 text-sm font-medium whitespace-nowrap text-slate-600 transition-colors duration-150 hover:text-[#0B131F]"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0E7058] transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Desktop & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2.5">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0E7058] px-4 text-xs font-semibold tracking-wide text-white shadow-xs transition-colors duration-150 hover:bg-[#09503E]"
          >
            WhatsApp
          </motion.a>

          {/* Hamburger Button com Hitbox 44x44px mínima */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu principal"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-xs md:hidden"
          >
            <div className="flex h-4 w-4 flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="h-0.5 w-full rounded-full bg-slate-800 origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="h-0.5 w-full rounded-full bg-slate-800"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="h-0.5 w-full rounded-full bg-slate-800 origin-center"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-[#0B131F]/40 backdrop-blur-xs md:hidden"
            />

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.28,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="relative z-50 overflow-hidden border-b border-slate-200 bg-[#FAFAF8] shadow-2xl md:hidden"
            >
              <div className="px-5 py-6">
                <nav className="flex flex-col divide-y divide-slate-100">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.03 * idx,
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-h-[48px] items-center justify-between py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 active:text-[#0E7058]"
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Card de Atendimento Lake's Shopping */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        Atendimento Presencial
                      </span>
                      <strong className="font-display text-sm text-[#0B131F]">
                        Lake&apos;s Shopping • Loja 23
                      </strong>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Av. Saquarema, 567 — Porto Novo, Saquarema/RJ
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
