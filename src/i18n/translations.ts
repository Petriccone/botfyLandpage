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
    about: { title: string; lead: string; content: string }
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
      lead: 'We build secure AI infrastructure for European companies.',
      content: 'Botfy provides a platform to create, train and deploy AI agents connected to WhatsApp, Telegram and your website — fully hosted in Europe, with enterprise-grade security and GDPR compliance.',
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
      lead: 'Construímos infraestrutura de IA segura para empresas europeias.',
      content: 'A Botfy oferece uma plataforma para criar, treinar e implantar agentes de IA conectados ao WhatsApp, Telegram e ao seu site — totalmente hospedada na Europa, com segurança de nível empresarial e conformidade com a GDPR.',
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
      lead: 'Construimos infraestructura de IA segura para empresas europeas.',
      content: 'Botfy ofrece una plataforma para crear, entrenar y desplegar agentes de IA conectados a WhatsApp, Telegram y tu sitio web — alojado en Europa, con seguridad empresarial y cumplimiento GDPR.',
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
