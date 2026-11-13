# Especificação Completa do XML ImobiBrasil (Formato VivaReal / ZAP) & Contrato Normalizado

Este documento detalha o mapeamento de 100% dos campos retornados pelo feed XML do ImobiBrasil/VivaReal, as regras de transformação/parser e os contratos TypeScript definitivos para o front-end.

---

## 1. Mapeamento dos Campos Brutos do XML (<Listing>)

### 1.1 Informações Principais (Raiz)
| Tag XML | Tipo | Descrição / Exemplo | Mapeamento no Front |
| :--- | :--- | :--- | :--- |
| `<ListingID>` | string | Código único do anúncio (ex: `"185_2-4483747"`) | `id` |
| `<Title>` | string / CDATA | Título do anúncio | `titulo` |
| `<TransactionType>` | string | `"For Sale"` (Venda) ou `"For Rent"` (Aluguel) | `finalidade` |
| `<DetailViewUrl>` | string | Link do imóvel no site original do ImobiBrasil | `urlOriginal` |
| `<PublicationType>` | string | `"STANDARD"` ou `"PREMIUM"` (Destaque) | `tipoPublicacao` |
| `<Status><PropertyStatus>` | string | Status de disponibilidade (ex: `"Available"`) | `status` |
| `<Status><StatusDate>` | string (ISO) | Data da última alteração de status | `dataAtualizacao` |

### 1.2 Localização (`<Location>`)
| Tag XML | Tipo | Descrição / Exemplo | Mapeamento no Front |
| :--- | :--- | :--- | :--- |
| `<Country>` | string | País (ex: `"Brasil"`) | `localizacao.pais` |
| `<State>` | string (attr sigla) | Estado (ex: `"Rio de Janeiro"`, attr `"RJ"`) | `localizacao.estado` |
| `<City>` | string | Cidade (ex: `"Saquarema"`) | `localizacao.cidade` |
| `<Neighborhood>` | string / CDATA | Bairro (ex: `"Itaúna"`, `"Porto da Roça"`) | `localizacao.bairro` |
| `<Address>` | string | Logradouro (Rua, Avenida) | `localizacao.rua` |
| `<StreetNumber>` | string | Número predial ou lote | `localizacao.numero` |
| `<Complement>` | string | Complemento (apto, casa 2, lote 5) | `localizacao.complemento` |
| `<PostalCode>` | string | CEP numérico (ex: `"28990838"`) | `localizacao.cep` |
| `<Latitude>`, `<Longitude>` | number | Coordenadas geográficas para mapas | `localizacao.lat`, `localizacao.lng` |

### 1.3 Detalhes Estruturais (`<Details>`)
| Tag XML | Tipo | Descrição / Exemplo | Mapeamento no Front |
| :--- | :--- | :--- | :--- |
| `<PropertyType>` | string | Ex: `"Residential / Apartment"`, `"Residential / Home"` | `tipo` |
| `<UsageType>` | string | `"Residential"`, `"Commercial"` | `uso` |
| `<Description>` | string / CDATA | Texto descritivo com entidades HTML (`&lt;br&gt;`) | `descricao` |
| `<Bedrooms>` | number | Quantidade de quartos | `estrutural.quartos` |
| `<Bathrooms>` | number | Quantidade de banheiros | `estrutural.banheiros` |
| `<Suites>` | number | Quantidade de suítes | `estrutural.suites` |
| `<Garage>` | number | Vagas de garagem | `estrutural.vagas` |
| `<LivingArea>` | number | Área útil / privativa em m² | `estrutural.areaUtil` |
| `<LotArea>` | number | Área total do terreno em m² | `estrutural.areaTotal` |
| `<YearBuilt>` | number | Ano de construção | `estrutural.anoConstrucao` |
| `<Features><Feature>` | string[] | Array de comodidades (ex: `["Piscina", "BBQ"]`) | `comodidades` |

### 1.4 Valores Financeiros (Dentro de `<Details>`)
| Tag XML | Tipo | Descrição / Exemplo | Mapeamento no Front |
| :--- | :--- | :--- | :--- |
| `<ListPrice>` | number | Valor de venda em R$ | `valores.venda` |
| `<RentalPrice>` | number | Valor de locação mensal em R$ | `valores.aluguel` |
| `<PropertyAdministrationFee>`| number | Taxa condominial em R$ | `valores.condominio` |
| `<YearlyTax>` ou `<Iptu>` | number | IPTU anual ou mensal | `valores.iptu` |

### 1.5 Mídia (`<Media>`)
| Tag XML | Atributos / Conteúdo | Descrição / Exemplo | Mapeamento no Front |
| :--- | :--- | :--- | :--- |
| `<Item>` | Texto interno | URL direta da foto na CDN do ImobiBrasil | `foto.url` |
| `<Item primary="true">` | `primary="true\|false"` | Define a foto principal de capa | `foto.isPrimary` |
| `<Item caption="...">` | `caption="..."` | Legenda ou nome original do arquivo | `foto.caption` |

---

## 2. Regras Críticas de Parser e Tratamento no Front-end

1. **Entidades HTML na Descrição (`&lt;br&gt;`, `&amp;`):**
   - O XML envia quebras de linha e símbolos escapados. O parser deve decodificar as entidades HTML. No React, sanitizamos o texto ou quebramos em parágrafos limpos sem expor a aplicação a XSS.
2. **Ordenação de Imagens com `primary="true"`:**
   - O parser garante que a foto com `isPrimary === true` sempre ocupe o índice `0` (`fotos[0]`), servindo de capa padrão nos cards da Home.
3. **Chaveamento de Preço (`venda` vs `aluguel`):**
   - Se `finalidade === "For Sale"`, priorizar `valores.venda`.
   - Se `finalidade === "For Rent"`, priorizar `valores.aluguel`.
4. **Campos Opcionais e Valores Zerados:**
   - Terrenos não possuem quartos/banheiros (`0`). A UI deve omitir esses campos quando forem zero ou indefinidos.
5. **Slug Amigável:**
   - O front-end deriva um slug amigável (`/imoveis/:slug`) a partir do título + bairro ou aceita o `id` direto (`/imoveis/:id`).
