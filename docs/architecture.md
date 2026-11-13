# Arquitetura de Paginação & Ingestão XML para o Backend

Este guia define a estratégia de consumo, paginação e cache do XML VivaReal/ImobiBrasil no backend Node.js (ou Next.js Server Components / API Routes) e sua entrega para o frontend.

---

## 1. Por que XMLs Imobiliários não têm paginação nativa?

Feeds de exportação para portais (VivaReal, Zap, Imovelweb, OLX) funcionam como **snapshots completos**:
- O arquivo `.xml` (ex: `https://.../feed.xml`) contém a totalidade dos imóveis ativos da imobiliária (50, 200 ou 1.000 anúncios).
- Não há parâmetros de query nativos no endpoint remoto como `?page=2&limit=10`.
- O feed inteiro é gerado e baixado periodicamente.

---

## 2. Padrão Recomendado no Backend (Node.js / Next.js Route Handler)

### Arquitetura de 3 Camadas:
1. **Fetcher & Parser com Cache em Memória/Redis (Sync em Background):**
   - Um cron job ou webhook baixa o XML a cada X minutos (ex: a cada 1 hora).
   - O parser (`fast-xml-parser` ou `xml2js`) converte o XML para o formato normalizado `Imovel[]`.
   - O resultado é salvo em banco (PostgreSQL/Prisma) ou em cache rápido (Redis / In-memory).

2. **API Endpoint com Paginação e Ordenação:**
   - Rota: `GET /api/imoveis?page=1&limit=6&sortBy=price-asc&minPrice=300000&maxPrice=1000000`
   - Parâmetros:
     - `page`: Número da página (padrão `1`).
     - `limit`: Quantidade de imóveis por página (ex: `6`).
     - `sortBy`: `"price-asc"`, `"price-desc"`, `"recent"`, `"area-desc"`.
     - `minPrice` / `maxPrice`: Filtro de faixa de preço.
     - `neighborhood`: Bairro específico.
     - `propertyType`: Tipo de imóvel.
   - Resposta padronizada da API:
     ```json
     {
       "data": [ ... ],
       "pagination": {
         "currentPage": 1,
         "totalPages": 4,
         "totalItems": 24,
         "itemsPerPage": 6,
         "hasNextPage": true,
         "hasPrevPage": false
       }
     }
     ```

---

## 3. Padrão de Espaçamento e Escala Vertical de Sections

Para garantir consistência visual no frontend (sem saltos de espaçamento entre seções):
- **Hero Section:** `pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24` (respiro maior de abertura).
- **Seções de Conteúdo (Imóveis, Regiões, Sobre mim, Proprietários):**
  - Mobile (< 640px): `py-16` (64px)
  - Tablet (640px - 1024px): `py-20` (80px)
  - Desktop (> 1024px): `py-24 lg:py-28` (96px a 112px)
  - Bordas divisórias elegantes: `border-t border-slate-200/80`
