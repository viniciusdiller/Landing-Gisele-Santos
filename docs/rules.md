# Diretrizes e Regras Técnicas do Projeto — Gisele S. Andrade Imóveis

Este documento estabelece as regras inegociáveis de engenharia, arquitetura e design para a Landing Page de alta conversão da corretora Gisele S. Andrade (CRECI RJ 81717 - Saquarema/RJ).

---

## 1. Princípios de Design & Anti-Slop (0% Cara de IA)

1. **Tipografia com Identidade Própria:**
   - Display: **Clash Display** (ousada, moderna, pesos `600`/`700` com presença e recortes geométricos marcantes).
   - Apoio & Dados Técnicos: **Plus Jakarta Sans** (legibilidade impecável para metadados, valores tabulares `tabular-nums` e leitura longa).
   - **Proibição Estrita:** Nada de fontes serifadas decorativas clichês ou combinações genéricas Inter/Roboto sem hierarquia intencional.

2. **Assimetria & Quebra de Grid Convencional:**
   - Nada de 3 colunas idênticas repetidas pela página inteira (padrão Bootstrap/template antigo de IA).
   - Ritmo visual alternado: Bento grid dinâmico, offsets verticais intencionais (`translate-y`), cards em formatos assimétricos (16:9 cinematográfico para o destaque da semana e 4:5 vertical para oportunidades pontuais).
   - Espaçamento generoso e respiração editorial, valorizando a fotografia real do litoral de Saquarema.

3. **Zero Poluição de Ícones (Regra Sênior de UI):**
   - Não infestar a UI com mini-ícones genéricos em cada linha (caminha, chuveirinho, carrinho em tudo é muleta de IA).
   - Confiar no design editorial, tipografia forte e badges de dados técnicos claros (`220 m²`, `3 quartos`, `2 vagas`).
   - Ícones estritamente funcionais e pontuais (seta de ação, fechar modal, WhatsApp).

4. **Paleta de Cores e Materiais:**
   - Base sólida: Tons profundos de ardósia/oceano fechado (`#0B131F`).
   - Superfícies: Cinza-pedra claro/gelo (`#F8F9FA` / `#F0F3F5`) com bordas sutis (`border-slate-200/80`).
   - Acento da marca: Verde-esmeralda marítimo (`#0E7058` / `#127969`) da identidade da Gisele para badges funcionais e CTAs diretos de conversão WhatsApp.
   - **Proibido:** Gradientes roxo/azul "SaaS AI", sombras excessivas desfocadas sem luz definida.

5. **Microinterações e Física:**
   - Movimentos intencionais com Framer Motion baseados nas regras de Emil Kowalski: transições rápidas e precisas (`duration: 0.15s` a `0.25s`, `ease: [0.16, 1, 0.3, 1]`).
   - Nada de animações lentas que travam a rolagem ou causam fadiga visual.

---

## 2. Arquitetura de Dados & Desacoplamento (Padrão VivaReal XML)

1. **Isolamento Total dos Mocks:**
   - Todo dado mockado reside exclusivamente em `src/data/mocks/viva-real-mock.ts`.
   - Nenhum componente de UI pode ter dados estáticos hardcoded dentro do JSX.
   - Os tipos TypeScript em `src/types/viva-real.ts` espelham com 100% de fidelidade os campos da especificação DTD do VivaReal XML:
     - `ListingID`, `Title`, `TransactionType`, `ListPrice`, `PropertyType`, `LivingArea`, `Bedrooms`, `Bathrooms`, `GarageSpaces`, `Address`, `Media`.
   - A substituição futura por um parser XML ou rota de API externa consumirá a mesma interface de contrato sem quebrar nenhum componente de apresentação.

---

## 3. Segurança e Boas Práticas

1. **Zero-Trust no Client:**
   - Filtros e cálculos de valores de condomínio/IPTU/parcelamento passam por validação estrita.
   - Links dinâmicos de WhatsApp e compartilhamento são validados contra protocolos seguros.
2. **Performance Web & Core Web Vitals:**
   - Imagens servidas com proporção definida (`aspect-ratio`), evitando Cumulative Layout Shift (CLS).
   - Componentes pesados (filtros avançados, mapas) carregados de forma eficiente.
3. **Copywriting Humano:**
   - Linguagem natural, contextualizada para Saquarema (mencionar Itaúna, Praia da Vila, Jaconé, Lagoa, Condomínios fechados).
   - Zero frases burocráticas de IA como "Descubra o paraíso dos seus sonhos com excelência inigualável".
