# Revisão UX – Landing Botfy (à luz do agente UX Design Expert)

Referência: `.aios-core/development/agents/ux-design-expert.md` (Uma – princípios Sally + Brad Frost).

---

## Princípios aplicados na revisão

- **User-centric:** decisões a favor do usuário (empresa que quer vender mais e automatizar).
- **Métricas e clareza:** copy orientado a resultado (receita, automação, 24/7).
- **Atomic Design:** manter componentes reutilizáveis (SectionWrapper, Card, Button, Badge).
- **Acessibilidade:** WCAG AA (contraste, hierarquia, âncoras e CTAs claros).
- **Zero hardcoded:** textos via i18n para consistência e futura tradução.

---

## Pontos fortes atuais

1. **Hierarquia visual** – Títulos em destaque, gradiente no highlight, boa leitura.
2. **Componentes** – Uso de SectionWrapper, Card, Badge e Button de forma consistente.
3. **Navegação** – Links do menu com scroll suave para seções (Platform, Features, Pricing).
4. **Responsividade** – Grid e layout adaptam a mobile/desktop.
5. **Performance** – Animações com Framer Motion com `viewport={{ once: true }}`.

---

## Melhorias recomendadas (e aplicadas com o novo copy)

### 1. **Clareza de valor acima da tecnologia**
- **Antes:** foco em “Secure AI Agents”, “Enterprise-Ready”, “GDPR”.
- **Depois:** foco em resultado de negócio: “Sell on Autopilot”, “Conversations Turn Into Revenue”, “Every missed message is a missed opportunity”.
- **Por quê:** usuário (empresa) pensa primeiro em vendas e escala; segurança é critério, não mensagem principal.

### 2. **Hero com dois CTAs e prova social**
- **Antes:** um CTA (“Start Free Trial”).
- **Depois:** CTA principal + “See How It Works” (âncora para #how-it-works) + 3 bullets de confiança (No setup fees, Self-service, Go live in minutes).
- **Por quê:** reduz fricção (quem quer ver antes de clicar) e reforça benefício rápido.

### 3. **Narrativa Problema → Solução → Como funciona → Resultado → Por que nós → Preço → Visão**
- **Antes:** Pain Points genéricos (Data Security, Complex AI…) + Platform + Features + Steps + Security + Pricing + CTA.
- **Depois:**  
  1) The Problem (receita perdida, leads sem resposta).  
  2) The Solution (24/7 AI Workforce, lista de capacidades).  
  3) How It Works (4 passos + “No developers, no setup, no agency”).  
  4) What Happens After (métricas: resposta, conversão, custo, deals).  
  5) Why Botfy (simplicidade, preço transparente, Europa).  
  6) Pricing (5 planos: Free → Enterprise).  
  7) Vision (futuro autônomo, workforce of the future).  
  8) CTA final (“Ready to Sell on Autopilot?”).
- **Por quê:** fluxo que espelha a jornada do comprador e responde objeções na ordem certa.

### 4. **Pricing com plano Free e nomenclatura alinhada ao copy**
- **Antes:** Starter, Growth, Business, Enterprise (4 planos).
- **Depois:** Free, Starter, Growth, Scale, Enterprise (5 planos), com “Start free. Upgrade when you grow.”
- **Por quê:** Free reduz barreira; “Scale” comunica melhor crescimento de operação que “Business”.

### 5. **Seção “What Happens After” e “Vision”**
- **Antes:** não havia bloco explícito de “o que você ganha depois” nem visão de futuro.
- **Depois:** seção de resultados (resposta, conversão, custo, follow-up, deals) + seção Vision (empresas que ganham amanhã, “workforce of the future”).
- **Por quê:** reforça benefício concreto e posicionamento de longo prazo (Sally: user needs; Brad: mensagem clara e sistemática).

### 6. **Âncora “How It Works” no menu / Hero**
- **Antes:** menu com Platform, Features, Pricing, About Us.
- **Depois:** “See How It Works” no Hero apontando para #how-it-works; opcionalmente manter “Platform” no menu como “How it works” ou equivalente.
- **Por quê:** descoberta imediata do fluxo de ativação sem depender só do scroll.

### 7. **Acessibilidade e semântica**
- Manter `<section>`, `<h1>` único, `<h2>` por seção.
- Garantir contraste texto/fundo (já atendido).
- CTAs com texto explícito (“Start Free Trial”, “See How It Works”) em vez de só ícone.

---

## Resumo

A revisão alinha a landing ao **novo copy** (foco em vendas e automação 24/7) e aos princípios do agente UX: **user needs first**, **narrativa orientada a resultado**, **estrutura de componentes** preservada e **hierarquia e CTAs** mais claros. As alterações foram aplicadas nas traduções (EN) e nos componentes correspondentes.
