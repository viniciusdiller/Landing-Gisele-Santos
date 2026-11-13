import { MOCK_IMOVEIS } from "@/data/mocks/viva-real-mock";
import { Imovel } from "@/types/viva-real";

export interface PropertyFilterOptions {
  neighborhood?: string;
  propertyType?: string;
  transactionType?: "For Sale" | "For Rent";
  maxPrice?: number;
  minBedrooms?: number;
  acceptsFinancing?: boolean;
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
  return MOCK_IMOVEIS.filter((property) => {
    if (options.neighborhood && options.neighborhood !== "Todos") {
      if (property.localizacao.bairro.toLowerCase() !== options.neighborhood.toLowerCase()) {
        return false;
      }
    }

    if (options.propertyType && options.propertyType !== "Todos") {
      // Normalização amigável de tipos (ex: "Casa", "Apartamento")
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

    if (options.acceptsFinancing) {
      if (!property.aceitaFinanciamento) {
        return false;
      }
    }

    const price = property.valores.venda ?? property.valores.aluguel ?? 0;
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

export function buildFinancingSimulatorLink(property: Imovel): string {
  const phone = "5522999132185";
  const price = formatBRL(property.valores.venda);
  const text = encodeURIComponent(
    `Olá Gisele! Gostaria de fazer uma simulação de financiamento bancário para o imóvel ref: ${property.id} (${property.titulo} no valor de ${price}). Quais bancos parceiros você recomenda?`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
