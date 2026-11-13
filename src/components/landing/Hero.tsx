"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PropertyFilterOptions } from "@/services/property-service";

interface HeroProps {
  onFilterChange: (filters: PropertyFilterOptions) => void;
}

export function Hero({ onFilterChange }: HeroProps) {
  const [transaction, setTransaction] = useState<"Sale" | "Rent">("Sale");
  const [neighborhood, setNeighborhood] = useState("Todos");
  const [propertyType, setPropertyType] = useState("Todos");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      transactionType: transaction,
      neighborhood: neighborhood === "Todos" ? undefined : neighborhood,
      propertyType: propertyType === "Todos" ? undefined : propertyType,
    });
    const section = document.getElementById("imoveis");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Asymmetrical two-column hero layout */}
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Bold Typographic Headline (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold tracking-wider text-slate-700 uppercase">
              Curadoria Imobiliária em Saquarema • RJ
            </div>

            <h1 className="font-display text-4xl leading-[1.08] font-bold tracking-tight text-[#0B131F] sm:text-5xl lg:text-6xl">
              Imóveis com alma entre o mar e a tranquilidade da lagoa.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Sem burocracia genérica e sem promessas vazias. Selecionamos apenas
              propriedades com documentação rigorosamente auditada, acabamento de
              verdade e localização privilegiada na Região dos Lagos.
            </p>

            {/* Quick Stat Anchors - Technical figures without noisy icons */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-200/90 pt-6">
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl">
                  R$ 85M+
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500">
                  Em patrimônio avaliado
                </span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl">
                  100%
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500">
                  Imóveis com RGI regular
                </span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl">
                  Lake&apos;s
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500">
                  Shopping • Loja 23
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Editorial Photography with Overlapping Angles (5 cols) */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/5">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
                alt="Imóvel exclusivo em Saquarema"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/70 via-transparent to-transparent" />

              <div className="absolute right-6 bottom-6 left-6 text-white">
                <span className="text-[11px] font-semibold tracking-wider text-emerald-300 uppercase">
                  Destaque Beira-Lagoa
                </span>
                <h3 className="mt-1 font-display text-xl font-bold leading-tight">
                  Porto da Roça • Pier Privativo
                </h3>
                <span className="mt-2 block font-display text-lg font-semibold tabular-nums text-white">
                  R$ 1.450.000
                </span>
              </div>
            </div>

            {/* Overlapping Floating Tag */}
            <div className="absolute -top-4 -left-4 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
              <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                CRECI RJ 81717
              </span>
              <span className="font-display text-sm font-bold text-[#0B131F]">
                Gisele S. Andrade
              </span>
            </div>
          </div>
        </div>

        {/* Tactile Search Bar - High Contrast, Clean, No Slop */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 lg:p-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
            {/* Transaction Segmented Control */}
            <div className="md:col-span-3">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Finalidade
              </label>
              <div className="grid grid-cols-2 rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setTransaction("Sale")}
                  className={`rounded-md py-2 text-xs font-bold transition-all ${
                    transaction === "Sale"
                      ? "bg-white text-[#0B131F] shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Comprar
                </button>
                <button
                  type="button"
                  onClick={() => setTransaction("Rent")}
                  className={`rounded-md py-2 text-xs font-bold transition-all ${
                    transaction === "Rent"
                      ? "bg-white text-[#0B131F] shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Alugar
                </button>
              </div>
            </div>

            {/* Neighborhood Selector */}
            <div className="md:col-span-3">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Região / Bairro
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
              >
                <option value="Todos">Todos os bairros</option>
                <option value="Itaúna">Itaúna</option>
                <option value="Porto da Roça">Porto da Roça</option>
                <option value="Gravatá">Gravatá</option>
                <option value="Praia da Vila">Praia da Vila</option>
                <option value="Vilatur">Vilatur</option>
                <option value="Bacaxá">Bacaxá</option>
              </select>
            </div>

            {/* Property Type Selector */}
            <div className="md:col-span-3">
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Tipo de Imóvel
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
              >
                <option value="Todos">Todos os tipos</option>
                <option value="Casa">Casa Linear / Duplex</option>
                <option value="Casa em Condomínio">Casa em Condomínio</option>
                <option value="Apartamento">Apartamento / Cobertura</option>
                <option value="Terreno">Terreno em Condomínio</option>
              </select>
            </div>

            {/* Action Submit */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="h-11 w-full rounded-lg bg-[#0B131F] text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#162438] active:scale-[0.99]"
              >
                Filtrar Oportunidades
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
