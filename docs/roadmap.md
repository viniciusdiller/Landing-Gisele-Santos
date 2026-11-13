# Roadmap de Execução — Protótipo Landing Page Gisele Andrade

## Fase 1: Fundação & Setup Técnico (Concluído)
- [x] Diretrizes anti-slop, tech lead e zero poluição de ícones (`/docs/rules.md`).
- [x] Especificação da identidade visual, paleta e tipografia Clash Display + Plus Jakarta Sans (`/docs/design-system.md`).
- [x] Contrato de dados baseado na DTD do VivaReal XML (`/docs/viva-real-schema.md`).

## Fase 2: Instalação de Dependências & Configuração
- [x] Next.js 16 + Tailwind CSS v4 + TypeScript.
- [ ] Instalação de `framer-motion` e dependências visuais.
- [ ] Configuração de fontes (`Clash Display` e `Plus Jakarta Sans`) e CSS global com tokens da marca.

## Fase 3: Camada de Dados Desacoplada (VivaReal Mock)
- [ ] `src/types/viva-real.ts`.
- [ ] `src/data/mocks/viva-real-mock.ts` com imóveis reais e contextuais de Saquarema (Itaúna, Gravatá, Vilatur, Jaconé, Porto da Roça).
- [ ] `src/services/property-service.ts` (filtros e busca tipada).

## Fase 4: Desenvolvimento da Landing Page Assimétrica
- [ ] **Header:** Navegação clean com status de atendimento WhatsApp em tempo real.
- [ ] **Hero Section:** Composição cinematográfica com lifestyle de Saquarema e barra de busca tátil (Comprar/Alugar, Tipo, Bairro, Preço).
- [ ] **Destaques com Grid Quebrado (Bento Assimétrico):**
  - Imóvel estrela 16:9 widescreen com galeria e botão de WhatsApp imediato.
  - Imóveis verticais escalonados com metadados em `tabular-nums`.
- [ ] **Seção de Autoridade & Curadoria (Gisele Andrade):**
  - Perfil humanizado, CRECI RJ 81717, credibilidade local no Lake's Shopping.
- [ ] **Ticker Interativo de Bairros:** Exploração rápida das praias e regiões de Saquarema.
- [ ] **Modal / Drawer de Detalhes do Imóvel:** Visualização rápida sem perder o contexto da página.
- [ ] **Footer de Conversão:** Formas de contato direto, mapa do Lake's Shopping e chamada para proprietários.

## Fase 5: Validação, Testes e Verificação
- [ ] Testes de filtros dinâmicos e ordenação.
- [ ] Verificação de responsividade mobile (390px, 768px, 1280px).
- [ ] Checagem contra regras de anti-slop e performance.
