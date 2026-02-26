# Audit visual e tokens de design — Botfy

**Objetivo:** Registrar a comparação Botfy vs referências (Hello Charles, Kommo) e os tokens de design usados no projeto para consistência e futuras telas.

---

## 1. Audit: Botfy vs Charles vs Kommo

### Paleta

| Aspecto | Hello Charles | Kommo | Botfy (atual) |
|--------|----------------|--------|----------------|
| **Fundo** | Escuro limpo (preto/cinza escuro) | Claro (branco/cinza claro), interface produto | Preto (#000), superfícies #0a0a0a, #151515 |
| **Acento** | Verde/teal ou azul (conversão) | Azul/laranja (acessível) | Roxo #8b5cf6 (accent-purple), azul #3b82f6 (accent-blue) |
| **Texto** | Alto contraste, branco em escuro | Escuro em claro, hierarquia clara | primary #fff, secondary #9ea3ae, muted #667085 |
| **Bordas** | Sutis, white/5–10% | Sutis, cinza claro | white/5, accent-purple/20–30 em hover |

**Conclusão:** Botfy está alinhado ao "escuro premium" do Charles; o roxo dá identidade própria e mantém sensação "confiante". Para "acessível" (Kommo), garantir contraste WCAG em text-secondary e text-muted.

---

### Tipografia

| Aspecto | Hello Charles | Kommo | Botfy (atual) |
|--------|----------------|--------|----------------|
| **Display / headlines** | Fonte forte, sem serifa, tracking tight | Sans moderna, legível | Clash Display (+ Inter fallback) — `font-display` |
| **Body** | Legível, peso light/regular | Regular, hierarquia por tamanho | Inter — `font-sans` |
| **Labels / micro** | Mono ou sans caps, tracking largo | Sans, uppercase quando necessário | JetBrains Mono / Space Mono — `font-mono`, 10px uppercase, tracking 0.3–0.4em |
| **Hierarquia** | Títulos grandes (4xl–6xl), subtítulos claros | Títulos médios, corpo confortável | 4xl–6xl em display, text-lg para corpo, mono para labels |

**Conclusão:** Botfy já tem hierarquia clara (display vs body vs mono). Manter essa estrutura; validar tamanhos em mobile (4xl/5xl/6xl responsivos).

---

### Espaçamento e ritmo

| Aspecto | Hello Charles | Kommo | Botfy (atual) |
|--------|----------------|--------|----------------|
| **Seções** | Py grande (24–32), respiro entre blocos | Padding generoso, cards bem separados | py-20 a py-32, max-w-7xl, px-6 lg:px-8 |
| **Grid** | Colunas claras (1–3), gaps consistentes | Grid de cards, listas limpas | grid-cols-1 sm:grid-cols-2/3, gap-6 a gap-12 |
| **Componentes** | Cards com padding 2rem+, bordas sutis | Botões e cards com cantos arredondados | rounded-2xl, p-6, border white/5 |

**Conclusão:** Ritmo já próximo do Charles (respiro, seções bem definidas). Manter max-w-7xl e py-24/32 como padrão de seção.

---

### Componentes

| Componente | Charles | Kommo | Botfy (atual) |
|------------|--------|--------|----------------|
| **CTAs** | Evidentes, contraste alto | Trial/CTA sem fricção, claro | Botão primário roxo, secundário outline; dois CTAs no hero |
| **Cards** | Métricas em destaque, pouco decorativo | Cards simples, ícones | Bento cards (bento-card), glass-panel, kinetic-card; ícones Lucide |
| **Badges / labels** | Mono, caps, cor acento | Pequenos labels, discretos | mono-label, text-[10px] uppercase tracking-[0.4em] accent-purple |
| **Métricas** | Número grande + label pequeno | Número + texto curto | font-display bold 4xl/5xl accent-purple + label text-muted |

**Conclusão:** Botfy combina "premium" (bordas, glow, display font) com "acessível" (CTAs claros, estrutura simples). Próximo passo: documentar variantes de botão e card no design system.

---

## 2. Tokens de design (uso no projeto)

### Cores (Tailwind + CSS vars em `src/index.css`)

| Token | Valor | Uso |
|-------|--------|-----|
| `background` | #000000 | Fundo geral (body) |
| `surface` | #0a0a0a | Cards, áreas elevadas (bento-card, etc.) |
| `surface-light` | #151515 | Superfícies ligeiramente mais claras |
| `border-subtle` | rgba(255,255,255,0.05) | Bordas padrão |
| `border-glow` | rgba(139,92,246,0.3) | Bordas com glow roxo |
| `text-primary` | #ffffff | Títulos, texto principal |
| `text-secondary` | #9ea3ae | Parágrafos, descrições |
| `text-muted` | #667085 | Labels, metadados, footnotes |
| `accent-purple` | #8b5cf6 | CTAs, destaques, métricas, ícones |
| `accent-blue` | #3b82f6 | Gradientes, alternativas |
| `accent-white` | #ffffff | Uso em gradientes/ênfase |

**Classes Tailwind usadas:** `bg-background`, `bg-surface`, `text-text-primary`, `text-text-secondary`, `text-text-muted`, `text-accent-purple`, `border-white/5`, `border-accent-purple/20`, `bg-accent-purple/10`, etc.

---

### Tipografia

| Token | Valor | Uso |
|-------|--------|-----|
| `font-sans` | Inter, Suisse Intl, system-ui | Corpo de texto |
| `font-mono` | JetBrains Mono, Space Mono | Labels, códigos, badges (Why_Us, Built_for_Scale) |
| `font-display` | Clash Display, Inter | Headlines (Hero, Why Us, Security, Steps, CTA) |

**Classes:** `font-display`, `font-mono`, `font-sans`. Tamanhos: `text-[10px]` (labels), `text-sm`, `text-lg`, `text-3xl`–`text-6xl` para títulos.

---

### Espaçamento

| Contexto | Valores típicos |
|----------|------------------|
| Seção vertical | `py-20`, `py-24`, `py-28`, `py-32` (md: idem ou maior) |
| Container | `max-w-7xl mx-auto px-6 lg:px-8` |
| Entre blocos | `mb-4`, `mb-6`, `mb-8`, `mb-10`, `mb-14`, `mb-16`, `mb-20` |
| Grid gaps | `gap-6`, `gap-8`, `gap-12` |
| Cards / painéis | `p-6`, `rounded-2xl` |

---

### Componentes reutilizáveis (classes utilitárias em `index.css`)

| Classe | Uso |
|--------|-----|
| `gradient-text` | Texto em gradiente branco → roxo |
| `gradient-text-blue-purple` | Gradiente azul → roxo |
| `glass-panel` | Fundo translúcido, blur, borda sutil |
| `glass-panel-hover` | Hover com borda roxa e sombra |
| `bento-card` | Card principal da landing (surface, border, hover) |
| `kinetic-card` | Card com hover "kinetic" (borda roxa, sombra) |
| `hard-panel` | Painel escuro com borda e sombra roxa leve |
| `mono-label` | Label em mono, uppercase, acento roxo |
| `huge-title` | Título display, peso 900, letter-spacing tight |
| `noise-bg` | Overlay de ruído sutil (opcional) |
| `aurora-glow` / `glow-aura` | Efeitos de glow no hero/background |

---

## 3. Checklist de consistência

- [ ] **Contraste:** Garantir que `text-secondary` e `text-muted` em fundo escuro atendam WCAG AA (4.5:1 para texto normal).
- [ ] **Hierarquia:** Manter apenas um H1 por página; H2 por seção com `font-display`; labels em `font-mono`.
- [ ] **CTAs:** Primário = accent-purple; secundário = outline branco/roxo; não introduzir muitos estilos de botão.
- [ ] **Espaçamento:** Novas seções usar `py-24 md:py-32` e `max-w-7xl mx-auto px-6 lg:px-8` como padrão.
- [ ] **Documentação:** Atualizar este doc quando novos tokens ou componentes forem adicionados.

---

*Documento criado no âmbito do plano "Visual (identidade visual e design)" da reunião UX/Marca Charles & Kommo. Para referência: `docs/REUNIAO-UX-MARCA-CHARLES-KOMMO.md`.*
