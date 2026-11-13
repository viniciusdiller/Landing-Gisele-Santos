"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PropertyFilterOptions, SortOption } from "@/services/property-service";

interface HeroProps {
  onFilterChange: (filters: PropertyFilterOptions) => void;
  currentFilters: PropertyFilterOptions;
}

export function Hero({ onFilterChange, currentFilters }: HeroProps) {
  const [transaction, setTransaction] = useState<"For Sale" | "For Rent">(
    currentFilters.transactionType || "For Sale"
  );
  const [neighborhood, setNeighborhood] = useState(currentFilters.neighborhood || "Todos");
  const [propertyType, setPropertyType] = useState(currentFilters.propertyType || "Todos");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>(currentFilters.sortBy || "relevance");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    let minPrice: number | undefined = undefined;
    let maxPrice: number | undefined = undefined;

    if (priceRange === "up-to-500k") {
      maxPrice = 500000;
    } else if (priceRange === "500k-1m") {
      minPrice = 500000;
      maxPrice = 1000000;
    } else if (priceRange === "1m-1.5m") {
      minPrice = 1000000;
      maxPrice = 1500000;
    } else if (priceRange === "above-1.5m") {
      minPrice = 1500000;
    }

    onFilterChange({
      ...currentFilters,
      transactionType: transaction,
      neighborhood: neighborhood === "Todos" ? undefined : neighborhood,
      propertyType: propertyType === "Todos" ? undefined : propertyType,
      minPrice,
      maxPrice,
      sortBy,
      page: 1, // reseta para primeira página ao aplicar novo filtro
    });

    const section = document.getElementById("imoveis");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Asymmetrical Hero Layout */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Bold Headline com Stagger Motion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold tracking-wider text-slate-700 uppercase"
            >
              Curadoria Imobiliária em Saquarema • RJ
            </motion.div>

            <h1 className="font-display text-3xl leading-[1.1] font-bold tracking-tight text-[#0B131F] sm:text-5xl lg:text-6xl">
              Imóveis com alma entre o mar e a tranquilidade da lagoa.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base lg:text-lg">
              Sem burocracia genérica e sem promessas vazias. Selecionamos apenas
              propriedades com documentação rigorosamente auditada, acabamento de
              verdade e localização privilegiada na Região dos Lagos.
            </p>

            {/* Quick Stat Anchors */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200/90 pt-5 sm:gap-6 sm:pt-6">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
                <span className="font-display text-xl font-bold tracking-tight text-[#0B131F] sm:text-2xl lg:text-3xl">
                  R$ 85M+
                </span>
                <span className="mt-0.5 block text-[11px] font-medium text-slate-500 sm:text-xs">
                  Em patrimônio avaliado
                </span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
                <span className="font-display text-xl font-bold tracking-tight text-[#0B131F] sm:text-2xl lg:text-3xl">
                  100%
                </span>
                <span className="mt-0.5 block text-[11px] font-medium text-slate-500 sm:text-xs">
                  Imóveis com RGI
                </span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
                <span className="font-display text-xl font-bold tracking-tight text-[#0B131F] sm:text-2xl lg:text-3xl">
                  Lake&apos;s
                </span>
                <span className="mt-0.5 block text-[11px] font-medium text-slate-500 sm:text-xs">
                  Shopping • Loja 23
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Photography com Motion suave */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/5 sm:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
                alt="Imóvel exclusivo em Saquarema"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/80 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="absolute right-4 bottom-4 left-4 text-white sm:right-6 sm:bottom-6 sm:left-6"
              >
                <span className="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase sm:text-xs">
                  Destaque Beira-Lagoa
                </span>
                <h3 className="mt-1 font-display text-lg font-bold leading-tight sm:text-xl">
                  Porto da Roça • Pier Privativo
                </h3>
                <span className="mt-1 block font-display text-base font-semibold tabular-nums text-white sm:mt-2 sm:text-lg">
                  R$ 1.450.000
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tactile Search Bar com Filtro de Faixa de Preço e Ordenação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 sm:mt-12 lg:p-6"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
            {/* Transaction Segmented Control */}
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Finalidade
              </label>
              <div className="grid grid-cols-2 rounded-xl bg-slate-100 p-1 min-h-[44px]">
                <button
                  type="button"
                  onClick={() => setTransaction("For Sale")}
                  className={`flex items-center justify-center rounded-lg text-xs font-bold transition-all duration-150 ${
                    transaction === "For Sale"
                      ? "bg-white text-[#0B131F] shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Comprar
                </button>
                <button
                  type="button"
                  onClick={() => setTransaction("For Rent")}
                  className={`flex items-center justify-center rounded-lg text-xs font-bold transition-all duration-150 ${
                    transaction === "For Rent"
                      ? "bg-white text-[#0B131F] shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Alugar
                </button>
              </div>
            </div>

            {/* Neighborhood Selector */}
            <div className="lg:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Região / Bairro
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
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
            <div className="lg:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Tipo de Imóvel
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
              >
                <option value="Todos">Todos os tipos</option>
                <option value="Home">Casa Linear / Duplex</option>
                <option value="Condo">Casa em Condomínio</option>
                <option value="Apartment">Apartamento / Cobertura</option>
                <option value="Land">Terreno em Condomínio</option>
              </select>
            </div>

            {/* Faixa de Preço */}
            <div className="lg:col-span-3">
              <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Faixa de Preço
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
              >
                <option value="all">Qualquer valor</option>
                <option value="up-to-500k">Até R$ 500 mil</option>
                <option value="500k-1m">R$ 500 mil a R$ 1 milhão</option>
                <option value="1m-1.5m">R$ 1 milhão a R$ 1.5 milhão</option>
                <option value="above-1.5m">Acima de R$ 1.5 milhão</option>
              </select>
            </div>

            {/* Ordenação por Preço */}
            <div className="lg:col-span-3">
              <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Ordenar por
              </label>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 transition-colors focus:border-[#0E7058] focus:outline-none"
                >
                  <option value="relevance">Destaques</option>
                  <option value="price-asc">Menor Preço → Maior</option>
                  <option value="price-desc">Maior Preço → Menor</option>
                  <option value="area-desc">Maior Área Privativa</option>
                </select>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  type="submit"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-[#0B131F] px-4 text-sm font-semibold tracking-wide text-white shadow-xs transition-colors hover:bg-[#162438]"
                >
                  Filtrar
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
