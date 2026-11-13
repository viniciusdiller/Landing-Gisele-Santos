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
      {/* Header Sticky com a Logo Real e sem status artificial */}
      <Header />

      {/* Hero Section */}
      <Hero onFilterChange={(newFilters) => setFilters(newFilters)} />

      {/* Portfólio Selecionado - Cada card leva para a página dedicada */}
      <section id="imoveis" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
                Portfólio Selecionado • Saquarema
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B131F] sm:text-4xl">
                Oportunidades com Escritura e RGI
              </h2>
            </div>
            <div className="text-xs font-medium text-slate-500">
              Mostrando <strong className="text-slate-800">{filteredProperties.length}</strong> imóveis disponíveis
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <h3 className="font-display text-lg font-bold text-slate-800">
                Nenhum imóvel encontrado com esses critérios
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Tente redefinir os filtros ou fale com a Gisele no WhatsApp para uma busca personalizada.
              </p>
              <button
                type="button"
                onClick={() => setFilters({})}
                className="mt-4 rounded-lg bg-[#0B131F] px-4 py-2 text-xs font-semibold text-white"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="mt-10 space-y-8">
              {/* Highlight Property (16:9 Widescreen) */}
              {highlightProperty && (
                <PropertyCard property={highlightProperty} featured={true} />
              )}

              {/* Secondary Grid (Asymmetrical rhythm) */}
              {secondaryProperties.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {secondaryProperties.map((property) => (
                    <PropertyCard key={property.listingId} property={property} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Regiões de Saquarema */}
      <Neighborhoods />

      {/* Sobre mim (Gisele Andrade - autêntico e sem slop) */}
      <AboutBroker />

      {/* Seção de Financiamento Bancário (Caixa, Itaú, Santander, Bradesco) */}
      <FinancingSection />

      {/* Chamada para Proprietários */}
      <SellersCTA />

      {/* Footer com Logo e Dados do Lake's Shopping */}
      <Footer />
    </div>
  );
}
