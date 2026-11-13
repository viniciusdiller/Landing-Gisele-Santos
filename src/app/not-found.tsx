import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#0D161F]">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl w-full mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E7058]/10 text-[#0E7058] text-xs font-semibold uppercase tracking-wider mb-6">
            Página não encontrada
          </div>

          <div className="relative mb-6">
            <span
              className="text-8xl sm:text-9xl font-bold tracking-tight text-[#0D161F]/10 select-none block"
              style={{ fontFamily: "var(--font-clash), sans-serif" }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-stone-200/80 flex items-center justify-center p-3">
                <Image
                  src="/images/gisele-logo.png"
                  alt="Gisele S. Andrade"
                  width={48}
                  height={48}
                  className="w-full h-auto object-contain opacity-80"
                />
              </div>
            </div>
          </div>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0D161F] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-clash), sans-serif" }}
          >
            Este imóvel ou página não está mais disponível
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            O endereço digitado pode ter sido alterado ou o imóvel em questão já
            foi negociado em nossa curadoria exclusiva.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D161F] text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Voltar para o início
            </Link>

            <Link
              href="/#imoveis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-400 transition-colors"
            >
              Ver imóveis disponíveis
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
