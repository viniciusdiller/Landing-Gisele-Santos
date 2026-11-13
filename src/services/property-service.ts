import { MOCK_PROPERTIES } from "@/data/mocks/viva-real-mock";
import { VivaRealProperty } from "@/types/viva-real";

export interface PropertyFilterOptions {
  neighborhood?: string;
  propertyType?: string;
  transactionType?: "Sale" | "Rent";
  maxPrice?: number;
  minBedrooms?: number;
  acceptsFinancing?: boolean;
}

export function getAllProperties(): VivaRealProperty[] {
  return MOCK_PROPERTIES;
}

export function getPropertyBySlug(slug: string): VivaRealProperty | undefined {
  return MOCK_PROPERTIES.find((p) => p.slug === slug || p.listingId === slug);
}

export function getHighlightProperty(): VivaRealProperty {
  return MOCK_PROPERTIES[0];
}

export function getSecondaryProperties(): VivaRealProperty[] {
  return MOCK_PROPERTIES.slice(1);
}

export function filterProperties(options: PropertyFilterOptions): VivaRealProperty[] {
  return MOCK_PROPERTIES.filter((property) => {
    if (options.neighborhood && options.neighborhood !== "Todos") {
      if (property.address.neighborhood.toLowerCase() !== options.neighborhood.toLowerCase()) {
        return false;
      }
    }

    if (options.propertyType && options.propertyType !== "Todos") {
      if (property.propertyType !== options.propertyType) {
        return false;
      }
    }

    if (options.transactionType) {
      if (property.price.transactionType !== options.transactionType) {
        return false;
      }
    }

    if (options.acceptsFinancing) {
      if (!property.price.acceptsFinancing) {
        return false;
      }
    }

    if (options.maxPrice && options.maxPrice > 0) {
      if (property.price.amount > options.maxPrice) {
        return false;
      }
    }

    if (options.minBedrooms && options.minBedrooms > 0) {
      if (property.details.bedrooms < options.minBedrooms) {
        return false;
      }
    }

    return true;
  });
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function buildWhatsAppLink(property?: VivaRealProperty, context?: string): string {
  const phone = "5522999132185";
  if (!property) {
    const text = encodeURIComponent(
      context
        ? `Olá Gisele, tudo bem? Gostaria de informações sobre: ${context}`
        : "Olá Gisele, tudo bem? Gostaria de conversar sobre consultoria e busca de imóveis em Saquarema."
    );
    return `https://wa.me/${phone}?text=${text}`;
  }

  const text = encodeURIComponent(
    `Olá Gisele! Vi no seu site o imóvel ref: ${property.listingId} (${property.title} em ${property.address.neighborhood} - ${formatBRL(property.price.amount)}). Gostaria de tirar dúvidas sobre a documentação e agendar uma visita.`
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildFinancingSimulatorLink(property: VivaRealProperty): string {
  const phone = "5522999132185";
  const text = encodeURIComponent(
    `Olá Gisele! Gostaria de fazer uma simulação de financiamento bancário para o imóvel ref: ${property.listingId} (${property.title} no valor de ${formatBRL(property.price.amount)}). Quais bancos parceiros você recomenda?`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
