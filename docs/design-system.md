# Design System & Identidade Visual — Gisele S. Andrade Imóveis

## 1. Fundamentos da Marca

- **Titular:** Gisele S. Andrade — Corretora e Consultora Imobiliária
- **Registro:** CRECI RJ 81717
- **Praça:** Saquarema e Região dos Lagos, Rio de Janeiro
- **Sede:** Av. Saquarema, 567, Loja 23 – Lake's Shopping, Porto Novo
- **Contato Comercial:** (22) 99913-2185 | giselesandradeimoveis@gmail.com

---

## 2. Tipografia

| Função | Família | Pesos | Aplicação |
| :--- | :--- | :--- | :--- |
| **Headlines & Display** | Clash Display | Semibold (600), Bold (700) | Títulos de impacto no Hero, nomes dos imóveis, números em destaque |
| **Interface & Leitura** | Plus Jakarta Sans | Regular (400), Medium (500), Semibold (600) | Textos de apoio, filtros, badges, especificações técnicas |
| **Metadados Numéricos** | Plus Jakarta Sans (`tabular-nums`) | Medium (500), Bold (700) | Valores em R$, metragens e contadores |

---

## 3. Paleta Cromática

```css
/* Primárias & Superfícies */
--bg-main: #FAFAF8;            /* Off-white quente e natural litorâneo */
--surface-card: #FFFFFF;        /* Superfícies de cards com borda refinada */
--surface-muted: #F1F3F2;       /* Fundo de chips e badges neutros */

/* Tipografia & Contrastes */
--text-primary: #0D161F;        /* Ardósia escuro profundo quase preto */
--text-secondary: #52606D;      /* Cinza neutro equilibrado para metadados */
--text-muted: #8292A2;          /* Rótulos secundários e legendas */

/* Acentos da Marca Gisele */
--brand-emerald: #0E7058;       /* Verde-esmeralda litorâneo (confiança, sofisticação) */
--brand-emerald-hover: #09503E; /* Hover do CTA principal */
--brand-emerald-subtle: #E8F5F1;/* Fundo de badges ativas e highlights */
--brand-accent-amber: #D97706;  /* Acento dourado quente para status "Exclusividade" */
```

---

## 4. Regras de Composição & Assimetria

1. **Ritmo Visual Não Linear:**
   - Evitar blocos de 3 cards retangulares uniformes empilhados.
   - Usar **Card Destaque 16:9** ocupando 8 colunas com carrossel dinâmico + 4 colunas com detalhes detalhados do imóvel no primeiro bloco.
   - Abaixo, grade escalonada com cards em proporções 4:5 verticais e microinterações táteis de hover.
2. **Hero com Lifestyle & Busca Orgânica:**
   - Visual litorâneo autêntico de Saquarema (mar, lagoa, vegetação nativa preservada).
   - Headline assertiva com números de mercado locais.
   - Barra de busca suspensa de alta performance com filtros táteis: Comprar / Alugar, Bairros Populares (Itaúna, Bacaxá, Jaconé, Vilatur), Tipo de Imóvel e Faixa de Preço.
3. **Seção de Curadoria da Gisele (Dobra 2):**
   - Apresentação profissional da corretora, CRECI em evidência, dados de atendimento consultivo e link direto de consultoria no WhatsApp.
