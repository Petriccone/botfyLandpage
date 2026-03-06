# BotfyWebsite (botfylandpage) — Landing Page STAGING

## O que e este projeto

Repositorio de DESENVOLVIMENTO da landing page do botfy.io.
Stack: Vite + React 19 + Tailwind CSS v4 + Framer Motion + Three.js/R3F.

## REGRA CRITICA — Este projeto e APENAS para staging

Este repositorio NAO serve o dominio `botfy.io` diretamente.
O projeto Vercel `botfylandpage` e APENAS para preview/staging.

O dominio `botfy.io` e servido pelo projeto `botfy-website` (Next.js),
que pega os assets buildados daqui e os serve via rewrite.

## Workflow para atualizar a landing page em producao

```
1. Desenvolver aqui (BotfyWebsite/)
2. Testar em botfylandpage-petriccones-projects.vercel.app
3. Buildar:  npm run build
4. Copiar:   cp -r dist/* <bnb-rag-bot>/frontend_dashboard/public/landing/
5. Commit no repo bnb-rag-bot:
   git add frontend_dashboard/public/landing/
   git commit -m "feat(landing): <descricao>"
   git push origin main
6. O auto-deploy do botfy-website atualiza botfy.io automaticamente
```

## PROIBIDO

- NUNCA mover o dominio `botfy.io` para este projeto (`botfylandpage`)
- NUNCA alterar settings do projeto `botfy-website` na Vercel
- NUNCA fazer `vercel --prod` achando que vai atualizar botfy.io — so atualiza o staging
- NUNCA mudar o Git integration do `botfy-website` para este repo

## Links

- Todos os links de login/register devem usar paths RELATIVOS: `/register`, `/login`
- NAO usar `https://app.botfy.io/` (nao existe)
- NAO usar `https://botfy.io/register` (funciona mas e redundante)
- Paths relativos funcionam porque a landing page roda DENTRO do Next.js via rewrite

## Arquitetura de dominio

```
botfy.io/              -> Landing page (Vite SPA via rewrite do Next.js)
botfy.io/login         -> Next.js login page
botfy.io/register      -> Next.js register page
botfy.io/dashboard/*   -> Next.js dashboard

Projeto Vercel   | Repo                        | Root Dir           | Dominio
-----------------|-----------------------------|--------------------|---------
botfylandpage    | Petriccone/botfyLandpage    | .                  | (staging apenas)
botfy-website    | Petriccone/bnb-rag-bot      | frontend_dashboard | botfy.io
bnb-rag-api      | Petriccone/bnb-rag-bot      | .                  | bnb-rag-api.vercel.app
botfy-ai-os      | (separado)                  | —                  | botfy.live
```

## Mobile performance

- `src/lib/motion.tsx` substitui framer-motion por HTML puro no mobile (zero scroll jank)
- Backgrounds decorativos tem `hidden md:block` (nao renderizam no mobile)
- 3D (Three.js) faz fallback para gradiente CSS no mobile via `useDeviceCapability`

## Build

```bash
npm run build    # tsc && vite build -> dist/
npm run dev      # dev server local
```
