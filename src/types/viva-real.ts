export interface VivaRealMedia {
  url: string;
  caption?: string;
  primary?: boolean;
}

export interface VivaRealAddress {
  city: string;
  state: string;
  neighborhood: string;
  street?: string;
  streetNumber?: string;
  postalCode?: string;
  zone?: string;
  nearby?: string[]; // Pontos de referência (ex: Lagoa, Praia de Itaúna, Shopping)
}

export interface VivaRealFinancial {
  transactionType: "Sale" | "Rent";
  currency: "BRL";
  amount: number;
  condoFee?: number;
  propertyTax?: number;   // IPTU
  acceptsFinancing: boolean;
  acceptsTrade?: boolean; // Aceita permuta
  useFGTS?: boolean;      // Aceita uso de FGTS
  banksAvailable?: string[]; // Bancos conveniados para simulação: Caixa, Itaú, Santander, Bradesco
}

export interface VivaRealDetails {
  livingArea: number;     // m² de área útil
  totalArea?: number;     // m² totais de terreno
  builtArea?: number;     // m² de área construída
  bedrooms: number;
  bathrooms: number;
  suites: number;
  garageSpaces: number;
  sunOrientation?: "Manhã" | "Tarde" | "Nascente";
  floors?: number;
  features: string[];     // Características do imóvel (Piscina, Churrasqueira, etc.)
  condoFeatures?: string[]; // Características do condomínio (Portaria 24h, Campo de futebol, etc.)
  legalStatus: "Escritura e RGI" | "Em fase de averbação" | "Posse regularizada com histórico";
}

export interface VivaRealProperty {
  listingId: string;
  title: string;
  slug: string;
  description: string;
  propertyType: "Casa" | "Casa em Condomínio" | "Apartamento" | "Terreno" | "Comercial";
  publicationType: "STANDARD" | "PREMIUM" | "HIGHLIGHT";
  price: VivaRealFinancial;
  address: VivaRealAddress;
  details: VivaRealDetails;
  media: VivaRealMedia[];
  tag?: "Exclusividade" | "Frente Mar" | "Oportunidade" | "Lançamento" | "Vista Lagoa";
  curatorNote?: string;   // Parecer técnico pessoal da Gisele
}
