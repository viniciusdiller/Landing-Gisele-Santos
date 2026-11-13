import { MOCK_PROPERTIES } from "@/data/mocks/viva-real-mock";
import { VivaRealProperty } from "@/types/viva-real";

export interface PropertyFilterOptions {
  neighborhood?: string;
  propertyType?: string;
  transactionType?: "Sale" | "Rent";
  maxPrice?: number;
  minBedrooms?: number;
}

export function getAllProperties(): VivaRealProperty[] {
  return MOCK_PROPERTIES;
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

export function buildWhatsAppLink(property?: VivaRealProperty): string {
  const phone = "5522999132185";
  if (!property) {
    const text = encodeURIComponent(
      "Olá Gisele, tudo bem? Gostaria de conversar sobre consultoria e busca de imóveis em Saquarema."
    );
    return `https://wa.me/${phone}?text=${text}`;
  }

  const text = encodeURIComponent(
    `Olá Gisele! Vi no seu site o imóvel ref: ${property.listingId} (${property.title} em ${property.address.neighborhood} - ${formatBRL(property.price.amount)}). Poderia me passar mais detalhes e disponibilidade para visita?`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
