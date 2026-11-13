import { formatBRL } from "@/services/property-service";

export function FinancingSection() {
  const financingWhatsApp =
    "https://wa.me/5522999132185?text=" +
    encodeURIComponent(
      "Olá Gisele! Gostaria de fazer uma simulação de financiamento imobiliário e entender minha margem de crédito na Caixa e bancos parceiros."
    );

  const bankLinks = [
    {
      name: "Caixa Econômica Federal",
      desc: "Menores taxas de juros, uso do FGTS e programa Minha Casa Minha Vida / SBPE.",
      badge: "Líder em Habitação",
    },
    {
      name: "Banco Itaú",
      desc: "Análise de crédito rápida, possibilidade de compor renda com familiares.",
      badge: "Aprovação Ágil",
    },
    {
      name: "Banco Santander",
      desc: "Financia até 80% do valor de avaliação com prazos de até 35 anos.",
      badge: "Até 420 Meses",
    },
    {
      name: "Banco Bradesco",
      desc: "Condições diferenciadas para correntistas e flexibilidade em parcelas.",
      badge: "Condições Especiais",
    },
  ];

  return (
    <section id="financiamento" className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Texto explicativo */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-wider text-[#0E7058] uppercase">
              Correspondente e Assessoria Bancária
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B131F] sm:text-4xl">
              Simule e financie seu imóvel em Saquarema sem enfrentar fila de agência.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              A Gisele Andrade presta assessoria completa para obtenção do seu crédito
              imobiliário. Enviamos sua documentação para os principais bancos parceiros,
              comparamos as taxas de juros e cuidamos de todo o processo burocrático até
              a assinatura do contrato.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200/90 bg-slate-50 p-3.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7058] text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <span className="text-xs font-bold text-[#0B131F]">
                    Uso do seu saldo de FGTS
                  </span>
                  <p className="text-xs text-slate-500">
                    Pode ser utilizado como parte da entrada ou amortização das parcelas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-slate-200/90 bg-slate-50 p-3.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7058] text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <span className="text-xs font-bold text-[#0B131F]">
                    Composição de Renda Familiar
                  </span>
                  <p className="text-xs text-slate-500">
                    Some sua renda com cônjuge, pais ou parentes para elevar o limite de crédito.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-slate-200/90 bg-slate-50 p-3.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0E7058] text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <span className="text-xs font-bold text-[#0B131F]">
                    Simulação Gratuita e Sem Compromisso
                  </span>
                  <p className="text-xs text-slate-500">
                    Descubra em poucas horas o valor exato da sua parcela e entrada necessária.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={financingWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0E7058] px-6 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#09503E]"
              >
                Solicitar Simulação de Financiamento
              </a>
            </div>
          </div>

          {/* Grid de Bancos Parceiros */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {bankLinks.map((bank, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-[#0B131F]">
                      {bank.name}
                    </span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-[#0E7058]">
                      {bank.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {bank.desc}
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <a
                    href={`https://wa.me/5522999132185?text=${encodeURIComponent(`Olá Gisele! Gostaria de simular meu financiamento imobiliário pelo ${bank.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0E7058] hover:underline"
                  >
                    Simular com a Gisele →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
