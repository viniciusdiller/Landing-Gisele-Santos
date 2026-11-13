"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VivaRealProperty } from "@/types/viva-real";
import { formatBRL, buildWhatsAppLink } from "@/services/property-service";
import { Badge } from "@/components/ui/badge";

interface PropertyModalProps {
  property: VivaRealProperty | null;
  onClose: () => void;
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B131F]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold tracking-tight text-[#0B131F]">
              Ficha Técnica do Imóvel
            </span>
            <Badge variant="emerald">Ref: {property.listingId}</Badge>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {/* Main Gallery */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={property.media[activeMediaIndex]?.url || property.media[0]?.url}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover"
            />
            {property.media[activeMediaIndex]?.caption && (
              <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                {property.media[activeMediaIndex].caption}
              </div>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {property.media.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {property.media.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    activeMediaIndex === idx
                      ? "border-[#0E7058] opacity-100"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <Image src={item.url} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Details & Specs */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
                {property.address.city} • {property.address.neighborhood}
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-[#0B131F]">
                {property.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {property.description}
              </p>

              {/* Differential Features List */}
              <div className="mt-6">
                <span className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Diferenciais e Infraestrutura
                </span>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {property.details.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0E7058]" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Summary & Direct Contact */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6 lg:col-span-4">
              <div>
                <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Valor Solicitado
                </span>
                <span className="font-display text-2xl font-bold tabular-nums text-[#0B131F]">
                  {formatBRL(property.price.amount)}
                </span>

                <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-xs text-slate-600">
                  {property.price.condoFee && (
                    <div className="flex justify-between">
                      <span>Condomínio:</span>
                      <strong className="tabular-nums">
                        {formatBRL(property.price.condoFee)}/mês
                      </strong>
                    </div>
                  )}
                  {property.price.propertyTax && (
                    <div className="flex justify-between">
                      <span>IPTU Anual:</span>
                      <strong className="tabular-nums">
                        {formatBRL(property.price.propertyTax)}
                      </strong>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Área Útil:</span>
                    <strong className="tabular-nums">
                      {property.details.livingArea} m²
                    </strong>
                  </div>
                  {property.details.totalArea && (
                    <div className="flex justify-between">
                      <span>Área Terreno:</span>
                      <strong className="tabular-nums">
                        {property.details.totalArea} m²
                      </strong>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  href={buildWhatsAppLink(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-[#0E7058] text-center text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#09503E]"
                >
                  Agendar Visita com a Gisele
                </a>
                <span className="mt-2 block text-center text-[10px] text-slate-500">
                  CRECI RJ 81717 • Atendimento Direto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
