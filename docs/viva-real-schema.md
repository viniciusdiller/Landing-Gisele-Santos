# Especificação do Contrato de Dados — VivaReal XML DTD

Este contrato define a modelagem TypeScript que representa fielmente a estrutura padrão de XML do VivaReal / Zap Imóveis / Grupo OLX.

---

## 1. Contrato TypeScript dos Imóveis

```typescript
export interface VivaRealMedia {
  url: string;
  caption?: string;
  primary?: boolean;
}

export interface VivaRealAddress {
  city: string;           // ex: "Saquarema"
  state: string;          // ex: "RJ"
  neighborhood: string;   // ex: "Itaúna", "Porto Novo", "Gravatá"
  street?: string;
  streetNumber?: string;
  postalCode?: string;
}

export interface VivaRealDetails {
  livingArea: number;     // m² úteis
  totalArea?: number;     // m² totais
  bedrooms: number;
  bathrooms: number;
  suites?: number;
  garageSpaces: number;
  features: string[];     // ex: ["Piscina", "Churrasqueira", "Vista Mar", "Pé na Areia"]
}

export interface VivaRealPrice {
  transactionType: "Sale" | "Rent";
  currency: "BRL";
  amount: number;
  condoFee?: number;
  propertyTax?: number;   // IPTU
}

export interface VivaRealProperty {
  listingId: string;
  title: string;
  description: string;
  propertyType: "Residential / Home" | "Residential / Condo" | "Residential / Land" | "Commercial";
  publicationType: "STANDARD" | "PREMIUM" | "HIGHLIGHT";
  price: VivaRealPrice;
  address: VivaRealAddress;
  details: VivaRealDetails;
  media: VivaRealMedia[];
  featuredBadge?: "Exclusividade" | "Frente Mar" | "Oportunidade" | "Lançamento";
}
```

---

## 2. Princípio de Isolamento

- O arquivo `src/data/mocks/viva-real-mock.ts` exporta `MOCK_VIVA_REAL_PROPERTIES: VivaRealProperty[]`.
- O chaveamento futuro para o feed XML real será feito em `src/services/property-service.ts`, bastando substituir a fonte pelo parser XML sem encostar nos componentes visuais.
