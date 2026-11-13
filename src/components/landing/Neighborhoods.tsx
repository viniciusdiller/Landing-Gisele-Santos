import Image from "next/image";
import { NEIGHBORHOODS_DATA } from "@/data/mocks/viva-real-mock";

export function Neighborhoods() {
  return (
    <section id="bairros" className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
              Geografia e Estilo de Vida
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B131F] sm:text-4xl">
              As regiões mais cobiçadas de Saquarema
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Cada bairro possui sua própria vocação. Do agito esportivo de Itaúna
            ao sossego absoluto das margens da lagoa em Porto da Roça.
          </p>
        </div>

        {/* Asymmetrical Horizontal Scroll / Grid Bento */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS_DATA.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/90 via-[#0B131F]/30 to-transparent" />

              <div className="absolute right-6 bottom-6 left-6 text-white">
                <span className="inline-block rounded bg-white/20 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-emerald-200 backdrop-blur-md uppercase">
                  {item.badge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
                <span className="mt-3 block text-[11px] font-medium text-emerald-400">
                  {item.count} disponíveis
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
