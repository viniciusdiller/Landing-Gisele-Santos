"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PropertyCard } from "@/components/landing/PropertyCard";
import { Neighborhoods } from "@/components/landing/Neighborhoods";
import { AboutBroker } from "@/components/landing/AboutBroker";
import { FinancingSection } from "@/components/landing/FinancingSection";
import { SellersCTA } from "@/components/landing/SellersCTA";
import { Footer } from "@/components/landing/Footer";
import {
  getAllProperties,
  filterProperties,
  PropertyFilterOptions,
} from "@/services/property-service";

export default function Home() {
  const [filters, setFilters] = useState<PropertyFilterOptions>({});

  const filteredProperties =
    Object.keys(filters).length === 0
      ? getAllProperties()
      : filterProperties(filters);

  const highlightProperty = filteredProperties[0];
  const secondaryProperties = filteredProperties.slice(1);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header Sticky com a Logo Oficial */}
      <Header />

      {/* Hero Section */}
      <Hero onFilterChange={(newFilters) => setFilters(newFilters)} />

      {/* Portfólio Selecionado */}
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
            <div className="text-xs font-medium text-slate-500">
              Mostrando <strong className="text-slate-800">{filteredProperties.length}</strong> imóveis disponíveis
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center">
              <h3 className="font-display text-base font-bold text-slate-800 sm:text-lg">
                Nenhum imóvel encontrado com esses critérios
              </h3>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Tente redefinir os filtros ou fale com a Gisele no WhatsApp para uma busca personalizada.
              </p>
              <button
                type="button"
                onClick={() => setFilters({})}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B131F] px-5 text-xs font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-[#162438] active:scale-95"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {/* Highlight Property */}
              {highlightProperty && (
                <PropertyCard property={highlightProperty} featured={true} />
              )}

              {/* Secondary Grid */}
              {secondaryProperties.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {secondaryProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
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

      {/* Seção de Financiamento Bancário */}
      <FinancingSection />

      {/* Chamada para Proprietários */}
      <SellersCTA />

      {/* Footer Oficial */}
      <Footer />
    </div>
  );
}
