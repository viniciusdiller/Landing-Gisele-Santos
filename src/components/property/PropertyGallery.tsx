"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Foto } from "@/types/viva-real";

interface PropertyGalleryProps {
  media: Foto[];
  title: string;
}

export function PropertyGallery({ media, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = media.length;

  if (total === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentImage = media[currentIndex] || media[0];

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Imagem Principal com Controles Táteis e Transição Suave */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md sm:aspect-[16/9] lg:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.url}
              alt={currentImage.caption || `${title} - Foto ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradiente sutil para legibilidade dos overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Contador de Fotos (Ex: Foto 2 de 4) */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md shadow-sm">
            <svg
              className="h-3.5 w-3.5 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              Foto <strong className="text-white">{currentIndex + 1}</strong> de {total}
            </span>
          </span>
        </div>

        {/* Legenda contextual */}
        {currentImage.caption && (
          <div className="absolute bottom-3 left-3 right-16 sm:bottom-4 sm:left-4 sm:right-28 z-10">
            <div className="inline-block rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {currentImage.caption}
            </div>
          </div>
        )}

        {/* Botões de Navegação Anterior / Próximo com Hitbox Mínima de 44x44px */}
        {total > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none z-10">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-md transition-transform duration-150 hover:bg-white hover:scale-105 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima foto"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-md transition-transform duration-150 hover:bg-white hover:scale-105 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Grid de Miniaturas Interativas (Thumbnails com estado ativo nítido) */}
      {total > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {media.map((img, i) => {
            const isActive = i === currentIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`group relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 transition-all duration-150 min-h-[44px] ${
                  isActive
                    ? "ring-2 ring-[#0E7058] ring-offset-2 scale-[1.01]"
                    : "opacity-75 hover:opacity-100 hover:scale-[1.01]"
                }`}
              >
                <Image
                  src={img.url}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 25vw, 15vw"
                  className="object-cover"
                />
                {isActive && (
                  <span className="absolute inset-0 bg-[#0E7058]/10" />
                )}
                {img.caption && (
                  <span className="absolute bottom-1 left-1 max-w-[90%] truncate rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-white">
                    {img.caption}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
