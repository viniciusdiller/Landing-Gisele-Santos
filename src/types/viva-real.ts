// ==============================================================================
// Tipagem 100% Espelhada no Schema XML VivaReal / ImobiBrasil (<Listing>)
// Nenhum campo inventado: cada propriedade mapeia 1:1 para nós e atributos do XML.
// ==============================================================================

export interface Foto {
  url: string;         // Texto interno da tag <Item>
  isPrimary: boolean;  // Atributo primary="true|false"
  caption?: string;    // Atributo caption="..." (nome do arquivo original)
}

export interface ValoresImovel {
  venda?: number;      // <ListPrice>
  aluguel?: number;    // <RentalPrice>
  condominio?: number; // <PropertyAdministrationFee>
  iptu?: number;       // <YearlyTax> ou <Iptu>
}

export interface EstruturalImovel {
  areaUtil: number;      // <LivingArea>
  areaTotal?: number;    // <LotArea>
  anoConstrucao?: number;// <YearBuilt>
  quartos: number;       // <Bedrooms>
  banheiros: number;     // <Bathrooms>
  suites: number;        // <Suites>
  vagas: number;         // <Garage>
}

export interface LocalizacaoImovel {
  pais: string;          // <Country>
  estado: string;        // <State>
  cidade: string;        // <City>
  bairro: string;        // <Neighborhood>
  rua: string;           // <Address>
  numero: string;        // <StreetNumber>
  complemento?: string;  // <Complement>
  cep: string;           // <PostalCode>
  lat?: number;          // <Latitude>
  lng?: number;          // <Longitude>
}

export interface Imovel {
  // Informações Principais (Raiz <Listing>)
  id: string;                                   // <ListingID> (ex: "185_2-4483747")
  slug: string;                                 // Derivado no parser a partir do id / título
  titulo: string;                               // <Title>
  descricao: string;                            // <Description> (texto com <br> parseado)
  finalidade: "For Sale" | "For Rent";          // <TransactionType>
  tipo: string;                                 // <PropertyType> (ex: "Residential / Apartment")
  uso?: string;                                 // <UsageType> (ex: "Residential")
  tipoPublicacao?: "STANDARD" | "PREMIUM";      // <PublicationType>
  status?: string;                              // <Status><PropertyStatus> (ex: "Available")
  dataAtualizacao?: string;                     // <Status><StatusDate>
  urlOriginal?: string;                         // <DetailViewUrl>

  // Localização (<Location>)
  localizacao: LocalizacaoImovel;

  // Detalhes Estruturais (<Details>)
  estrutural: EstruturalImovel;

  // Valores Financeiros (<Details>)
  valores: ValoresImovel;

  // Comodidades (<Features><Feature>)
  comodidades: string[];                        // Array de <Feature> do XML

  // Imagens (<Media><Item>)
  fotos: Foto[];                                // Array de fotos do XML com primary na pos 0
}
