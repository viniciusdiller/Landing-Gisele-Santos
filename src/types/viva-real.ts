export interface Foto {
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface ValoresImovel {
  venda?: number;
  aluguel?: number;
  condominio?: number;
  iptu?: number;
}

export interface EstruturalImovel {
  areaUtil: number;
  areaTotal?: number;
  anoConstrucao?: number;
  quartos: number;
  banheiros: number;
  suites: number;
  vagas: number;
  posicaoSolar?: "Manhã" | "Tarde" | "Nascente";
}

export interface LocalizacaoImovel {
  cep: string;
  pais?: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento?: string;
  lat?: number;
  lng?: number;
  pontosProximos?: string[];
}

export interface Imovel {
  id: string;
  slug: string;
  titulo: string;
  descricao: string; // Já decodificada de entidades HTML (&lt;br&gt;)
  finalidade: "For Sale" | "For Rent";
  tipo: string;
  tipoPublicacao?: "STANDARD" | "PREMIUM" | "HIGHLIGHT";
  status?: string;
  urlOriginal?: string;
  
  valores: ValoresImovel;
  estrutural: EstruturalImovel;
  localizacao: LocalizacaoImovel;
  
  comodidades: string[]; // Ex: ["Piscina", "Churrasqueira", "Elevador"]
  fotos: Foto[];         // Array já ordenado, com a foto primary na posição 0
  
  // Metadados de conversão e curadoria da Gisele
  seloDestaque?: "Exclusividade" | "Frente Mar" | "Oportunidade" | "Lançamento" | "Vista Lagoa";
  notaCuradoria?: string;
  aceitaFinanciamento: boolean;
  aceitaPermuta?: boolean;
  utilizaFGTS?: boolean;
  bancosDisponiveis?: string[];
  situacaoJuridica?: "Escritura e RGI" | "Em fase de averbação" | "Posse regularizada com histórico";
}
