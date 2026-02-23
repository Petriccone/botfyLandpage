export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  nav: {
    platform: string
    features: string
    pricing: string
    company: string
    login: string
    startFreeTrial: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    titleHighlight: string
    subtitle: string
    cta: string
  }
  painPoints: {
    titleStart: string
    titleBut: string
    titleHighlight: string
    titleEnd: string
    subtitle: string
    items: string[]
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
    items: { title: string; desc: string }[]
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
    platform: 'Platform',
    features: 'Features',
    pricing: 'Pricing',
    company: 'Company',
    login: 'Log in',
    startFreeTrial: 'Start Free Trial',
  },
  hero: {
    badge: 'Secure AI Agents Infrastructure',
    titleLine1: 'Turn Your Company Knowledge Into',
    titleLine2: '',
    titleHighlight: 'Secure AI Agents.',
    subtitle: 'Create, train and deploy AI agents connected to WhatsApp, Telegram and your website — fully hosted in Europe.',
    cta: 'Start Free Trial',
  },
  painPoints: {
    titleStart: 'AI is everywhere.',
    titleBut: 'But',
    titleHighlight: 'Enterprise-Ready AI',
    titleEnd: 'is not.',
    subtitle: 'Most companies struggle to implement AI securely. We built Botfy to solve the hardest infrastructure challenges.',
    items: ['Data Security Concerns', 'Complex AI Infrastructure', 'Expensive Development', 'Compliance Risks', 'Integration Complexity'],
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
  steps: {
    titleStart: 'From data to',
    titleHighlight: 'live agent',
    titleEnd: 'in minutes',
    items: [
      { title: 'Create your workspace', desc: 'Set up isolated environments for different departments or clients.' },
      { title: 'Train your AI agent', desc: 'Upload your proprietary data securely. Our vector engine handles the rest.' },
      { title: 'Connect communication channels', desc: 'Link your WhatsApp Business API or copy our website widget code.' },
      { title: 'Go live and monitor', desc: 'Watch your agents handle queries while you track performance in real-time.' },
    ],
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
    titleStart: 'Simple, scalable',
    titleHighlight: 'pricing',
    subtitle: 'Start building for free, upgrade when you need more power and volume.',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'Starter',
        desc: 'Perfect for testing and small projects.',
        price: '€49',
        period: '/mo',
        features: ['1 AI Agent', '500 Messages/mo', 'Web Widget', 'Community Support'],
        cta: 'Get Started',
      },
      {
        name: 'Growth',
        desc: 'For growing teams scaling AI operations.',
        price: '€149',
        period: '/mo',
        features: ['5 AI Agents', '5,000 Messages/mo', 'WhatsApp Integration', 'Priority Support'],
        cta: 'Get Started',
      },
      {
        name: 'Business',
        desc: 'Advanced controls for larger organizations.',
        price: '€499',
        period: '/mo',
        features: ['Unlimited Agents', '50,000 Messages/mo', 'Custom Integrations', 'Dedicated Account Manager'],
        cta: 'Get Started',
      },
      {
        name: 'Enterprise',
        desc: 'For companies needing maximum security.',
        price: 'Custom',
        period: '',
        features: ['Custom Volume', 'On-Premise Options', 'Custom SLA', 'Security Audits'],
        cta: 'Contact Sales',
      },
    ],
  },
  cta: {
    title: 'Ready to Deploy Secure AI in Your Company?',
    subtitle: 'Secure AI Agents Infrastructure for European Companies. Build, train and deploy with confidence.',
    button: 'Start Your Free Trial',
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
    platform: 'Plataforma',
    features: 'Recursos',
    pricing: 'Preços',
    company: 'Empresa',
    login: 'Entrar',
    startFreeTrial: 'Teste Grátis',
  },
  hero: {
    badge: 'Infraestrutura Segura de Agentes IA',
    titleLine1: 'Transforme o Conhecimento da Sua Empresa em',
    titleLine2: '',
    titleHighlight: 'Agentes IA Seguros.',
    subtitle: 'Crie, treine e implante agentes IA conectados ao WhatsApp, Telegram e seu website — totalmente hospedado na Europa.',
    cta: 'Teste Grátis',
  },
  painPoints: {
    titleStart: 'IA está em toda parte.',
    titleBut: 'Mas',
    titleHighlight: 'IA Enterprise-Ready',
    titleEnd: 'não está.',
    subtitle: 'A maioria das empresas luta para implementar IA com segurança. Construímos a Botfy para resolver os desafios mais difíceis de infraestrutura.',
    items: ['Preocupações com Segurança', 'Infraestrutura Complexa', 'Desenvolvimento Caro', 'Riscos de Conformidade', 'Complexidade de Integração'],
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
    titleStart: 'De dados a',
    titleHighlight: 'agente ao vivo',
    titleEnd: 'em minutos',
    items: [
      { title: 'Crie seu workspace', desc: 'Configure ambientes isolados para diferentes departamentos ou clientes.' },
      { title: 'Treine seu agente IA', desc: 'Envie seus dados proprietários com segurança. Nosso motor vetorial cuida do resto.' },
      { title: 'Conecte canais de comunicação', desc: 'Vincule sua API WhatsApp Business ou copie o código do widget.' },
      { title: 'Vá ao vivo e monitore', desc: 'Veja seus agentes responderem consultas enquanto acompanha o desempenho em tempo real.' },
    ],
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
    titleStart: 'Preços simples e',
    titleHighlight: 'escaláveis',
    subtitle: 'Comece a construir gratuitamente, atualize quando precisar de mais poder e volume.',
    mostPopular: 'Mais Popular',
    plans: [
      {
        name: 'Starter',
        desc: 'Perfeito para testes e projetos pequenos.',
        price: '€49',
        period: '/mês',
        features: ['1 Agente IA', '500 Mensagens/mês', 'Widget Web', 'Suporte Comunidade'],
        cta: 'Começar',
      },
      {
        name: 'Growth',
        desc: 'Para equipes em crescimento escalando operações IA.',
        price: '€149',
        period: '/mês',
        features: ['5 Agentes IA', '5.000 Mensagens/mês', 'Integração WhatsApp', 'Suporte Prioritário'],
        cta: 'Começar',
      },
      {
        name: 'Business',
        desc: 'Controles avançados para organizações maiores.',
        price: '€499',
        period: '/mês',
        features: ['Agentes Ilimitados', '50.000 Mensagens/mês', 'Integrações Customizadas', 'Gerente de Conta Dedicado'],
        cta: 'Começar',
      },
      {
        name: 'Enterprise',
        desc: 'Para empresas que precisam de segurança máxima.',
        price: 'Personalizado',
        period: '',
        features: ['Volume Customizado', 'Opções On-Premise', 'SLA Customizado', 'Auditorias de Segurança'],
        cta: 'Falar com Vendas',
      },
    ],
  },
  cta: {
    title: 'Pronto para Implantar IA Segura na Sua Empresa?',
    subtitle: 'Infraestrutura de Agentes IA Seguros para Empresas Europeias. Construa, treine e implante com confiança.',
    button: 'Comece Seu Teste Grátis',
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
    platform: 'Plataforma',
    features: 'Características',
    pricing: 'Precios',
    company: 'Empresa',
    login: 'Iniciar sesión',
    startFreeTrial: 'Prueba Gratis',
  },
  hero: {
    badge: 'Infraestructura Segura de Agentes IA',
    titleLine1: 'Convierte el Conocimiento de Tu Empresa en',
    titleLine2: '',
    titleHighlight: 'Agentes IA Seguros.',
    subtitle: 'Crea, entrena y despliega agentes IA conectados a WhatsApp, Telegram y tu sitio web — completamente alojado en Europa.',
    cta: 'Prueba Gratis',
  },
  painPoints: {
    titleStart: 'La IA está en todas partes.',
    titleBut: 'Pero',
    titleHighlight: 'IA Enterprise-Ready',
    titleEnd: 'no lo está.',
    subtitle: 'La mayoría de las empresas luchan por implementar IA de forma segura. Construimos Botfy para resolver los desafíos de infraestructura más difíciles.',
    items: ['Preocupaciones de Seguridad', 'Infraestructura Compleja', 'Desarrollo Costoso', 'Riesgos de Cumplimiento', 'Complejidad de Integración'],
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
    titleStart: 'De datos a',
    titleHighlight: 'agente en vivo',
    titleEnd: 'en minutos',
    items: [
      { title: 'Crea tu workspace', desc: 'Configura entornos aislados para diferentes departamentos o clientes.' },
      { title: 'Entrena tu agente IA', desc: 'Sube tus datos propietarios de forma segura. Nuestro motor vectorial se encarga del resto.' },
      { title: 'Conecta canales de comunicación', desc: 'Vincula tu API de WhatsApp Business o copia el código del widget.' },
      { title: 'Lanza y monitorea', desc: 'Observa cómo tus agentes manejan consultas mientras rastreas el rendimiento en tiempo real.' },
    ],
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
    titleStart: 'Precios simples y',
    titleHighlight: 'escalables',
    subtitle: 'Comienza a construir gratis, actualiza cuando necesites más potencia y volumen.',
    mostPopular: 'Más Popular',
    plans: [
      {
        name: 'Starter',
        desc: 'Perfecto para pruebas y proyectos pequeños.',
        price: '€49',
        period: '/mes',
        features: ['1 Agente IA', '500 Mensajes/mes', 'Widget Web', 'Soporte Comunidad'],
        cta: 'Comenzar',
      },
      {
        name: 'Growth',
        desc: 'Para equipos en crecimiento escalando operaciones IA.',
        price: '€149',
        period: '/mes',
        features: ['5 Agentes IA', '5.000 Mensajes/mes', 'Integración WhatsApp', 'Soporte Prioritario'],
        cta: 'Comenzar',
      },
      {
        name: 'Business',
        desc: 'Controles avanzados para organizaciones más grandes.',
        price: '€499',
        period: '/mes',
        features: ['Agentes Ilimitados', '50.000 Mensajes/mes', 'Integraciones Personalizadas', 'Gerente de Cuenta Dedicado'],
        cta: 'Comenzar',
      },
      {
        name: 'Enterprise',
        desc: 'Para empresas que necesitan máxima seguridad.',
        price: 'Personalizado',
        period: '',
        features: ['Volumen Personalizado', 'Opciones On-Premise', 'SLA Personalizado', 'Auditorías de Seguridad'],
        cta: 'Contactar Ventas',
      },
    ],
  },
  cta: {
    title: '¿Listo para Desplegar IA Segura en Tu Empresa?',
    subtitle: 'Infraestructura de Agentes IA Seguros para Empresas Europeas. Construye, entrena y despliega con confianza.',
    button: 'Comienza Tu Prueba Gratis',
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
