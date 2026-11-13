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
}

export interface VivaRealDetails {
  livingArea: number;     // m² de área útil
  totalArea?: number;     // m² totais de terreno
  bedrooms: number;
  bathrooms: number;
  suites?: number;
  garageSpaces: number;
  features: string[];     // ex: "Piscina", "Churrasqueira", "Pé na Areia", "Condomínio Fechado"
}

export interface VivaRealPrice {
  transactionType: "Sale" | "Rent";
  currency: "BRL";
  amount: number;
  condoFee?: number;
  propertyTax?: number;   // IPTU anual ou mensal
}

export interface VivaRealProperty {
  listingId: string;
  title: string;
  slug: string;
  description: string;
  propertyType: "Casa" | "Casa em Condomínio" | "Apartamento" | "Terreno" | "Comercial";
  publicationType: "STANDARD" | "PREMIUM" | "HIGHLIGHT";
  price: VivaRealPrice;
  address: VivaRealAddress;
  details: VivaRealDetails;
  media: VivaRealMedia[];
  tag?: "Exclusividade" | "Frente Mar" | "Oportunidade" | "Lançamento" | "Vista Lagoa";
  curatorNote?: string;   // Nota de curadoria pessoal da Gisele Andrade
}
