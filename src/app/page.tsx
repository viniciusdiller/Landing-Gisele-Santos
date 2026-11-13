"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PropertyCard } from "@/components/landing/PropertyCard";
import { Neighborhoods } from "@/components/landing/Neighborhoods";
import { AboutBroker } from "@/components/landing/AboutBroker";
import { SellersCTA } from "@/components/landing/SellersCTA";
import { Footer } from "@/components/landing/Footer";
import {
  getPaginatedProperties,
  PropertyFilterOptions,
} from "@/services/property-service";

export default function Home() {
  const [filters, setFilters] = useState<PropertyFilterOptions>({
    page: 1,
    limit: 6, // 6 imóveis por página (1 destaque + 5 no grid ou 6 no grid)
    sortBy: "relevance",
  });

  const paginatedResult = getPaginatedProperties(filters);
  const { items, total, currentPage, totalPages, hasNextPage, hasPrevPage } = paginatedResult;

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
    const section = document.getElementById("imoveis");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const isFirstPage = currentPage === 1;
  const highlightProperty = isFirstPage && filters.sortBy === "relevance" ? items[0] : null;
  const secondaryProperties = highlightProperty ? items.slice(1) : items;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header Sticky com a Logo Oficial */}
      <Header />

      {/* Hero Section com Filtro de Preço e Ordenação */}
      <Hero
        currentFilters={filters}
        onFilterChange={(newFilters) => setFilters(newFilters)}
      />

      {/* Portfólio Selecionado com Paginação e Ordenação */}
      <section id="imoveis" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
                Portfólio Selecionado • Saquarema
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl lg:text-4xl">
                Oportunidades com Escritura e RGI
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
              <span>
                Mostrando <strong className="text-slate-800">{items.length}</strong> de{" "}
                <strong className="text-slate-800">{total}</strong> imóveis
              </span>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center">
              <h3 className="font-display text-base font-bold text-slate-800 sm:text-lg">
                Nenhum imóvel encontrado nesta faixa de valor ou critério
              </h3>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Tente redefinir a faixa de preço ou entre em contato direto pelo WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setFilters({ page: 1, limit: 6, sortBy: "relevance" })}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B131F] px-5 text-xs font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-[#162438] active:scale-95"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          ) : (
            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {/* Highlight Property 16:9 (aparece apenas na página 1 e sem ordenação forçada) */}
              {highlightProperty && (
                <PropertyCard property={highlightProperty} featured={true} />
              )}

              {/* Grid Principal */}
              {secondaryProperties.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {secondaryProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}

              {/* Controles de Paginação Táteis (Hitbox 44x44px) */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row">
                  <span className="text-xs font-medium text-slate-500">
                    Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong> ({total} imóveis)
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={!hasPrevPage}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-3.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none active:scale-95"
                    >
                      ← Anterior
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => handlePageChange(p)}
                          className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-xs font-bold transition-all ${
                            currentPage === p
                              ? "bg-[#0E7058] text-white shadow-xs"
                              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          } active:scale-95`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled={!hasNextPage}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-3.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none active:scale-95"
                    >
                      Próxima →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Regiões de Saquarema */}
      <Neighborhoods />

      {/* Sobre mim (Gisele Andrade) */}
      <AboutBroker />

      {/* Chamada para Proprietários */}
      <SellersCTA />

      {/* Footer Oficial */}
      <Footer />
    </div>
  );
}
