export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  nav: {
    howItWorks: string
    solution: string
    pricing: string
    aboutUs: string
    login: string
    startFreeTrial: string
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
  }
  pages: {
    about: {
      title: string
      intro: string[]
      missionTitle: string
      missionContent: string
      problemTitle: string
      problemIntro: string
      problemList: string[]
      problemClosing: string
      positioningTitle: string
      positioningIntro: string
      positioningList: string[]
      positioningClosing: string
      strategyTitle: string
      strategyIntro: string
      strategyPlanRef: string
      strategyPrincipleIntro: string
      strategyList: string[]
      strategyClosing: string
      differentTitle: string
      differentList: string[]
      differentClosing: string
      visionTitle: string
      visionList: string[]
      visionClosing: string
      founderTitle: string
      founderContent: string[]
      founderClosing: string
    }
    contact: { title: string; lead: string; email: string; emailLabel: string }
  }
}

const en: Translations = {
  nav: {
    howItWorks: 'How it works',
    solution: 'Solution',
    pricing: 'Pricing',
    aboutUs: 'About Us',
    login: 'Log in',
    startFreeTrial: 'Start Free Trial',
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
    items: [
      'Leads wait too long.',
      "Customers don't get follow-ups.",
      'Sales conversations stop halfway.',
      'Hiring more people increases cost.',
      'Managing teams increases complexity.',
      "Manual replies don't scale.",
    ],
    closing: 'Growth requires automation.',
  },
  solution: {
    title: 'Meet Your 24/7 AI Workforce.',
    intro: 'Botfy allows you to deploy intelligent AI agents that:',
    items: [
      'Respond instantly to every message',
      'Qualify leads automatically',
      'Book appointments',
      'Follow up with prospects',
      'Guide customers through your sales process',
      'Integrate with your existing tools',
    ],
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
    badges: [
      'Multi-tenant secure architecture',
      'GDPR-ready by default',
      'Usage tracking & analytics',
      'Namespace isolation per agent',
    ],
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
    items: [
      'Faster response time',
      'Higher conversion rates',
      'Lower operational costs',
      'Automated lead qualification',
      'Consistent follow-up',
      'More closed deals',
    ],
    closing1: 'Your business stops depending on availability.',
    closing2: 'It starts operating intelligently.',
  },
  whyBotfy: {
    title: 'Built for Scale. Designed for Simplicity.',
    items: [
      '100% self-service',
      'Transparent pricing',
      'No setup fees',
      'Built for modern businesses',
      'Designed in Europe, starting in Ireland',
    ],
    tagline: 'We are building the AI infrastructure layer for ambitious companies.',
    tagline2: 'Start local. Scale global.',
  },
  security: {
    titleLine1: 'Built for',
    titleHighlight: 'Global Scale.',
    subtitle: 'We understand the strict security requirements of the global market. Our infrastructure is designed from the ground up to protect your data.',
    listItems: [
      'Enterprise-ready foundation',
      'Strict tenant isolation',
      'Data residency options',
      'Global-hosted infrastructure',
    ],
    card: {
      region: 'Frankfurt Region',
      cluster: 'Primary Cluster',
      active: 'Active',
      gdprLabel: 'GDPR Status',
      gdprValue: 'Compliant',
      encLabel: 'Data Encryption',
      encValue: 'AES-256',
      uptimeLabel: 'Uptime',
      uptimeValue: '99.99%',
    },
  },
  pricing: {
    titleStart: 'Simple Pricing.',
    titleHighlight: 'No Surprises.',
    subtitle: 'Start free. Upgrade when you grow.',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'Free',
        desc: 'Experience the power',
        price: '€0',
        period: '',
        features: ['Try AI agents', 'Limited messages', 'Web widget', 'Community support'],
        cta: 'Get Started',
      },
      {
        name: 'Starter',
        desc: 'For growing teams',
        price: '€49',
        period: '/mo',
        features: ['1 AI Agent', '500 Messages/mo', 'Web Widget', 'Community Support'],
        cta: 'Get Started',
      },
      {
        name: 'Growth',
        desc: 'For scaling businesses',
        price: '€149',
        period: '/mo',
        features: ['5 AI Agents', '5,000 Messages/mo', 'WhatsApp Integration', 'Priority Support'],
        cta: 'Get Started',
      },
      {
        name: 'Scale',
        desc: 'For high-volume operations',
        price: '€499',
        period: '/mo',
        features: ['Unlimited Agents', '50,000 Messages/mo', 'Custom Integrations', 'Dedicated Account Manager'],
        cta: 'Get Started',
      },
      {
        name: 'Enterprise',
        desc: 'Custom AI infrastructure',
        price: 'Custom',
        period: '',
        features: ['Custom Volume', 'On-Premise Options', 'Custom SLA', 'Security Audits'],
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
  footer: {
    desc: 'Secure AI Agents Infrastructure for European Companies. Build, train and deploy with confidence.',
    product: 'Product',
    companyTitle: 'Company',
    features: 'Features',
    pricing: 'Pricing',
    security: 'Security',
    aboutUs: 'About Us',
    contact: 'Contact',
    linkedin: 'LinkedIn',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2026 Botfy. All rights reserved.',
  },
  pages: {
    about: {
      title: 'About Us',
      intro: [
        'Botfy was created with a simple but ambitious mission: to transform how businesses communicate with their customers.',
        'We live in a world where messages never stop. WhatsApp, social media, website chats, forms — everything happens in real time. Small and medium-sized businesses are overwhelmed, losing sales, time, and opportunities.',
        'Botfy exists to fix that.',
      ],
      missionTitle: 'Our Mission',
      missionContent: 'To democratize access to intelligent AI agents through a 100% self-service platform that is simple to set up, powerful in execution, and scalable for any business. We are starting in Ireland, with a clear vision to expand across Europe and eventually worldwide.',
      problemTitle: 'The Problem We Solve',
      problemIntro: 'Every day, businesses deal with:',
      problemList: [
        'Repetitive questions',
        'After-hours messages',
        'Leads that go unanswered',
        'Conversations that fall through the cracks',
      ],
      problemClosing: 'Every delayed response can mean a lost sale. Botfy automates these interactions with intelligence, keeping businesses responsive 24/7 — without technical complexity and without requiring developers.',
      positioningTitle: 'Our Positioning',
      positioningIntro: 'We are a scalable SaaS company built on Product-Led Growth principles. Our focus is on:',
      positioningList: ['Simplicity', 'Fast activation', 'Clear value', 'Sustainable growth'],
      positioningClosing: 'Our freemium model allows businesses to experience real value before upgrading. We believe the best marketing strategy is a product that works.',
      strategyTitle: 'Our Strategy',
      strategyIntro: 'According to our strategic action plan',
      strategyPlanRef: 'Plano-de-Acao-Para-ser-Seguido',
      strategyPrincipleIntro: 'Botfy is built on three core principles:',
      strategyList: [
        'Horizontal product (serves any business)',
        'Vertical communication (focus on one niche at a time)',
        'Structured, measurable growth',
      ],
      strategyClosing: 'We are initially focusing on Irish businesses that handle high volumes of customer messages, validating and refining the product before expanding into new industries.',
      differentTitle: 'What Makes Us Different',
      differentList: [
        '100% self-service platform',
        'No setup fees',
        'Fast onboarding',
        'Results-focused approach',
        'Scalable from small businesses to growing operations',
      ],
      differentClosing: "We don't just automate conversations — we create predictability.",
      visionTitle: 'Our Vision',
      visionList: [
        'Year 1: Establish strong presence in Ireland',
        'Year 2: Expand across Europe',
        'Year 3: Become a global reference in AI-powered customer agents',
      ],
      visionClosing: "We believe the future of customer support is not about replacing people — it's about empowering them.",
      founderTitle: "Founder's Vision",
      founderContent: [
        'Botfy is driven by a clear belief: powerful technology should be accessible, practical, and built for real businesses.',
        'More than a tool, Botfy represents a shift toward smarter, faster, and more efficient customer communication.',
      ],
      founderClosing: 'If you believe fast response means real growth, you already understand Botfy.',
    },
    contact: {
      title: 'Contact',
      lead: 'Get in touch with our team.',
      email: 'contact@botfy.ai',
      emailLabel: 'Email',
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
    startFreeTrial: 'Teste Grátis',
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
    items: [
      'Leads esperam demais.',
      'Clientes não recebem follow-up.',
      'Conversas de vendas param no meio.',
      'Contratar mais pessoas aumenta custo.',
      'Gerir equipes aumenta complexidade.',
      'Respostas manuais não escalam.',
    ],
    closing: 'Crescimento exige automação.',
  },
  solution: {
    title: 'Conheça Sua Força de Trabalho em IA 24/7.',
    intro: 'A Botfy permite que você implante agentes de IA que:',
    items: [
      'Respondem instantaneamente a cada mensagem',
      'Qualificam leads automaticamente',
      'Agendam reuniões',
      'Dão follow-up em prospects',
      'Guiam clientes pelo seu processo de vendas',
      'Integram com suas ferramentas atuais',
    ],
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
    badges: [
      'Arquitetura multi-tenant segura',
      'GDPR pronto por padrão',
      'Rastreamento de uso e análises',
      'Isolamento de namespace por agente',
    ],
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
    items: [
      'Resposta mais rápida',
      'Maior taxa de conversão',
      'Menor custo operacional',
      'Qualificação de leads automatizada',
      'Follow-up consistente',
      'Mais negócios fechados',
    ],
    closing1: 'Seu negócio deixa de depender de disponibilidade.',
    closing2: 'Passa a operar com inteligência.',
  },
  whyBotfy: {
    title: 'Feito para Escalar. Pensado para Simplicidade.',
    items: [
      '100% self-service',
      'Preços transparentes',
      'Sem taxas de configuração',
      'Feito para negócios modernos',
      'Desenhado na Europa, começando na Irlanda',
    ],
    tagline: 'Estamos construindo a camada de infraestrutura em IA para empresas ambiciosas.',
    tagline2: 'Comece local. Escale global.',
  },
  security: {
    titleLine1: 'Construído para',
    titleHighlight: 'Escala Global.',
    subtitle: 'Entendemos os rigorosos requisitos de segurança do mercado global. Nossa infraestrutura é projetada desde o início para proteger seus dados.',
    listItems: [
      'Base enterprise-ready',
      'Isolamento rigoroso de tenants',
      'Opções de residência de dados',
      'Infraestrutura hospedada globalmente',
    ],
    card: {
      region: 'Região Frankfurt',
      cluster: 'Cluster Primário',
      active: 'Ativo',
      gdprLabel: 'Status GDPR',
      gdprValue: 'Compatível',
      encLabel: 'Criptografia',
      encValue: 'AES-256',
      uptimeLabel: 'Uptime',
      uptimeValue: '99.99%',
    },
  },
  pricing: {
    titleStart: 'Preços Simples.',
    titleHighlight: 'Sem Surpresas.',
    subtitle: 'Comece grátis. Atualize quando crescer.',
    mostPopular: 'Mais Popular',
    plans: [
      { name: 'Free', desc: 'Experimente o poder', price: '€0', period: '', features: ['Experimente agentes IA', 'Mensagens limitadas', 'Widget Web', 'Suporte comunidade'], cta: 'Começar' },
      { name: 'Starter', desc: 'Para equipes em crescimento', price: '€49', period: '/mês', features: ['1 Agente IA', '500 Mensagens/mês', 'Widget Web', 'Suporte Comunidade'], cta: 'Começar' },
      { name: 'Growth', desc: 'Para negócios em escala', price: '€149', period: '/mês', features: ['5 Agentes IA', '5.000 Mensagens/mês', 'Integração WhatsApp', 'Suporte Prioritário'], cta: 'Começar' },
      { name: 'Scale', desc: 'Para operações de alto volume', price: '€499', period: '/mês', features: ['Agentes Ilimitados', '50.000 Mensagens/mês', 'Integrações Customizadas', 'Gerente de Conta Dedicado'], cta: 'Começar' },
      { name: 'Enterprise', desc: 'Infraestrutura IA customizada', price: 'Personalizado', period: '', features: ['Volume Customizado', 'Opções On-Premise', 'SLA Customizado', 'Auditorias de Segurança'], cta: 'Falar com Vendas' },
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
  footer: {
    desc: 'Infraestrutura de Agentes IA Seguros para Empresas Europeias. Construa, treine e implante com confiança.',
    product: 'Produto',
    companyTitle: 'Empresa',
    features: 'Recursos',
    pricing: 'Preços',
    security: 'Segurança',
    aboutUs: 'Sobre Nós',
    contact: 'Contato',
    linkedin: 'LinkedIn',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    copyright: '© 2026 Botfy. Todos os direitos reservados.',
  },
  pages: {
    about: {
      title: 'Sobre Nós',
      intro: [
        'A Botfy foi criada com uma missão simples mas ambiciosa: transformar a forma como as empresas se comunicam com os clientes.',
        'Vivemos num mundo em que as mensagens nunca param. WhatsApp, redes sociais, chats no site, formulários — tudo em tempo real. Pequenas e médias empresas ficam sobrecarregadas, perdendo vendas, tempo e oportunidades.',
        'A Botfy existe para resolver isso.',
      ],
      missionTitle: 'Nossa Missão',
      missionContent: 'Democratizar o acesso a agentes de IA inteligentes através de uma plataforma 100% self-service, simples de configurar, poderosa na execução e escalável para qualquer negócio. Começamos na Irlanda, com visão clara de expansão pela Europa e depois pelo mundo.',
      problemTitle: 'O Problema que Resolvemos',
      problemIntro: 'Todos os dias as empresas enfrentam:',
      problemList: [
        'Perguntas repetitivas',
        'Mensagens fora do horário',
        'Leads sem resposta',
        'Conversas que se perdem',
      ],
      problemClosing: 'Cada resposta atrasada pode ser uma venda perdida. A Botfy automatiza essas interações com inteligência, mantendo as empresas responsivas 24/7 — sem complexidade técnica e sem precisar de desenvolvedores.',
      positioningTitle: 'Nosso Posicionamento',
      positioningIntro: 'Somos uma empresa SaaS escalável baseada em Product-Led Growth. Nosso foco está em:',
      positioningList: ['Simplicidade', 'Ativação rápida', 'Valor claro', 'Crescimento sustentável'],
      positioningClosing: 'Nosso modelo freemium permite que as empresas experimentem valor real antes de fazer upgrade. Acreditamos que a melhor estratégia de marketing é um produto que funciona.',
      strategyTitle: 'Nossa Estratégia',
      strategyIntro: 'De acordo com nosso plano de ação estratégico',
      strategyPlanRef: 'Plano-de-Acao-Para-ser-Seguido',
      strategyPrincipleIntro: 'A Botfy é construída sobre três princípios:',
      strategyList: [
        'Produto horizontal (atende qualquer negócio)',
        'Comunicação vertical (foco em um nicho por vez)',
        'Crescimento estruturado e mensurável',
      ],
      strategyClosing: 'Estamos focando inicialmente em negócios irlandeses que lidam com alto volume de mensagens de clientes, validando e refinando o produto antes de expandir para novos setores.',
      differentTitle: 'O que Nos Diferencia',
      differentList: [
        'Plataforma 100% self-service',
        'Sem taxas de configuração',
        'Onboarding rápido',
        'Abordagem focada em resultados',
        'Escalável de pequenos negócios a operações em crescimento',
      ],
      differentClosing: 'Não apenas automatizamos conversas — criamos previsibilidade.',
      visionTitle: 'Nossa Visão',
      visionList: [
        'Ano 1: Estabelecer presença forte na Irlanda',
        'Ano 2: Expandir pela Europa',
        'Ano 3: Tornar-nos referência global em agentes de atendimento com IA',
      ],
      visionClosing: 'Acreditamos que o futuro do atendimento ao cliente não é substituir pessoas — é capacitá-las.',
      founderTitle: 'Visão do Fundador',
      founderContent: [
        'A Botfy é guiada por uma crença clara: tecnologia poderosa deve ser acessível, prática e feita para negócios reais.',
        'Mais do que uma ferramenta, a Botfy representa uma mudança em direção a uma comunicação com o cliente mais inteligente, rápida e eficiente.',
      ],
      founderClosing: 'Se você acredita que resposta rápida significa crescimento real, você já entende a Botfy.',
    },
    contact: {
      title: 'Contato',
      lead: 'Fale com nossa equipe.',
      email: 'contact@botfy.ai',
      emailLabel: 'E-mail',
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
    startFreeTrial: 'Prueba Gratis',
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
    items: [
      'Los leads esperan demasiado.',
      'Los clientes no reciben seguimiento.',
      'Las conversaciones de ventas se cortan.',
      'Contratar más personas aumenta costes.',
      'Gestionar equipos aumenta la complejidad.',
      'Las respuestas manuales no escalan.',
    ],
    closing: 'El crecimiento requiere automatización.',
  },
  solution: {
    title: 'Conoce Tu Fuerza de Trabajo en IA 24/7.',
    intro: 'Botfy te permite desplegar agentes de IA que:',
    items: [
      'Responden al instante a cada mensaje',
      'Califican leads automáticamente',
      'Reservan citas',
      'Dan seguimiento a prospectos',
      'Guían a los clientes por tu proceso de ventas',
      'Se integran con tus herramientas actuales',
    ],
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
    badges: [
      'Arquitectura multi-tenant segura',
      'GDPR listo por defecto',
      'Seguimiento de uso y análisis',
      'Aislamiento de namespace por agente',
    ],
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
    items: [
      'Tiempo de respuesta más rápido',
      'Mayor tasa de conversión',
      'Menor coste operativo',
      'Calificación de leads automatizada',
      'Seguimiento consistente',
      'Más tratos cerrados',
    ],
    closing1: 'Tu negocio deja de depender de la disponibilidad.',
    closing2: 'Pasa a operar con inteligencia.',
  },
  whyBotfy: {
    title: 'Hecho para Escalar. Diseñado para la Simplicidad.',
    items: [
      '100% self-service',
      'Precios transparentes',
      'Sin costes de configuración',
      'Hecho para negocios modernos',
      'Diseñado en Europa, empezando en Irlanda',
    ],
    tagline: 'Estamos construyendo la capa de infraestructura en IA para empresas ambiciosas.',
    tagline2: 'Empieza local. Escala global.',
  },
  security: {
    titleLine1: 'Construido para',
    titleHighlight: 'Escala Global.',
    subtitle: 'Entendemos los estrictos requisitos de seguridad del mercado global. Nuestra infraestructura está diseñada desde cero para proteger tus datos.',
    listItems: [
      'Base enterprise-ready',
      'Aislamiento estricto de tenants',
      'Opciones de residencia de datos',
      'Infraestructura alojada globalmente',
    ],
    card: {
      region: 'Región Frankfurt',
      cluster: 'Cluster Primario',
      active: 'Activo',
      gdprLabel: 'Estado GDPR',
      gdprValue: 'Compatible',
      encLabel: 'Cifrado de Datos',
      encValue: 'AES-256',
      uptimeLabel: 'Uptime',
      uptimeValue: '99.99%',
    },
  },
  pricing: {
    titleStart: 'Precios Simples.',
    titleHighlight: 'Sin Sorpresas.',
    subtitle: 'Empieza gratis. Actualiza cuando crezcas.',
    mostPopular: 'Más Popular',
    plans: [
      { name: 'Free', desc: 'Experimenta el poder', price: '€0', period: '', features: ['Prueba agentes IA', 'Mensajes limitados', 'Widget Web', 'Soporte comunidad'], cta: 'Comenzar' },
      { name: 'Starter', desc: 'Para equipos en crecimiento', price: '€49', period: '/mes', features: ['1 Agente IA', '500 Mensajes/mes', 'Widget Web', 'Soporte Comunidad'], cta: 'Comenzar' },
      { name: 'Growth', desc: 'Para negocios en escala', price: '€149', period: '/mes', features: ['5 Agentes IA', '5.000 Mensajes/mes', 'Integración WhatsApp', 'Soporte Prioritario'], cta: 'Comenzar' },
      { name: 'Scale', desc: 'Para operaciones de alto volumen', price: '€499', period: '/mes', features: ['Agentes Ilimitados', '50.000 Mensajes/mes', 'Integraciones Personalizadas', 'Gerente de Cuenta Dedicado'], cta: 'Comenzar' },
      { name: 'Enterprise', desc: 'Infraestructura IA a medida', price: 'Personalizado', period: '', features: ['Volumen Personalizado', 'Opciones On-Premise', 'SLA Personalizado', 'Auditorías de Seguridad'], cta: 'Contactar Ventas' },
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
  footer: {
    desc: 'Infraestructura de Agentes IA Seguros para Empresas Europeas. Construye, entrena y despliega con confianza.',
    product: 'Producto',
    companyTitle: 'Empresa',
    features: 'Características',
    pricing: 'Precios',
    security: 'Seguridad',
    aboutUs: 'Sobre Nosotros',
    contact: 'Contacto',
    linkedin: 'LinkedIn',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    copyright: '© 2026 Botfy. Todos los derechos reservados.',
  },
  pages: {
    about: {
      title: 'Sobre Nosotros',
      intro: [
        'Botfy nació con una misión simple pero ambiciosa: transformar cómo las empresas se comunican con sus clientes.',
        'Vivimos en un mundo donde los mensajes nunca paran. WhatsApp, redes sociales, chats web, formularios — todo en tiempo real. Las pymes se ven desbordadas, perdiendo ventas, tiempo y oportunidades.',
        'Botfy existe para solucionarlo.',
      ],
      missionTitle: 'Nuestra Misión',
      missionContent: 'Democratizar el acceso a agentes de IA inteligentes mediante una plataforma 100% self-service, sencilla de configurar, potente en ejecución y escalable para cualquier negocio. Empezamos en Irlanda, con la visión clara de expandirnos por Europa y luego a nivel mundial.',
      problemTitle: 'El Problema que Resolvemos',
      problemIntro: 'Cada día las empresas lidian con:',
      problemList: [
        'Preguntas repetitivas',
        'Mensajes fuera de horario',
        'Leads sin respuesta',
        'Conversaciones que se pierden',
      ],
      problemClosing: 'Cada respuesta retrasada puede ser una venta perdida. Botfy automatiza estas interacciones con inteligencia, manteniendo a las empresas respondiendo 24/7 — sin complejidad técnica y sin necesidad de desarrolladores.',
      positioningTitle: 'Nuestro Posicionamiento',
      positioningIntro: 'Somos una empresa SaaS escalable basada en Product-Led Growth. Nuestro foco está en:',
      positioningList: ['Simplicidad', 'Activación rápida', 'Valor claro', 'Crecimiento sostenible'],
      positioningClosing: 'Nuestro modelo freemium permite que las empresas experimenten valor real antes de actualizar. Creemos que la mejor estrategia de marketing es un producto que funciona.',
      strategyTitle: 'Nuestra Estrategia',
      strategyIntro: 'Según nuestro plan de acción estratégico',
      strategyPlanRef: 'Plano-de-Acao-Para-ser-Seguido',
      strategyPrincipleIntro: 'Botfy se basa en tres principios:',
      strategyList: [
        'Producto horizontal (sirve a cualquier negocio)',
        'Comunicación vertical (enfoque en un nicho a la vez)',
        'Crecimiento estructurado y medible',
      ],
      strategyClosing: 'Nos enfocamos inicialmente en negocios irlandeses con alto volumen de mensajes de clientes, validando y refinando el producto antes de expandir a nuevas industrias.',
      differentTitle: 'Qué Nos Diferencia',
      differentList: [
        'Plataforma 100% self-service',
        'Sin costes de configuración',
        'Onboarding rápido',
        'Enfoque en resultados',
        'Escalable desde pequeñas empresas hasta operaciones en crecimiento',
      ],
      differentClosing: 'No solo automatizamos conversaciones — creamos predictibilidad.',
      visionTitle: 'Nuestra Visión',
      visionList: [
        'Año 1: Establecer presencia sólida en Irlanda',
        'Año 2: Expandir por Europa',
        'Año 3: Ser referencia global en agentes de atención al cliente con IA',
      ],
      visionClosing: 'Creemos que el futuro del soporte al cliente no es reemplazar a las personas — es empoderarlas.',
      founderTitle: 'Visión del Fundador',
      founderContent: [
        'Botfy está impulsada por una creencia clara: la tecnología potente debe ser accesible, práctica y hecha para negocios reales.',
        'Más que una herramienta, Botfy representa un cambio hacia una comunicación con el cliente más inteligente, rápida y eficiente.',
      ],
      founderClosing: 'Si crees que respuesta rápida significa crecimiento real, ya entiendes Botfy.',
    },
    contact: {
      title: 'Contacto',
      lead: 'Contacta con nuestro equipo.',
      email: 'contact@botfy.ai',
      emailLabel: 'Correo',
    },
  },
}

export const translations: Record<Language, Translations> = { en, pt, es }
