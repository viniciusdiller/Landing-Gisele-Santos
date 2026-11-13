import { MOCK_IMOVEIS } from "@/data/mocks/viva-real-mock";
import { Imovel } from "@/types/viva-real";

export type SortOption = "relevance" | "price-asc" | "price-desc" | "area-desc";

export interface PropertyFilterOptions {
  neighborhood?: string;
  propertyType?: string;
  transactionType?: "For Sale" | "For Rent";
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  sortBy?: SortOption;
  page?: number;
  limit?: number;
}

export interface PaginatedPropertiesResult {
  items: Imovel[];
  total: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function getAllProperties(): Imovel[] {
  return MOCK_IMOVEIS;
}

export function getPropertyBySlug(slug: string): Imovel | undefined {
  return MOCK_IMOVEIS.find((p) => p.slug === slug || p.id === slug);
}

export function getHighlightProperty(): Imovel {
  return MOCK_IMOVEIS[0];
}

export function getSecondaryProperties(): Imovel[] {
  return MOCK_IMOVEIS.slice(1);
}

export function filterProperties(options: PropertyFilterOptions): Imovel[] {
  let list = MOCK_IMOVEIS.filter((property) => {
    if (options.neighborhood && options.neighborhood !== "Todos") {
      if (property.localizacao.bairro.toLowerCase() !== options.neighborhood.toLowerCase()) {
        return false;
      }
    }

    if (options.propertyType && options.propertyType !== "Todos") {
      const pType = property.tipo.toLowerCase();
      const filterType = options.propertyType.toLowerCase();
      if (!pType.includes(filterType) && !filterType.includes(pType)) {
        return false;
      }
    }

    if (options.transactionType) {
      if (property.finalidade !== options.transactionType) {
        return false;
      }
    }

    const price = property.valores.venda ?? property.valores.aluguel ?? 0;
    if (options.minPrice && options.minPrice > 0) {
      if (price < options.minPrice) {
        return false;
      }
    }

    if (options.maxPrice && options.maxPrice > 0) {
      if (price > options.maxPrice) {
        return false;
      }
    }

    if (options.minBedrooms && options.minBedrooms > 0) {
      if (property.estrutural.quartos < options.minBedrooms) {
        return false;
      }
    }

    return true;
  });

  // Ordenação por preço / área / relevância
  if (options.sortBy) {
    list = [...list].sort((a, b) => {
      const priceA = a.valores.venda ?? a.valores.aluguel ?? 0;
      const priceB = b.valores.venda ?? b.valores.aluguel ?? 0;

      if (options.sortBy === "price-asc") {
        return priceA - priceB;
      }
      if (options.sortBy === "price-desc") {
        return priceB - priceA;
      }
      if (options.sortBy === "area-desc") {
        return b.estrutural.areaUtil - a.estrutural.areaUtil;
      }
      return 0;
    });
  }

  return list;
}

export function getPaginatedProperties(options: PropertyFilterOptions): PaginatedPropertiesResult {
  const filtered = filterProperties(options);
  const page = Math.max(1, options.page || 1);
  const limit = Math.max(1, options.limit || 6);
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const items = filtered.slice(startIndex, startIndex + limit);

  return {
    items,
    total,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

export function formatBRL(value?: number): string {
  if (value === undefined || value === null) return "Sob consulta";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getPrimaryImage(imovel: Imovel): string {
  const primary = imovel.fotos.find((f) => f.isPrimary);
  return primary?.url || imovel.fotos[0]?.url || "";
}

export function buildWhatsAppLink(property?: Imovel, context?: string): string {
  const phone = "5522999132185";
  if (!property) {
    const text = encodeURIComponent(
      context
        ? `Olá Gisele, tudo bem? Gostaria de informações sobre: ${context}`
        : "Olá Gisele, tudo bem? Gostaria de conversar sobre consultoria e busca de imóveis em Saquarema."
    );
    return `https://wa.me/${phone}?text=${text}`;
  }

  const price = formatBRL(property.valores.venda ?? property.valores.aluguel);
  const text = encodeURIComponent(
    `Olá Gisele! Vi no seu site o imóvel ref: ${property.id} (${property.titulo} em ${property.localizacao.bairro} - ${price}). Gostaria de tirar dúvidas sobre a documentação e agendar uma visita.`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
