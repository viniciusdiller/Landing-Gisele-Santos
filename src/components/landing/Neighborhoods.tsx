"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NEIGHBORHOODS_DATA } from "@/data/mocks/viva-real-mock";

export function Neighborhoods() {
  return (
    <section id="bairros" className="border-t border-slate-200/80 bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
              Geografia e Estilo de Vida
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B131F] sm:text-3xl lg:text-4xl">
              As regiões mais cobiçadas de Saquarema
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Cada bairro possui sua própria vocação. Do agito esportivo de Itaúna
            ao sossego absoluto das margens da lagoa em Porto da Roça.
          </p>
        </div>

        {/* Bento Grid com animação suave de revelação e hover */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {NEIGHBORHOODS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -3 }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/90 via-[#0B131F]/30 to-transparent" />

              <div className="absolute right-4 bottom-4 left-4 text-white sm:right-6 sm:bottom-6 sm:left-6">
                <span className="inline-block rounded bg-white/20 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-200 backdrop-blur-md uppercase sm:text-[11px]">
                  {item.badge}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <span className="mt-2 block text-[11px] font-medium text-emerald-400 sm:mt-3">
                  {item.count} disponíveis
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
