export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  nav: {
    howItWorks: string
    solution: string
    pricing: string
    aboutUs: string
    login: string
    startFreeTrial: string
    bookDemo: string
    product: string
    solutions: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    titleHighlight: string
    subtitle: string
    subtitle2: string
    cta: string
    ctaSecondary: string
    trustBullets: string[]
  }
  painPoints: {
    title: string
    subtitle: string
    items: string[]
    closing: string
  }
  solution: {
    title: string
    intro: string
    items: string[]
    closing1: string
    closing2: string
    closing3: string
  }
  platform: {
    titleStart: string
    titleHighlight: string
    steps: { title: string; desc: string }[]
    badges: string[]
  }
  features: {
    titleStart: string
    titleHighlight: string
    items: { title: string; desc: string }[]
  }
  steps: {
    titleStart: string
    titleHighlight: string
    titleEnd: string
    subtitle: string
    items: { title: string; desc: string }[]
    noDevLine: string
    tagline: string
  }
  afterActivate: {
    title: string
    items: string[]
    closing1: string
    closing2: string
  }
  whyBotfy: {
    title: string
    items: string[]
    tagline: string
    tagline2: string
  }
  whyUs: {
    title: string
    subtitle: string
    metrics: { value: string; label: string }[]
    bullets: string[]
  }
  socialProof: {
    title: string
    metrics: { value: string; label: string }[]
  }
  security: {
    titleLine1: string
    titleHighlight: string
    subtitle: string
    listItems: string[]
    card: {
      region: string
      cluster: string
      active: string
      gdprLabel: string
      gdprValue: string
      encLabel: string
      encValue: string
      uptimeLabel: string
      uptimeValue: string
    }
  }
  pricing: {
    titleStart: string
    titleHighlight: string
    subtitle: string
    mostPopular: string
    plans: {
      name: string
      desc: string
      price: string
      period: string
      features: string[]
      cta: string
    }[]
  }
  vision: {
    title: string
    line1: string
    line2: string
    line3: string
    line4: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  kommo: {
    badge: string
    heroLine1: string
    heroLine2: string
    heroLine3: string
    heroHeadline: string
    heroSubline: string
    tryFreeCta: string
    heroBookDemo: string
    heroStats: { value: string; label: string }[]
    lovedBy: string
    moreConversations: { title: string; desc: string; cta: string }
    completeView: { title: string; desc: string; cta: string }
    aiToolkit: { title: string; desc: string; cta: string }
    uniqueWayTitle: string
    uniqueCards: { title: string; desc: string; cta: string }[]
    screenLabels: {
      dashboard: string
      crm: string
      aiAgents: string
      training: string
      team: string
    }
    testimonialsTitle: string
    testimonials: { quote: string; name: string; role: string }[]
    ctaBadge: string
    ctaHeadline: string
    ctaSub: string
    tryFree: string
    bookDemo: string
  }
  logoSection: {
    title: string
  }
  solutionsTabs: {
    title: string
    subtitle: string
    tabs: { label: string; title: string; desc: string; bullets: string[]; screen: string }[]
  }
  howItWorks: {
    title: string
    subtitle: string
    inputLabel: string
    outputLabel: string
    inputs: string[]
    outputs: string[]
    steps: { title: string; desc: string }[]
    noCode: string
  }
  channels: {
    title: string
    subtitle: string
  }
  whyGrid: {
    title: string
    subtitle: string
    cards: { title: string; desc: string }[]
  }
  faq: {
    title: string
    subtitle: string
    items: { q: string; a: string }[]
  }
  footer: {
    desc: string
    product: string
    companyTitle: string
    features: string
    pricing: string
    security: string
    aboutUs: string
    contact: string
    linkedin: string
    privacy: string
    terms: string
    copyright: string
    resources: string
    docs: string
    api: string
    status: string
    gdprLabel: string
    metaPartner: string
    lgpdLabel: string
  }
  pages: {
    about: {
      title: string
      tagline: string
      missionTitle: string
      missionContent: string
      problemTitle: string
      problemIntro: string
      problemList: string[]
      problemClosing: string
      differentTitle: string
      differentList: string[]
      visionTitle: string
      visionList: string[]
      ctaTitle: string
      ctaButton: string
      ctaSecondary: string
    }
    contact: {
      title: string
      lead: string
      email: string
      emailLabel: string
      namePlaceholder: string
      companyPlaceholder: string
      whatsappPlaceholder: string
      messagePlaceholder: string
      send: string
      bookDemoTitle: string
      bookDemoDesc: string
      bookDemoBtn: string
      orEmail: string
    }
  }
}

const en: Translations = {
  nav: {
    howItWorks: 'How it works',
    solution: 'Solution',
    pricing: 'Pricing',
    aboutUs: 'About Us',
    login: 'Log in',
    startFreeTrial: 'Start Free',
    bookDemo: 'Book a Demo',
    product: 'Product',
    solutions: 'Solutions',
  },
  hero: {
    badge: 'Secure AI Agents Infrastructure',
    titleLine1: 'Build Your AI Workforce.',
    titleLine2: '',
    titleHighlight: 'Sell on Autopilot.',
    subtitle: 'Automate conversations, qualify leads and close sales 24/7 — without hiring, without complexity.',
    subtitle2: 'Deploy intelligent AI agents in minutes and turn every message into revenue.',
    cta: 'Start Free Trial',
    ctaSecondary: 'See How It Works',
    trustBullets: ['No setup fees.', 'Self-service platform.', 'Go live in minutes.'],
  },
  painPoints: {
    title: 'Your Business Is Losing Revenue Every Day.',
    subtitle: 'Every missed message is a missed opportunity.',
    items: ['Leads wait too long.', "Customers don't get follow-ups.", 'Sales conversations stop halfway.', 'Hiring more people increases cost.', 'Managing teams increases complexity.', "Manual replies don't scale."],
    closing: 'Growth requires automation.',
  },
  solution: {
    title: 'Meet Your 24/7 AI Workforce.',
    intro: 'Botfy allows you to deploy intelligent AI agents that:',
    items: ['Respond instantly to every message', 'Qualify leads automatically', 'Book appointments', 'Follow up with prospects', 'Guide customers through your sales process', 'Integrate with your existing tools'],
    closing1: 'And it works 24 hours a day. Every day.',
    closing2: 'This is not just a chatbot.',
    closing3: 'This is operational automation powered by AI.',
  },
  platform: {
    titleStart: 'One Platform.',
    titleHighlight: 'Full Control.',
    steps: [
      { title: 'Upload Documents', desc: 'PDF, Excel, URLs' },
      { title: 'Train Agent', desc: 'Vectorized Knowledge' },
      { title: 'Connect Channel', desc: 'WhatsApp, Web' },
      { title: 'Go Live', desc: 'Start serving users' },
    ],
    badges: ['Multi-tenant secure architecture', 'GDPR-ready by default', 'Usage tracking & analytics', 'Namespace isolation per agent'],
  },
  steps: {
    titleStart: 'From Zero to Live',
    titleHighlight: 'Agile Infrastructure',
    titleEnd: ' for AI Teams',
    subtitle: 'From zero to production in a matter of minutes.',
    items: [
      { title: 'Create your account', desc: 'Get started in seconds' },
      { title: 'Connect your communication channel', desc: 'WhatsApp, Web, or both' },
      { title: 'Train your AI with your business information', desc: 'Knowledge base and flows' },
      { title: 'Activate and go live', desc: 'Start selling on autopilot' },
    ],
    noDevLine: 'No developers. No technical setup. No agency dependency.',
    tagline: 'Just automation that sells.',
  },
  features: {
    titleStart: 'Everything you need to',
    titleHighlight: 'scale AI',
    items: [
      { title: 'Multi-Agent Creation', desc: 'Deploy specialized agents for sales, support, or internal operations from one dashboard.' },
      { title: 'Document Training', desc: 'Seamlessly ingest PDFs, Excel files, and URLs to give your agents perfect context.' },
      { title: 'Enterprise-Grade Security', desc: 'End-to-end encryption, SOC2 ready practices, and strict data isolation policies.' },
      { title: 'Omnichannel Integrations', desc: 'Deploy your trained agents to WhatsApp, Telegram, or embed them on your website.' },
      { title: 'Real-Time Dashboard', desc: 'Monitor usage, token costs, and conversation quality with precise analytics.' },
      { title: 'Hosted in Europe', desc: '100% EU-based servers ensuring strict compliance with local data protection laws.' },
    ],
  },
  afterActivate: {
    title: 'Conversations Turn Into Revenue.',
    items: ['Faster response time', 'Higher conversion rates', 'Lower operational costs', 'Automated lead qualification', 'Consistent follow-up', 'More closed deals'],
    closing1: 'Your business stops depending on availability.',
    closing2: 'It starts operating intelligently.',
  },
  whyBotfy: {
    title: 'Built for Scale. Designed for Simplicity.',
    items: ['100% self-service', 'Transparent pricing', 'No setup fees', 'Built for modern businesses', 'Designed in Europe, starting in Ireland'],
    tagline: 'We are building the AI infrastructure layer for ambitious companies.',
    tagline2: 'Start local. Scale global.',
  },
  whyUs: {
    title: 'Why now, why us?',
    subtitle: 'Simple, direct, and measurable — the way European businesses deserve.',
    metrics: [
      { value: '24/7', label: 'Availability' },
      { value: '0', label: 'Code required' },
      { value: 'EU', label: 'Data & GDPR' },
    ],
    bullets: ['Personalized at scale — conversations that stay relevant, no matter the volume', 'Customer-first — most people prefer messaging; we meet that demand', 'Your voice, your way — AI agents speak any language in the right tone', 'Privacy & trust — data in the EU, GDPR by design', 'No coding needed — set up in minutes with intuitive tools', 'Built for revenue — every flow is designed to convert and qualify'],
  },
  socialProof: {
    title: 'Results that speak for themselves',
    metrics: [
      { value: '24/7', label: 'Availability' },
      { value: '< 1 min', label: 'Avg. response time' },
      { value: 'EU', label: 'Data residency' },
    ],
  },
  security: {
    titleLine1: 'Built for',
    titleHighlight: 'Global Scale.',
    subtitle: 'We understand the strict security requirements of the global market. Our infrastructure is designed from the ground up to protect your data.',
    listItems: ['Enterprise-ready foundation', 'Strict tenant isolation', 'Data residency options', 'Global-hosted infrastructure'],
    card: { region: 'Frankfurt Region', cluster: 'Primary Cluster', active: 'Active', gdprLabel: 'GDPR Status', gdprValue: 'Compliant', encLabel: 'Data Encryption', encValue: 'AES-256', uptimeLabel: 'Uptime', uptimeValue: '99.99%' },
  },
  pricing: {
    titleStart: 'Simple Pricing.',
    titleHighlight: 'No Surprises.',
    subtitle: 'Start free. Upgrade when you grow.',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'Free',
        desc: 'Try it out',
        price: '€0',
        period: '/mo',
        features: ['1 AI Agent', '500 Messages/mo', 'WhatsApp only', 'Community support'],
        cta: 'Start Free',
      },
      {
        name: 'Starter',
        desc: 'For small teams',
        price: '€49',
        period: '/mo',
        features: ['1 AI Agent', '2,000 Messages/mo', 'WhatsApp + Web', 'Email support', 'Basic analytics'],
        cta: 'Get Started',
      },
      {
        name: 'Growth',
        desc: 'For growing businesses',
        price: '€149',
        period: '/mo',
        features: ['3 AI Agents', '10,000 Messages/mo', 'All channels', 'Priority support', 'CRM integration', 'Advanced analytics'],
        cta: 'Get Started',
      },
      {
        name: 'Scale',
        desc: 'For high-volume teams',
        price: '€499',
        period: '/mo',
        features: ['10 AI Agents', '50,000 Messages/mo', 'All channels', 'Dedicated support', 'Custom integrations', 'White-label'],
        cta: 'Get Started',
      },
      {
        name: 'Enterprise',
        desc: 'Custom infrastructure',
        price: 'Custom',
        period: '',
        features: ['Unlimited Agents', 'Custom volume', 'Custom integrations', 'Dedicated SLA', 'Account manager', 'Security audits'],
        cta: 'Contact Sales',
      },
    ],
  },
  vision: {
    title: 'The Future of Business Is Autonomous.',
    line1: 'Companies that win tomorrow are building AI-powered operations today.',
    line2: 'Botfy was created by operators who understand growth, automation and execution.',
    line3: "We're not building another tool.",
    line4: "We're building the workforce of the future.",
  },
  cta: {
    title: 'Ready to Sell on Autopilot?',
    subtitle: 'Deploy your AI workforce today.',
    button: 'Start Free Trial',
  },
  kommo: {
    badge: 'AI Agent for WhatsApp & Messaging',
    heroLine1: 'Sell more.',
    heroLine2: 'Serve better.',
    heroLine3: 'On autopilot.',
    heroHeadline: 'All the ways you sell — combined in one AI platform',
    heroSubline: 'Create AI agents trained on your business that sell 24/7 on WhatsApp, Instagram, and more.',
    tryFreeCta: 'Try free for 14 days',
    heroBookDemo: 'Watch demo',
    heroStats: [
      { value: '50+', label: 'countries' },
      { value: '1,000+', label: 'companies' },
      { value: '< 1 min', label: 'avg. response' },
    ],
    lovedBy: 'Trusted by teams that grow',
    moreConversations: {
      title: 'More conversations mean more revenue',
      desc: 'Get clients talking on the channels they love. Your AI agents cover WhatsApp, web chat, and more—so every message turns into a qualified lead or a closed deal.',
      cta: 'Learn more',
    },
    completeView: {
      title: 'A complete history of every conversation',
      desc: 'Botfy merges every touchpoint into one place: all channels, notes, and follow-ups. One profile per client, one pipeline for your team.',
      cta: 'Learn more',
    },
    aiToolkit: {
      title: 'A built-in AI toolkit',
      desc: 'Create AI agents that answer FAQs, recommend products, and book appointments—while you sleep. No coding. Deploy in minutes.',
      cta: 'Learn more',
    },
    uniqueWayTitle: 'A unique way of doing business',
    uniqueCards: [
      { title: 'No-code setup', desc: 'View where every lead is in the journey. Set up flows and bots without a single line of code.', cta: 'Learn more' },
      { title: 'Omnichannel inbox', desc: 'WhatsApp, web, and more in one inbox. Your team and AI work from the same place.', cta: 'Learn more' },
      { title: 'EU-first & secure', desc: 'Data in the EU, GDPR by design. Built for European businesses that care about compliance.', cta: 'Learn more' },
    ],
    screenLabels: {
      dashboard: 'Dashboard — message metrics, activity and quick actions at a glance.',
      crm: 'CRM — full lead history and unified inbox from every channel.',
      aiAgents: 'AI Agents — create and manage specialized agents by niche.',
      training: 'Training — upload documents and knowledge bases to train your AI.',
      team: 'Team — group agents into departments (e.g. Sales, Support).',
    },
    testimonialsTitle: 'What teams say about Botfy',
    testimonials: [
      { quote: 'We went from missing leads to closing them in the same day. Botfy changed how we handle inbound.', name: 'Sarah M.', role: 'Sales Lead' },
      { quote: 'Simple, direct, measurable. Finally an AI platform that just works and delivers results.', name: 'James K.', role: 'Founder' },
      { quote: 'Our response time dropped from hours to under a minute. Revenue went up significantly.', name: 'Elena R.', role: 'Operations Lead' },
    ],
    ctaBadge: '14-day free trial · No credit card',
    ctaHeadline: 'Get Botfy free for 14 days',
    ctaSub: 'Start building your AI sales pipeline today. No credit card required.',
    tryFree: 'Start free',
    bookDemo: 'Book a demo',
  },
  logoSection: {
    title: 'Trusted by teams that grow',
  },
  solutionsTabs: {
    title: 'A solution for every stage of the journey',
    subtitle: 'From lead generation to retention, Botfy automates it all.',
    tabs: [
      {
        label: 'Acquisition',
        title: 'Capture more leads, automatically',
        desc: 'Turn traffic into conversations and conversations into qualified leads — without lifting a finger.',
        bullets: ['Click-to-WhatsApp ads that convert', 'Automatic lead qualification 24/7', 'Instant response to every inquiry'],
        screen: 'dashboard',
      },
      {
        label: 'Conversion',
        title: 'Close more deals while you sleep',
        desc: 'Your AI follows up, sends proposals, and closes deals — even outside business hours.',
        bullets: ['Abandoned cart recovery on WhatsApp', 'Automated proposals and follow-ups', 'AI that closes deals at any hour'],
        screen: 'crm',
      },
      {
        label: 'Retention',
        title: 'Keep customers coming back',
        desc: 'Automated post-sale, smart upsells, and 24/7 support — without a support team.',
        bullets: ['Post-sale automation and NPS', 'Smart upsell and repurchase flows', '24/7 support with no wait time'],
        screen: 'ai-agents',
      },
    ],
  },
  howItWorks: {
    title: 'How does Botfy work?',
    subtitle: 'You train it. The AI does the work.',
    inputLabel: 'You provide',
    outputLabel: 'AI delivers',
    inputs: ['Product catalog', 'FAQs & policies', 'Brand voice & tone', 'Customer data'],
    outputs: ['Qualified leads', 'Closed sales', 'Resolved support', 'Booked appointments'],
    steps: [
      { title: 'Connect WhatsApp', desc: '2 minutes to integrate' },
      { title: 'Train the AI', desc: 'No code, no agency' },
      { title: 'Activate and sell', desc: '24/7 on autopilot' },
    ],
    noCode: 'No developers. No technical setup. Just results.',
  },
  channels: {
    title: 'Present on every channel your customers use',
    subtitle: 'All managed from a single inbox.',
  },
  whyGrid: {
    title: 'Why choose Botfy?',
    subtitle: 'Built for businesses that need results, not complexity.',
    cards: [
      { title: 'No code needed', desc: 'Set up in minutes with our intuitive interface. No developers required.' },
      { title: '24/7 availability', desc: 'Never miss a lead, even outside business hours. Always on.' },
      { title: 'Your voice & tone', desc: 'The AI speaks exactly like your brand, in any language.' },
      { title: 'CRM integration', desc: 'Connects with HubSpot, Salesforce, and your existing tools.' },
      { title: 'GDPR compliant', desc: 'Data protected and stored in the EU. Compliant by design.' },
      { title: 'Scales automatically', desc: 'Grows with your business without hiring more staff.' },
      { title: 'Real personalization', desc: 'Every conversation adapted to the individual customer.' },
      { title: 'Dedicated support', desc: 'Our team is always available to help you succeed.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Still have questions? Our team is ready to help.',
    items: [
      { q: 'How does the free trial work?', a: '14 days of full access, no credit card required. Cancel anytime, no questions asked.' },
      { q: 'Does it work with WhatsApp Business API?', a: 'Yes. We integrate with the official WhatsApp Business API. You keep full control of your account and number.' },
      { q: 'Do I need to know how to code?', a: 'Not at all. Botfy is 100% self-service. Configure flows, train the AI, and go live in minutes — zero lines of code.' },
      { q: 'How long does setup take?', a: 'Most customers are live in under 30 minutes. Connect your channel, upload your content, and activate.' },
      { q: 'Is it GDPR compliant?', a: 'Yes. All data is stored on EU servers and processed in full compliance with GDPR and local data protection laws.' },
      { q: "Can I customize the agent's personality?", a: 'Yes. You define the personality, tone of voice, and communication style. The AI speaks exactly like your brand.' },
      { q: 'Which channels are supported?', a: 'WhatsApp, Instagram, Messenger, Web Chat, and Email — all managed from one unified inbox.' },
      { q: 'How is the AI trained?', a: 'Upload your documents (PDF, Excel, URLs), policies, catalogs, and FAQs. The AI learns from your content automatically.' },
      { q: 'Can I have multiple agents for different teams?', a: 'Yes. You can create multiple AI agents, each trained for specific roles — a sales agent, a support agent, a scheduling agent — all working in parallel.' },
      { q: "What happens when the AI doesn't know the answer?", a: 'The AI gracefully escalates to a human agent or captures the query for follow-up. You define exactly when and how the handoff happens.' },
      { q: 'Can I connect my CRM or other tools?', a: 'Yes. Botfy integrates with HubSpot, Salesforce, RD Station, and many other platforms via native integrations and our open API.' },
      { q: 'Is there a limit on monthly conversations?', a: 'Each plan includes a monthly conversation quota. You can upgrade at any time if you need more volume. There are no surprise overage fees.' },
      { q: 'What languages does the AI support?', a: 'The AI supports over 50 languages, including Portuguese, English, Spanish, French, German, and more — automatically detected per conversation.' },
      { q: 'Can I test the agent before going live?', a: 'Absolutely. Every plan includes a sandbox environment where you can preview and test your AI agent before publishing it to customers.' },
    ],
  },
  footer: {
    desc: 'AI agents that sell and support — on autopilot. Built for businesses that want to grow without limits.',
    product: 'Product',
    companyTitle: 'Company',
    features: 'AI Agents',
    pricing: 'Pricing',
    security: 'Security',
    aboutUs: 'About Us',
    contact: 'Contact',
    linkedin: 'LinkedIn',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2026 Botfy. All rights reserved.',
    resources: 'Resources',
    docs: 'Documentation',
    api: 'API Reference',
    status: 'System Status',
    gdprLabel: 'GDPR Compliant',
    metaPartner: 'Meta Business Partner',
    lgpdLabel: 'LGPD Ready',
  },
  pages: {
    about: {
      title: 'About Us',
      tagline: 'We built the AI that sells and supports — so your team can focus on what matters.',
      missionTitle: 'Our Mission',
      missionContent: 'Democratize access to intelligent AI agents through a 100% self-service platform that is simple to set up, powerful in execution, and scalable for any business.',
      problemTitle: 'The Problem We Solve',
      problemIntro: 'Every day, businesses deal with:',
      problemList: ['Repetitive questions taking up team time', 'After-hours messages with no one to respond', 'Leads that go cold waiting for a reply', 'Conversations that fall through the cracks'],
      problemClosing: 'Every delayed response can mean a lost sale. Botfy automates these interactions with intelligence, keeping businesses responsive 24/7.',
      differentTitle: 'What Makes Us Different',
      differentList: ['100% self-service — no agency, no developer needed', 'Trained on your business, not a generic chatbot', 'Live in under 30 minutes', 'EU-first infrastructure — GDPR & LGPD compliant', 'Transparent pricing, no hidden fees'],
      visionTitle: 'Our Vision',
      visionList: ['Build the AI layer that powers business communication', 'Accessible for small teams, scalable for enterprise', 'Make instant, intelligent responses the new standard'],
      ctaTitle: 'Ready to see Botfy in action?',
      ctaButton: 'Start free — 14 days',
      ctaSecondary: 'Talk to us',
    },
    contact: {
      title: 'Get in touch',
      lead: 'Tell us about your business and we\'ll show you exactly how Botfy can help.',
      email: 'contact@botfy.ai',
      emailLabel: 'Email',
      namePlaceholder: 'Your name',
      companyPlaceholder: 'Company name',
      whatsappPlaceholder: 'WhatsApp number',
      messagePlaceholder: 'How can we help you?',
      send: 'Send message',
      bookDemoTitle: 'Prefer a live demo?',
      bookDemoDesc: 'Schedule a 30-minute call with our team. We\'ll walk you through the platform and answer all your questions.',
      bookDemoBtn: 'Book a demo call',
      orEmail: 'Or email us directly at',
    },
  },
}

const pt: Translations = {
  nav: {
    howItWorks: 'Como funciona',
    solution: 'Solução',
    pricing: 'Preços',
    aboutUs: 'Sobre Nós',
    login: 'Entrar',
    startFreeTrial: 'Começar Grátis',
    bookDemo: 'Agendar Demo',
    product: 'Produto',
    solutions: 'Soluções',
  },
  hero: {
    badge: 'Infraestrutura Segura de Agentes IA',
    titleLine1: 'Monte Sua Força de Trabalho em IA.',
    titleLine2: '',
    titleHighlight: 'Venda no Piloto Automático.',
    subtitle: 'Automatize conversas, qualifique leads e feche vendas 24/7 — sem contratar, sem complexidade.',
    subtitle2: 'Implante agentes de IA em minutos e transforme cada mensagem em receita.',
    cta: 'Teste Grátis',
    ctaSecondary: 'Ver Como Funciona',
    trustBullets: ['Sem taxas de configuração.', 'Plataforma self-service.', 'No ar em minutos.'],
  },
  painPoints: {
    title: 'Seu Negócio Está Perdendo Receita Todo Dia.',
    subtitle: 'Cada mensagem não respondida é uma oportunidade perdida.',
    items: ['Leads esperam demais.', 'Clientes não recebem follow-up.', 'Conversas de vendas param no meio.', 'Contratar mais pessoas aumenta custo.', 'Gerir equipes aumenta complexidade.', 'Respostas manuais não escalam.'],
    closing: 'Crescimento exige automação.',
  },
  solution: {
    title: 'Conheça Sua Força de Trabalho em IA 24/7.',
    intro: 'A Botfy permite que você implante agentes de IA que:',
    items: ['Respondem instantaneamente a cada mensagem', 'Qualificam leads automaticamente', 'Agendam reuniões', 'Dão follow-up em prospects', 'Guiam clientes pelo seu processo de vendas', 'Integram com suas ferramentas atuais'],
    closing1: 'E funciona 24 horas por dia. Todos os dias.',
    closing2: 'Não é só um chatbot.',
    closing3: 'É automação operacional powered por IA.',
  },
  platform: {
    titleStart: 'Uma Plataforma.',
    titleHighlight: 'Controle Total.',
    steps: [
      { title: 'Enviar Documentos', desc: 'PDF, Excel, URLs' },
      { title: 'Treinar Agente', desc: 'Conhecimento Vetorizado' },
      { title: 'Conectar Canal', desc: 'WhatsApp, Web' },
      { title: 'Ir ao Vivo', desc: 'Comece a atender usuários' },
    ],
    badges: ['Arquitetura multi-tenant segura', 'GDPR pronto por padrão', 'Rastreamento de uso e análises', 'Isolamento de namespace por agente'],
  },
  features: {
    titleStart: 'Tudo que você precisa para',
    titleHighlight: 'escalar IA',
    items: [
      { title: 'Criação Multi-Agente', desc: 'Implante agentes especializados para vendas, suporte ou operações internas em um painel.' },
      { title: 'Treinamento de Documentos', desc: 'Ingira PDFs, arquivos Excel e URLs para dar contexto perfeito aos seus agentes.' },
      { title: 'Segurança Enterprise', desc: 'Criptografia ponta a ponta, práticas SOC2 e políticas rigorosas de isolamento de dados.' },
      { title: 'Integrações Omnichannel', desc: 'Implante seus agentes no WhatsApp, Telegram ou incorpore em seu website.' },
      { title: 'Painel em Tempo Real', desc: 'Monitore uso, custos de tokens e qualidade de conversas com análises precisas.' },
      { title: 'Hospedado na Europa', desc: 'Servidores 100% na UE garantindo conformidade com leis locais de proteção de dados.' },
    ],
  },
  steps: {
    titleStart: 'Do zero ao vivo',
    titleHighlight: 'em minutos.',
    titleEnd: '',
    subtitle: 'De zero a produção em questão de minutos.',
    items: [
      { title: 'Crie sua conta', desc: 'Comece em segundos' },
      { title: 'Conecte seu canal de comunicação', desc: 'WhatsApp, Web ou ambos' },
      { title: 'Treine sua IA com as informações do seu negócio', desc: 'Base de conhecimento e fluxos' },
      { title: 'Ative e vá ao vivo', desc: 'Comece a vender no piloto automático' },
    ],
    noDevLine: 'Sem desenvolvedores. Sem configuração técnica. Sem depender de agência.',
    tagline: 'Só automação que vende.',
  },
  afterActivate: {
    title: 'Conversas Viram Receita.',
    items: ['Resposta mais rápida', 'Maior taxa de conversão', 'Menor custo operacional', 'Qualificação de leads automatizada', 'Follow-up consistente', 'Mais negócios fechados'],
    closing1: 'Seu negócio deixa de depender de disponibilidade.',
    closing2: 'Passa a operar com inteligência.',
  },
  whyBotfy: {
    title: 'Feito para Escalar. Pensado para Simplicidade.',
    items: ['100% self-service', 'Preços transparentes', 'Sem taxas de configuração', 'Feito para negócios modernos', 'Desenhado na Europa, começando na Irlanda'],
    tagline: 'Estamos construindo a camada de infraestrutura em IA para empresas ambiciosas.',
    tagline2: 'Comece local. Escale global.',
  },
  whyUs: {
    title: 'Por que agora, por que nós?',
    subtitle: 'Simples, direto e mensurável — do jeito que empresas merecem.',
    metrics: [
      { value: '24/7', label: 'Disponibilidade' },
      { value: '0', label: 'Código necessário' },
      { value: 'UE', label: 'Dados e GDPR' },
    ],
    bullets: ['Personalização em escala — conversas relevantes, em qualquer volume', 'Cliente em primeiro — a maioria prefere mensagens; atendemos a isso', 'Sua voz, seu jeito — agentes em qualquer idioma e tom', 'Privacidade e confiança — dados na UE, GDPR por design', 'Sem código — configure em minutos com ferramentas intuitivas', 'Feito para receita — cada fluxo pensado para converter e qualificar'],
  },
  socialProof: {
    title: 'Resultados que falam por si',
    metrics: [
      { value: '24/7', label: 'Disponibilidade' },
      { value: '< 1 min', label: 'Tempo médio de resposta' },
      { value: 'UE', label: 'Residência de dados' },
    ],
  },
  security: {
    titleLine1: 'Construído para',
    titleHighlight: 'Escala Global.',
    subtitle: 'Entendemos os rigorosos requisitos de segurança do mercado global. Nossa infraestrutura é projetada desde o início para proteger seus dados.',
    listItems: ['Base enterprise-ready', 'Isolamento rigoroso de tenants', 'Opções de residência de dados', 'Infraestrutura hospedada globalmente'],
    card: { region: 'Região Frankfurt', cluster: 'Cluster Primário', active: 'Ativo', gdprLabel: 'Status GDPR', gdprValue: 'Compatível', encLabel: 'Criptografia', encValue: 'AES-256', uptimeLabel: 'Uptime', uptimeValue: '99.99%' },
  },
  pricing: {
    titleStart: 'Preços Simples.',
    titleHighlight: 'Sem Surpresas.',
    subtitle: 'Comece grátis. Atualize quando crescer.',
    mostPopular: 'Mais Popular',
    plans: [
      {
        name: 'Free',
        desc: 'Experimente',
        price: '€0',
        period: '/mês',
        features: ['1 Agente IA', '500 Mensagens/mês', 'Só WhatsApp', 'Suporte da comunidade'],
        cta: 'Começar Grátis',
      },
      {
        name: 'Starter',
        desc: 'Para pequenas equipes',
        price: '€49',
        period: '/mês',
        features: ['1 Agente IA', '2.000 Mensagens/mês', 'WhatsApp + Web', 'Suporte por e-mail', 'Analytics básico'],
        cta: 'Começar',
      },
      {
        name: 'Growth',
        desc: 'Para negócios em crescimento',
        price: '€149',
        period: '/mês',
        features: ['3 Agentes IA', '10.000 Mensagens/mês', 'Todos os canais', 'Suporte prioritário', 'Integração CRM', 'Analytics avançado'],
        cta: 'Começar',
      },
      {
        name: 'Scale',
        desc: 'Para alto volume',
        price: '€499',
        period: '/mês',
        features: ['10 Agentes IA', '50.000 Mensagens/mês', 'Todos os canais', 'Suporte dedicado', 'Integrações personalizadas', 'White-label'],
        cta: 'Começar',
      },
      {
        name: 'Enterprise',
        desc: 'Infraestrutura customizada',
        price: 'Sob consulta',
        period: '',
        features: ['Agentes ilimitados', 'Volume customizado', 'Integrações personalizadas', 'SLA dedicado', 'Gerente de conta', 'Auditorias de segurança'],
        cta: 'Falar com Vendas',
      },
    ],
  },
  vision: {
    title: 'O Futuro dos Negócios É Autônomo.',
    line1: 'Empresas que vencerão amanhã estão construindo operações com IA hoje.',
    line2: 'A Botfy foi criada por operadores que entendem crescimento, automação e execução.',
    line3: 'Não estamos construindo mais uma ferramenta.',
    line4: 'Estamos construindo a força de trabalho do futuro.',
  },
  cta: {
    title: 'Pronto para Vender no Piloto Automático?',
    subtitle: 'Implante sua força de trabalho em IA hoje.',
    button: 'Teste Grátis',
  },
  kommo: {
    badge: 'Agente de IA para WhatsApp & Mensageiros',
    heroLine1: 'Venda mais.',
    heroLine2: 'Atenda melhor.',
    heroLine3: 'No piloto automático.',
    heroHeadline: 'Tudo o que você precisa para vender — em uma plataforma de IA',
    heroSubline: 'Crie agentes de IA treinados com o seu negócio que vendem 24/7 pelo WhatsApp, Instagram e mais.',
    tryFreeCta: 'Começar grátis — 14 dias',
    heroBookDemo: 'Ver demonstração',
    heroStats: [
      { value: '50+', label: 'países' },
      { value: '1.000+', label: 'empresas' },
      { value: '< 1 min', label: 'resposta média' },
    ],
    lovedBy: 'Confiado por equipes que crescem',
    moreConversations: {
      title: 'Mais conversas, mais receita',
      desc: 'Conecte-se aos clientes nos canais que eles preferem. Seus agentes de IA cobrem WhatsApp, chat web e mais — cada mensagem vira lead qualificado ou venda.',
      cta: 'Saiba mais',
    },
    completeView: {
      title: 'Histórico completo de cada conversa',
      desc: 'A Botfy une todos os touchpoints em um só lugar: todos os canais, notas e follow-ups. Um perfil por cliente, um pipeline para sua equipe.',
      cta: 'Saiba mais',
    },
    aiToolkit: {
      title: 'Kit de ferramentas de IA integrado',
      desc: 'Crie agentes de IA que respondem FAQs, recomendam produtos e agendam reuniões — enquanto você dorme. Sem código. Implante em minutos.',
      cta: 'Saiba mais',
    },
    uniqueWayTitle: 'Uma forma única de fazer negócios',
    uniqueCards: [
      { title: 'Configuração sem código', desc: 'Veja onde cada lead está na jornada. Monte fluxos e bots sem uma linha de código.', cta: 'Saiba mais' },
      { title: 'Inbox omnichannel', desc: 'WhatsApp, web e mais em uma caixa de entrada. Sua equipe e a IA no mesmo lugar.', cta: 'Saiba mais' },
      { title: 'EU-first e seguro', desc: 'Dados na UE, GDPR por design. Feito para empresas que valorizam conformidade.', cta: 'Saiba mais' },
    ],
    screenLabels: {
      dashboard: 'Dashboard — métricas de mensagens, atividade e ações rápidas num relance.',
      crm: 'CRM — histórico completo de leads e inbox unificado de todos os canais.',
      aiAgents: 'AI Agents — crie e gerencie agentes especializados por nicho.',
      training: 'Treinamento — envie documentos e bases de conhecimento para treinar a IA.',
      team: 'Equipe — agrupe agentes em departamentos (ex.: Vendas, Suporte).',
    },
    testimonialsTitle: 'O que dizem sobre a Botfy',
    testimonials: [
      { quote: 'Passamos a fechar no mesmo dia leads que antes perdíamos. A Botfy mudou como tratamos o inbound.', name: 'Sarah M.', role: 'Líder de Vendas' },
      { quote: 'Simples, direto, mensurável. Finalmente uma plataforma de IA que funciona de verdade.', name: 'James K.', role: 'Fundador' },
      { quote: 'O tempo de resposta caiu de horas para menos de um minuto. A receita subiu.', name: 'Elena R.', role: 'Operações' },
    ],
    ctaBadge: '14 dias grátis · Sem cartão de crédito',
    ctaHeadline: 'Use a Botfy grátis por 14 dias',
    ctaSub: 'Comece a construir seu pipeline de vendas com IA hoje. Sem cartão de crédito.',
    tryFree: 'Começar grátis',
    bookDemo: 'Agendar demo',
  },
  logoSection: {
    title: 'Confiado por equipes que crescem',
  },
  solutionsTabs: {
    title: 'Uma solução para cada etapa da jornada',
    subtitle: 'Da geração de leads à retenção, a Botfy automatiza tudo.',
    tabs: [
      {
        label: 'Aquisição',
        title: 'Capture mais leads, automaticamente',
        desc: 'Transforme tráfego em conversas e conversas em leads qualificados — sem esforço manual.',
        bullets: ['Anúncios Click-to-WhatsApp que convertem', 'Qualificação automática de leads 24/7', 'Resposta instantânea a cada interesse'],
        screen: 'dashboard',
      },
      {
        label: 'Conversão',
        title: 'Feche mais vendas enquanto dorme',
        desc: 'Sua IA faz follow-up, envia propostas e fecha negócios — até fora do horário comercial.',
        bullets: ['Retomada de carrinhos abandonados no WhatsApp', 'Propostas e follow-ups automáticos', 'IA que fecha negócios em qualquer hora'],
        screen: 'crm',
      },
      {
        label: 'Retenção',
        title: 'Mantenha clientes voltando sempre',
        desc: 'Pós-venda automatizado, upsell inteligente e suporte 24/7 — sem equipe de suporte.',
        bullets: ['Automação de pós-venda e NPS', 'Fluxos de recompra e upsell inteligente', 'Suporte 24/7 sem fila de espera'],
        screen: 'ai-agents',
      },
    ],
  },
  howItWorks: {
    title: 'Como a Botfy funciona?',
    subtitle: 'Você treina. A IA trabalha.',
    inputLabel: 'Você fornece',
    outputLabel: 'A IA entrega',
    inputs: ['Catálogo de produtos', 'FAQs e políticas', 'Tom e identidade da marca', 'Dados de clientes'],
    outputs: ['Leads qualificados', 'Vendas fechadas', 'Suporte resolvido', 'Agendamentos feitos'],
    steps: [
      { title: 'Conecte o WhatsApp', desc: '2 minutos para integrar' },
      { title: 'Treine a IA', desc: 'Sem código, sem agência' },
      { title: 'Ative e venda', desc: '24/7 no piloto automático' },
    ],
    noCode: 'Sem desenvolvedores. Sem configuração técnica. Só resultado.',
  },
  channels: {
    title: 'Presente onde seus clientes estão',
    subtitle: 'Tudo gerenciado em uma única inbox.',
  },
  whyGrid: {
    title: 'Por que escolher a Botfy?',
    subtitle: 'Construído para negócios que precisam de resultado, não de complexidade.',
    cards: [
      { title: 'Sem código', desc: 'Configure em minutos com nossa interface intuitiva. Sem desenvolvedores.' },
      { title: 'Disponível 24/7', desc: 'Nunca perde um lead, nem fora do horário comercial.' },
      { title: 'Sua voz e tom', desc: 'A IA fala exatamente como a sua marca, em qualquer idioma.' },
      { title: 'Integra com CRM', desc: 'Conecta com HubSpot, Salesforce e suas ferramentas atuais.' },
      { title: 'LGPD & GDPR', desc: 'Dados protegidos e armazenados na UE. Conformidade por design.' },
      { title: 'Escala automática', desc: 'Cresce com o seu negócio sem precisar contratar mais.' },
      { title: 'Personalização real', desc: 'Cada conversa adaptada ao cliente individualmente.' },
      { title: 'Suporte dedicado', desc: 'Nossa equipe está sempre disponível para te ajudar.' },
    ],
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'Ainda com dúvidas? Nossa equipe está pronta para ajudar.',
    items: [
      { q: 'Como funciona o período de teste?', a: '14 dias com acesso completo, sem cartão de crédito obrigatório. Cancele quando quiser, sem burocracia.' },
      { q: 'Funciona com o WhatsApp Business?', a: 'Sim. Integramos com a API oficial do WhatsApp Business. Você mantém o controle total da sua conta e número.' },
      { q: 'Preciso saber programar?', a: 'Não. A Botfy é 100% self-service. Configure fluxos, treine a IA e ative em minutos — sem uma linha de código.' },
      { q: 'Quanto tempo leva para configurar?', a: 'A maioria dos clientes está no ar em menos de 30 minutos. Conecte o canal, envie seus conteúdos e ative.' },
      { q: 'É compatível com LGPD e GDPR?', a: 'Sim. Todos os dados são armazenados em servidores na União Europeia e processados conforme LGPD e GDPR.' },
      { q: 'Posso personalizar o tom do agente?', a: 'Sim. Você define a personalidade, tom de voz e estilo de comunicação. A IA fala exatamente como a sua marca.' },
      { q: 'Quais canais são suportados?', a: 'WhatsApp, Instagram, Messenger, Web Chat e E-mail. Todos gerenciados em uma única inbox.' },
      { q: 'Como a IA é treinada?', a: 'Você faz upload de documentos (PDF, Excel, URL), políticas, catálogos e FAQs. A IA aprende automaticamente com seu conteúdo.' },
      { q: 'Posso ter vários agentes para equipes diferentes?', a: 'Sim. Você pode criar múltiplos agentes, cada um treinado para uma função específica — vendas, suporte, agendamento — todos operando em paralelo.' },
      { q: 'O que acontece quando a IA não sabe a resposta?', a: 'A IA escala para um atendente humano ou registra a dúvida para acompanhamento. Você define exatamente quando e como acontece o repasse.' },
      { q: 'Consigo integrar com meu CRM?', a: 'Sim. A Botfy integra com HubSpot, Salesforce, RD Station e outras plataformas via integrações nativas e API aberta.' },
      { q: 'Existe limite de conversas por mês?', a: 'Cada plano inclui uma cota mensal de conversas. Você pode fazer upgrade a qualquer momento. Sem cobranças surpresa por excedente.' },
      { q: 'Em quais idiomas a IA atende?', a: 'A IA suporta mais de 50 idiomas, incluindo português, inglês, espanhol, francês e alemão — detectados automaticamente por conversa.' },
      { q: 'Posso testar o agente antes de ir ao ar?', a: 'Com certeza. Todo plano inclui um ambiente de testes onde você simula conversas e valida o comportamento do agente antes de publicar.' },
    ],
  },
  footer: {
    desc: 'Agentes de IA que vendem e atendem — no piloto automático. Feito para negócios que querem crescer sem limites.',
    product: 'Produto',
    companyTitle: 'Empresa',
    features: 'Agentes IA',
    pricing: 'Preços',
    security: 'Segurança',
    aboutUs: 'Sobre Nós',
    contact: 'Contato',
    linkedin: 'LinkedIn',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    copyright: '© 2026 Botfy. Todos os direitos reservados.',
    resources: 'Recursos',
    docs: 'Documentação',
    api: 'Referência de API',
    status: 'Status do Sistema',
    gdprLabel: 'GDPR Compliant',
    metaPartner: 'Meta Business Partner',
    lgpdLabel: 'LGPD Pronto',
  },
  pages: {
    about: {
      title: 'Sobre Nós',
      tagline: 'Criamos a IA que vende e atende — para que seu time foque no que realmente importa.',
      missionTitle: 'Nossa Missão',
      missionContent: 'Democratizar o acesso a agentes de IA inteligentes através de uma plataforma 100% self-service, simples de configurar, poderosa na execução e escalável para qualquer negócio.',
      problemTitle: 'O Problema que Resolvemos',
      problemIntro: 'Todos os dias as empresas enfrentam:',
      problemList: ['Perguntas repetitivas consumindo tempo da equipe', 'Mensagens fora do horário sem ninguém para responder', 'Leads esfriando enquanto esperam por resposta', 'Conversas que se perdem e nunca voltam'],
      problemClosing: 'Cada resposta atrasada pode ser uma venda perdida. A Botfy automatiza essas interações com inteligência, mantendo as empresas responsivas 24/7.',
      differentTitle: 'O que Nos Diferencia',
      differentList: ['100% self-service — sem agência, sem desenvolvedor', 'Treinada no seu negócio, não um chatbot genérico', 'No ar em menos de 30 minutos', 'Infraestrutura EU-first — LGPD e GDPR compliant', 'Preços transparentes, sem taxas escondidas'],
      visionTitle: 'Nossa Visão',
      visionList: ['Construir a camada de IA que potencializa a comunicação empresarial', 'Acessível para pequenas equipes, escalável para grandes empresas', 'Tornar respostas instantâneas e inteligentes o novo padrão'],
      ctaTitle: 'Pronto para ver a Botfy em ação?',
      ctaButton: 'Começar grátis — 14 dias',
      ctaSecondary: 'Fale com a gente',
    },
    contact: {
      title: 'Fale conosco',
      lead: 'Conte sobre o seu negócio e mostraremos exatamente como a Botfy pode ajudar.',
      email: 'contact@botfy.ai',
      emailLabel: 'E-mail',
      namePlaceholder: 'Seu nome',
      companyPlaceholder: 'Nome da empresa',
      whatsappPlaceholder: 'Número de WhatsApp',
      messagePlaceholder: 'Como podemos ajudar?',
      send: 'Enviar mensagem',
      bookDemoTitle: 'Prefere uma demonstração ao vivo?',
      bookDemoDesc: 'Agende uma chamada de 30 minutos com nosso time. Vamos apresentar a plataforma e responder todas as suas dúvidas.',
      bookDemoBtn: 'Agendar uma demo',
      orEmail: 'Ou nos envie um e-mail diretamente',
    },
  },
}

const es: Translations = {
  nav: {
    howItWorks: 'Cómo funciona',
    solution: 'Solución',
    pricing: 'Precios',
    aboutUs: 'Sobre Nosotros',
    login: 'Iniciar sesión',
    startFreeTrial: 'Empezar Gratis',
    bookDemo: 'Reservar Demo',
    product: 'Producto',
    solutions: 'Soluciones',
  },
  hero: {
    badge: 'Infraestructura Segura de Agentes IA',
    titleLine1: 'Construye Tu Fuerza de Trabajo en IA.',
    titleLine2: '',
    titleHighlight: 'Vende en Piloto Automático.',
    subtitle: 'Automatiza conversaciones, califica leads y cierra ventas 24/7 — sin contratar, sin complejidad.',
    subtitle2: 'Despliega agentes de IA en minutos y convierte cada mensaje en ingresos.',
    cta: 'Prueba Gratis',
    ctaSecondary: 'Ver Cómo Funciona',
    trustBullets: ['Sin costes de configuración.', 'Plataforma self-service.', 'En vivo en minutos.'],
  },
  painPoints: {
    title: 'Tu Negocio Pierde Ingresos Cada Día.',
    subtitle: 'Cada mensaje sin respuesta es una oportunidad perdida.',
    items: ['Los leads esperan demasiado.', 'Los clientes no reciben seguimiento.', 'Las conversaciones de ventas se cortan.', 'Contratar más personas aumenta costes.', 'Gestionar equipos aumenta la complejidad.', 'Las respuestas manuales no escalan.'],
    closing: 'El crecimiento requiere automatización.',
  },
  solution: {
    title: 'Conoce Tu Fuerza de Trabajo en IA 24/7.',
    intro: 'Botfy te permite desplegar agentes de IA que:',
    items: ['Responden al instante a cada mensaje', 'Califican leads automáticamente', 'Reservan citas', 'Dan seguimiento a prospectos', 'Guían a los clientes por tu proceso de ventas', 'Se integran con tus herramientas actuales'],
    closing1: 'Y funciona 24 horas al día. Todos los días.',
    closing2: 'No es solo un chatbot.',
    closing3: 'Es automatización operativa impulsada por IA.',
  },
  platform: {
    titleStart: 'Una Plataforma.',
    titleHighlight: 'Control Total.',
    steps: [
      { title: 'Subir Documentos', desc: 'PDF, Excel, URLs' },
      { title: 'Entrenar Agente', desc: 'Conocimiento Vectorizado' },
      { title: 'Conectar Canal', desc: 'WhatsApp, Web' },
      { title: 'Ir en Vivo', desc: 'Comienza a atender usuarios' },
    ],
    badges: ['Arquitectura multi-tenant segura', 'GDPR listo por defecto', 'Seguimiento de uso y análisis', 'Aislamiento de namespace por agente'],
  },
  features: {
    titleStart: 'Todo lo que necesitas para',
    titleHighlight: 'escalar IA',
    items: [
      { title: 'Creación Multi-Agente', desc: 'Despliega agentes especializados para ventas, soporte u operaciones internas desde un panel.' },
      { title: 'Entrenamiento de Documentos', desc: 'Ingiere PDFs, archivos Excel y URLs para dar contexto perfecto a tus agentes.' },
      { title: 'Seguridad Enterprise', desc: 'Cifrado de extremo a extremo, prácticas SOC2 y políticas estrictas de aislamiento de datos.' },
      { title: 'Integraciones Omnicanal', desc: 'Despliega tus agentes en WhatsApp, Telegram o incorpóralos en tu sitio web.' },
      { title: 'Panel en Tiempo Real', desc: 'Monitorea uso, costos de tokens y calidad de conversaciones con análisis precisos.' },
      { title: 'Alojado en Europa', desc: 'Servidores 100% en la UE asegurando cumplimiento estricto con leyes locales de protección de datos.' },
    ],
  },
  steps: {
    titleStart: 'De cero a en vivo',
    titleHighlight: 'en minutos.',
    titleEnd: '',
    subtitle: 'De cero a producción en cuestión de minutos.',
    items: [
      { title: 'Crea tu cuenta', desc: 'Empieza en segundos' },
      { title: 'Conecta tu canal de comunicación', desc: 'WhatsApp, Web o ambos' },
      { title: 'Entrena tu IA con la información de tu negocio', desc: 'Base de conocimiento y flujos' },
      { title: 'Activa y pon en marcha', desc: 'Empieza a vender en piloto automático' },
    ],
    noDevLine: 'Sin desarrolladores. Sin configuración técnica. Sin depender de agencias.',
    tagline: 'Solo automatización que vende.',
  },
  afterActivate: {
    title: 'Las Conversaciones Se Convierten en Ingresos.',
    items: ['Tiempo de respuesta más rápido', 'Mayor tasa de conversión', 'Menor coste operativo', 'Calificación de leads automatizada', 'Seguimiento consistente', 'Más tratos cerrados'],
    closing1: 'Tu negocio deja de depender de la disponibilidad.',
    closing2: 'Pasa a operar con inteligencia.',
  },
  whyBotfy: {
    title: 'Hecho para Escalar. Diseñado para la Simplicidad.',
    items: ['100% self-service', 'Precios transparentes', 'Sin costes de configuración', 'Hecho para negocios modernos', 'Diseñado en Europa, empezando en Irlanda'],
    tagline: 'Estamos construyendo la capa de infraestructura en IA para empresas ambiciosas.',
    tagline2: 'Empieza local. Escala global.',
  },
  whyUs: {
    title: '¿Por qué ahora, por qué nosotros?',
    subtitle: 'Simple, directo y medible — como merecen las empresas.',
    metrics: [
      { value: '24/7', label: 'Disponibilidad' },
      { value: '0', label: 'Código necesario' },
      { value: 'UE', label: 'Datos y GDPR' },
    ],
    bullets: ['Personalización a escala — conversaciones relevantes, sin importar el volumen', 'Cliente primero — la mayoría prefiere mensajes; respondemos a eso', 'Tu voz, tu manera — agentes en cualquier idioma y tono', 'Privacidad y confianza — datos en la UE, GDPR por diseño', 'Sin código — configura en minutos con herramientas intuitivas', 'Hecho para ingresos — cada flujo pensado para convertir y calificar'],
  },
  socialProof: {
    title: 'Resultados que hablan por sí solos',
    metrics: [
      { value: '24/7', label: 'Disponibilidad' },
      { value: '< 1 min', label: 'Tiempo medio de respuesta' },
      { value: 'UE', label: 'Residencia de datos' },
    ],
  },
  security: {
    titleLine1: 'Construido para',
    titleHighlight: 'Escala Global.',
    subtitle: 'Entendemos los estrictos requisitos de seguridad del mercado global. Nuestra infraestructura está diseñada desde cero para proteger tus datos.',
    listItems: ['Base enterprise-ready', 'Aislamiento estricto de tenants', 'Opciones de residencia de datos', 'Infraestructura alojada globalmente'],
    card: { region: 'Región Frankfurt', cluster: 'Cluster Primario', active: 'Activo', gdprLabel: 'Estado GDPR', gdprValue: 'Compatible', encLabel: 'Cifrado de Datos', encValue: 'AES-256', uptimeLabel: 'Uptime', uptimeValue: '99.99%' },
  },
  pricing: {
    titleStart: 'Precios Simples.',
    titleHighlight: 'Sin Sorpresas.',
    subtitle: 'Empieza gratis. Actualiza cuando crezcas.',
    mostPopular: 'Más Popular',
    plans: [
      {
        name: 'Free',
        desc: 'Pruébalo',
        price: '€0',
        period: '/mes',
        features: ['1 Agente IA', '500 Mensajes/mes', 'Solo WhatsApp', 'Soporte comunidad'],
        cta: 'Empezar Gratis',
      },
      {
        name: 'Starter',
        desc: 'Para equipos pequeños',
        price: '€49',
        period: '/mes',
        features: ['1 Agente IA', '2.000 Mensajes/mes', 'WhatsApp + Web', 'Soporte por email', 'Analytics básico'],
        cta: 'Comenzar',
      },
      {
        name: 'Growth',
        desc: 'Para negocios en crecimiento',
        price: '€149',
        period: '/mes',
        features: ['3 Agentes IA', '10.000 Mensajes/mes', 'Todos los canales', 'Soporte prioritario', 'Integración CRM', 'Analytics avanzado'],
        cta: 'Comenzar',
      },
      {
        name: 'Scale',
        desc: 'Para alto volumen',
        price: '€499',
        period: '/mes',
        features: ['10 Agentes IA', '50.000 Mensajes/mes', 'Todos los canales', 'Soporte dedicado', 'Integraciones personalizadas', 'White-label'],
        cta: 'Comenzar',
      },
      {
        name: 'Enterprise',
        desc: 'Infraestructura a medida',
        price: 'A consultar',
        period: '',
        features: ['Agentes ilimitados', 'Volumen personalizado', 'Integraciones personalizadas', 'SLA dedicado', 'Gerente de cuenta', 'Auditorías de seguridad'],
        cta: 'Contactar Ventas',
      },
    ],
  },
  vision: {
    title: 'El Futuro del Negocio Es Autónomo.',
    line1: 'Las empresas que ganarán mañana están construyendo operaciones con IA hoy.',
    line2: 'Botfy fue creada por operadores que entienden crecimiento, automatización y ejecución.',
    line3: 'No estamos construyendo otra herramienta.',
    line4: 'Estamos construyendo la fuerza de trabajo del futuro.',
  },
  cta: {
    title: '¿Listo para Vender en Piloto Automático?',
    subtitle: 'Despliega tu fuerza de trabajo en IA hoy.',
    button: 'Prueba Gratis',
  },
  kommo: {
    badge: 'Agente IA para WhatsApp y Mensajería',
    heroLine1: 'Vende más.',
    heroLine2: 'Atiende mejor.',
    heroLine3: 'En piloto automático.',
    heroHeadline: 'Todo lo que necesitas para vender — en una plataforma de IA',
    heroSubline: 'Crea agentes de IA entrenados en tu negocio que venden 24/7 por WhatsApp, Instagram y más.',
    tryFreeCta: 'Empezar gratis — 14 días',
    heroBookDemo: 'Ver demostración',
    heroStats: [
      { value: '50+', label: 'países' },
      { value: '1.000+', label: 'empresas' },
      { value: '< 1 min', label: 'respuesta media' },
    ],
    lovedBy: 'Confiado por equipos que crecen',
    moreConversations: {
      title: 'Más conversaciones, más ingresos',
      desc: 'Conecta con clientes en los canales que prefieren. Tus agentes de IA cubren WhatsApp, chat web y más — cada mensaje se convierte en lead cualificado o venta.',
      cta: 'Saber más',
    },
    completeView: {
      title: 'Historial completo de cada conversación',
      desc: 'Botfy une cada touchpoint en un solo lugar: todos los canales, notas y seguimientos. Un perfil por cliente, un pipeline para tu equipo.',
      cta: 'Saber más',
    },
    aiToolkit: {
      title: 'Kit de herramientas de IA integrado',
      desc: 'Crea agentes de IA que responden FAQs, recomiendan productos y agendan citas — mientras duermes. Sin código. Despliega en minutos.',
      cta: 'Saber más',
    },
    uniqueWayTitle: 'Una forma única de hacer negocios',
    uniqueCards: [
      { title: 'Configuración sin código', desc: 'Ve dónde está cada lead en el recorrido. Configura flujos y bots sin una línea de código.', cta: 'Saber más' },
      { title: 'Inbox omnicanal', desc: 'WhatsApp, web y más en una bandeja. Tu equipo y la IA en el mismo lugar.', cta: 'Saber más' },
      { title: 'EU-first y seguro', desc: 'Datos en la UE, GDPR por diseño. Hecho para empresas que valoran el cumplimiento.', cta: 'Saber más' },
    ],
    screenLabels: {
      dashboard: 'Dashboard — métricas de mensajes, actividad y acciones rápidas de un vistazo.',
      crm: 'CRM — historial completo de leads e inbox unificado de todos los canales.',
      aiAgents: 'AI Agents — crea y gestiona agentes especializados por nicho.',
      training: 'Entrenamiento — sube documentos y bases de conocimiento para entrenar la IA.',
      team: 'Equipo — agrupa agentes en departamentos (ej. Ventas, Soporte).',
    },
    testimonialsTitle: 'Lo que dicen sobre Botfy',
    testimonials: [
      { quote: 'Pasamos de perder leads a cerrarlos el mismo día. Botfy cambió cómo gestionamos el inbound.', name: 'Sarah M.', role: 'Líder de Ventas' },
      { quote: 'Simple, directo, medible. Por fin una plataforma de IA que funciona de verdad.', name: 'James K.', role: 'Fundador' },
      { quote: 'El tiempo de respuesta pasó de horas a menos de un minuto. Los ingresos subieron.', name: 'Elena R.', role: 'Operaciones' },
    ],
    ctaBadge: '14 días gratis · Sin tarjeta de crédito',
    ctaHeadline: 'Prueba Botfy gratis 14 días',
    ctaSub: 'Empieza a construir tu pipeline de ventas con IA hoy. Sin tarjeta de crédito.',
    tryFree: 'Empezar gratis',
    bookDemo: 'Reservar demo',
  },
  logoSection: {
    title: 'Confiado por equipos que crecen',
  },
  solutionsTabs: {
    title: 'Una solución para cada etapa del recorrido',
    subtitle: 'Desde la generación de leads hasta la retención, Botfy lo automatiza todo.',
    tabs: [
      {
        label: 'Adquisición',
        title: 'Captura más leads, automáticamente',
        desc: 'Convierte tráfico en conversaciones y conversaciones en leads cualificados — sin esfuerzo manual.',
        bullets: ['Anuncios Click-to-WhatsApp que convierten', 'Calificación automática de leads 24/7', 'Respuesta instantánea a cada consulta'],
        screen: 'dashboard',
      },
      {
        label: 'Conversión',
        title: 'Cierra más ventas mientras duermes',
        desc: 'Tu IA hace seguimiento, envía propuestas y cierra negocios — incluso fuera del horario laboral.',
        bullets: ['Recuperación de carritos abandonados por WhatsApp', 'Propuestas y seguimientos automáticos', 'IA que cierra negocios a cualquier hora'],
        screen: 'crm',
      },
      {
        label: 'Retención',
        title: 'Mantén a los clientes volviendo',
        desc: 'Posventa automatizado, upsell inteligente y soporte 24/7 — sin equipo de soporte.',
        bullets: ['Automatización de posventa y NPS', 'Flujos de recompra y upsell inteligente', 'Soporte 24/7 sin tiempo de espera'],
        screen: 'ai-agents',
      },
    ],
  },
  howItWorks: {
    title: '¿Cómo funciona Botfy?',
    subtitle: 'Tú lo entrenas. La IA trabaja.',
    inputLabel: 'Tú proporcionas',
    outputLabel: 'La IA entrega',
    inputs: ['Catálogo de productos', 'FAQs y políticas', 'Voz e identidad de marca', 'Datos de clientes'],
    outputs: ['Leads cualificados', 'Ventas cerradas', 'Soporte resuelto', 'Citas agendadas'],
    steps: [
      { title: 'Conecta WhatsApp', desc: '2 minutos para integrar' },
      { title: 'Entrena la IA', desc: 'Sin código, sin agencia' },
      { title: 'Activa y vende', desc: '24/7 en piloto automático' },
    ],
    noCode: 'Sin desarrolladores. Sin configuración técnica. Solo resultados.',
  },
  channels: {
    title: 'Presente en todos los canales que usan tus clientes',
    subtitle: 'Todo gestionado desde una única bandeja de entrada.',
  },
  whyGrid: {
    title: '¿Por qué elegir Botfy?',
    subtitle: 'Construido para empresas que necesitan resultados, no complejidad.',
    cards: [
      { title: 'Sin código', desc: 'Configura en minutos con nuestra interfaz intuitiva. Sin desarrolladores.' },
      { title: '24/7 disponible', desc: 'Nunca pierdas un lead, ni fuera del horario laboral.' },
      { title: 'Tu voz y tono', desc: 'La IA habla exactamente como tu marca, en cualquier idioma.' },
      { title: 'Integra con CRM', desc: 'Conecta con HubSpot, Salesforce y tus herramientas actuales.' },
      { title: 'GDPR compliant', desc: 'Datos protegidos y almacenados en la UE. Cumplimiento por diseño.' },
      { title: 'Escala automática', desc: 'Crece con tu negocio sin necesidad de contratar más personal.' },
      { title: 'Personalización real', desc: 'Cada conversación adaptada al cliente individualmente.' },
      { title: 'Soporte dedicado', desc: 'Nuestro equipo siempre disponible para ayudarte a tener éxito.' },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: '¿Aún tienes dudas? Nuestro equipo está listo para ayudar.',
    items: [
      { q: '¿Cómo funciona el período de prueba?', a: '14 días de acceso completo, sin tarjeta de crédito requerida. Cancela cuando quieras, sin complicaciones.' },
      { q: '¿Funciona con WhatsApp Business API?', a: 'Sí. Nos integramos con la API oficial de WhatsApp Business. Mantienes el control total de tu cuenta y número.' },
      { q: '¿Necesito saber programar?', a: 'Para nada. Botfy es 100% self-service. Configura flujos, entrena la IA y actívala en minutos — cero líneas de código.' },
      { q: '¿Cuánto tiempo tarda la configuración?', a: 'La mayoría de los clientes están en vivo en menos de 30 minutos. Conecta el canal, sube tu contenido y activa.' },
      { q: '¿Puedo tener varios agentes para distintos equipos?', a: 'Sí. Puedes crear múltiples agentes, cada uno entrenado para un rol específico — ventas, soporte, agendamiento — todos operando en paralelo.' },
      { q: '¿Qué pasa cuando la IA no sabe la respuesta?', a: 'La IA deriva la conversación a un agente humano o registra la consulta para seguimiento. Tú defines exactamente cuándo y cómo ocurre el traspaso.' },
      { q: '¿Puedo conectar mi CRM u otras herramientas?', a: 'Sí. Botfy se integra con HubSpot, Salesforce, RD Station y muchas otras plataformas a través de integraciones nativas y nuestra API abierta.' },
      { q: '¿Hay un límite de conversaciones mensuales?', a: 'Cada plan incluye una cuota mensual de conversaciones. Puedes actualizar tu plan en cualquier momento. Sin cargos sorpresa por excedente.' },
      { q: '¿En qué idiomas atiende la IA?', a: 'La IA soporta más de 50 idiomas, incluyendo español, portugués, inglés, francés y alemán — detectados automáticamente por conversación.' },
      { q: '¿Puedo probar el agente antes de publicarlo?', a: 'Por supuesto. Todos los planes incluyen un entorno de pruebas donde puedes simular conversaciones y validar el comportamiento antes de activarlo.' },
      { q: '¿Es compatible con GDPR?', a: 'Sí. Todos los datos se almacenan en servidores de la UE y se procesan en pleno cumplimiento con el GDPR.' },
      { q: '¿Puedo personalizar la personalidad del agente?', a: 'Sí. Defines la personalidad, tono de voz y estilo de comunicación. La IA habla exactamente como tu marca.' },
      { q: '¿Qué canales son compatibles?', a: 'WhatsApp, Instagram, Messenger, Web Chat y Email — todos gestionados desde una única bandeja de entrada.' },
      { q: '¿Cómo se entrena la IA?', a: 'Sube tus documentos (PDF, Excel, URLs), políticas, catálogos y FAQs. La IA aprende de tu contenido automáticamente.' },
    ],
  },
  footer: {
    desc: 'Agentes de IA que venden y atienden — en piloto automático. Hecho para empresas que quieren crecer sin límites.',
    product: 'Producto',
    companyTitle: 'Empresa',
    features: 'Agentes IA',
    pricing: 'Precios',
    security: 'Seguridad',
    aboutUs: 'Sobre Nosotros',
    contact: 'Contacto',
    linkedin: 'LinkedIn',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    copyright: '© 2026 Botfy. Todos los derechos reservados.',
    resources: 'Recursos',
    docs: 'Documentación',
    api: 'Referencia de API',
    status: 'Estado del Sistema',
    gdprLabel: 'GDPR Compliant',
    metaPartner: 'Meta Business Partner',
    lgpdLabel: 'LGPD Listo',
  },
  pages: {
    about: {
      title: 'Sobre Nosotros',
      tagline: 'Creamos la IA que vende y atiende — para que tu equipo se enfoque en lo que importa.',
      missionTitle: 'Nuestra Misión',
      missionContent: 'Democratizar el acceso a agentes de IA inteligentes mediante una plataforma 100% self-service, sencilla de configurar, potente en ejecución y escalable para cualquier negocio.',
      problemTitle: 'El Problema que Resolvemos',
      problemIntro: 'Cada día las empresas lidian con:',
      problemList: ['Preguntas repetitivas que consumen tiempo del equipo', 'Mensajes fuera de horario sin nadie que responda', 'Leads que se enfrían esperando una respuesta', 'Conversaciones que se pierden y nunca vuelven'],
      problemClosing: 'Cada respuesta retrasada puede ser una venta perdida. Botfy automatiza estas interacciones con inteligencia, manteniendo a las empresas respondiendo 24/7.',
      differentTitle: 'Qué Nos Diferencia',
      differentList: ['100% self-service — sin agencia, sin desarrollador', 'Entrenada en tu negocio, no un chatbot genérico', 'En vivo en menos de 30 minutos', 'Infraestructura EU-first — GDPR compliant', 'Precios transparentes, sin cargos ocultos'],
      visionTitle: 'Nuestra Visión',
      visionList: ['Construir la capa de IA que potencia la comunicación empresarial', 'Accesible para equipos pequeños, escalable para grandes empresas', 'Hacer de las respuestas instantáneas e inteligentes el nuevo estándar'],
      ctaTitle: '¿Listo para ver Botfy en acción?',
      ctaButton: 'Empezar gratis — 14 días',
      ctaSecondary: 'Habla con nosotros',
    },
    contact: {
      title: 'Contáctanos',
      lead: 'Cuéntanos sobre tu negocio y te mostraremos exactamente cómo Botfy puede ayudarte.',
      email: 'contact@botfy.ai',
      emailLabel: 'Correo',
      namePlaceholder: 'Tu nombre',
      companyPlaceholder: 'Nombre de la empresa',
      whatsappPlaceholder: 'Número de WhatsApp',
      messagePlaceholder: '¿Cómo podemos ayudarte?',
      send: 'Enviar mensaje',
      bookDemoTitle: '¿Prefieres una demo en vivo?',
      bookDemoDesc: 'Agenda una llamada de 30 minutos con nuestro equipo. Te mostraremos la plataforma y responderemos todas tus preguntas.',
      bookDemoBtn: 'Agendar una demo',
      orEmail: 'O envíanos un correo directamente a',
    },
  },
}

export const translations: Record<Language, Translations> = { en, pt, es }
