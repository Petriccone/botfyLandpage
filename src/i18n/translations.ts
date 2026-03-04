export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  nav: {
    howItWorks: string
    solution: string
    pricing: string
    aboutUs: string
    login: string
    startFreeTrial: string
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
  problem: {
    title: string
    body1: string
    body2: string
    body3: string
  }
  whatIsBotfy: {
    title: string
    body1: string
    body2: string
  }
  capabilities: {
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  newHowItWorks: {
    title: string
    subtitle: string
    steps: { title: string; desc: string }[]
    noCode: string
  }
  useCases: {
    title: string
    subtitle: string
    cases: { emoji: string; industry: string; desc: string }[]
  }
  comparison: {
    title: string
    subtitle: string
    headers: string[]
    rows: { label: string; cells: string[] }[]
  }
  newTestimonials: {
    title: string
    items: { quote: string; name: string; role: string }[]
  }
  newCta: {
    title: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
  }
  meta: {
    title: string
    description: string
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
    startFreeTrial: 'Start for free',
    product: 'Product',
    solutions: 'Use Cases',
  },
  hero: {
    badge: 'Secure AI Agents Infrastructure',
    titleLine1: 'Build Your AI Workforce.',
    titleLine2: '',
    titleHighlight: 'Sell on Autopilot.',
    subtitle: 'Automate conversations, qualify leads and close sales 24/7 — without hiring, without complexity.',
    subtitle2: 'Deploy intelligent AI agents in minutes and turn every message into revenue.',
    cta: 'Start Free',
    ctaSecondary: 'Watch demo (2 min)',
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
        desc: 'Free forever',
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
    button: 'Start Free',
  },
  kommo: {
    badge: 'AI Agent for WhatsApp & Messaging',
    heroLine1: 'Digital employees',
    heroLine2: 'for your',
    heroLine3: 'business.',
    heroHeadline: 'All the ways you sell — combined in one AI platform',
    heroSubline: 'AI agents trained on your products, your voice, and your rules — selling, supporting, and scheduling 24/7 on WhatsApp.',
    tryFreeCta: 'Start for free',
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
    ctaBadge: 'Free forever · No credit card',
    ctaHeadline: 'Start using Botfy for free',
    ctaSub: 'Start building your AI sales pipeline today. No credit card required.',
    tryFree: 'Start free',
  },
  logoSection: {
    title: 'Trusted by clinics, shops, and service businesses...',
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
      { q: 'How does the free plan work?', a: 'Botfy offers a free plan with no time limit — you can use it for as long as you want. The free plan includes access to AI agents, the omnichannel inbox, and core features so you can experience the platform with real conversations. No credit card is required. When you need more volume, advanced analytics, or team features, you can upgrade to a paid plan at any time.' },
      { q: 'Does it work with WhatsApp Business API?', a: 'Yes. Botfy connects directly to the official WhatsApp Business API through Meta\'s Cloud API. You keep full ownership of your phone number and business account. We support message templates, interactive buttons, list messages, and media sharing — all managed from the Botfy dashboard without needing a separate BSP.' },
      { q: 'Do I need to know how to code?', a: 'Not at all. Botfy is designed for business teams, not developers. You configure conversation flows with a visual builder, train the AI by uploading your own content (PDFs, websites, FAQs), and customize the agent\'s personality through simple text prompts. If you do want deeper integrations, we offer a REST API and webhooks for your development team.' },
      { q: 'How long does setup take?', a: 'Most customers have their first AI agent live in under 30 minutes. The process is simple: connect your messaging channel (WhatsApp, Telegram, or Web Chat), upload your training content (product catalog, FAQ documents, company policies), customize the agent\'s tone and behavior, then activate. Our onboarding wizard guides you through each step.' },
      { q: 'Is it GDPR and LGPD compliant?', a: 'Yes. All data is stored on servers within the European Union and processed in full compliance with GDPR and Brazil\'s LGPD. We implement end-to-end encryption, role-based access controls, automatic data retention policies, and provide tools for data export and deletion requests. We also maintain a Data Processing Agreement (DPA) available upon request.' },
      { q: "Can I customize the AI agent's personality?", a: 'Absolutely. You define the personality, tone of voice, communication style, and even the language preferences for each agent. Want a formal support agent and a casual sales assistant? You can create both with different personas. The AI adapts to your brand guidelines and responds consistently across every channel.' },
      { q: 'Which channels are supported?', a: 'Currently, Botfy supports WhatsApp (via official Business API), Telegram, and Web Chat (embeddable widget for your website). All conversations flow into a single unified inbox where your team can monitor, intervene, or let the AI handle autonomously. We\'re actively developing integrations for Instagram and email.' },
      { q: 'How is the AI trained?', a: 'Training is content-based and automatic. Upload your documents (PDF, Word, Excel), paste website URLs, or type in custom Q&A pairs. The AI processes your content using advanced RAG (Retrieval-Augmented Generation) technology, meaning it retrieves the most relevant information from your knowledge base before generating each response. You can update training data at any time and changes take effect within minutes.' },
      { q: 'Can I have multiple agents for different teams?', a: 'Yes. Each AI agent can be independently configured with its own training data, personality, channels, and escalation rules. For example, you might have a sales agent trained on your product catalog, a support agent trained on your help docs, and a scheduling agent connected to your calendar — all operating simultaneously and handing off to the right human team when needed.' },
      { q: "What happens when the AI doesn't know the answer?", a: 'You have full control over the escalation flow. You can configure the AI to: transfer the conversation to a specific human agent or team, collect the customer\'s contact details for callback, create a support ticket in your CRM, or send a custom message acknowledging the limitation. The AI recognizes its confidence level and follows your rules — it never makes up answers from information it doesn\'t have.' },
      { q: 'Can I connect my CRM or other tools?', a: 'Yes. Botfy offers native integrations with popular platforms including HubSpot, Salesforce, RD Station, Pipedrive, and Kommo. For other tools, you can use our REST API and webhook system to send data to virtually any platform — Zapier, Make (Integromat), n8n, or your own backend. Lead data, conversation transcripts, and tags can be synced automatically.' },
      { q: 'Is there a limit on monthly conversations?', a: 'Each plan includes a generous monthly conversation allowance. The Starter plan includes 1,000 conversations/month, Growth includes 5,000, and Scale offers 20,000+. If you approach your limit, we notify you in advance so you can upgrade seamlessly. There are no surprise overage charges — you always know exactly what you\'re paying.' },
      { q: 'What languages does the AI support?', a: 'The AI supports over 50 languages out of the box, including Portuguese, English, Spanish, French, German, Italian, and many more. Language is automatically detected per conversation, so a single agent can handle customers in different languages without any extra configuration. You can also restrict an agent to specific languages if needed.' },
      { q: 'Can I test the agent before going live?', a: 'Yes. Every plan includes a built-in sandbox environment where you can simulate real conversations with your AI agent. Test different scenarios, edge cases, and escalation paths before publishing to customers. You can also share a private preview link with your team for collaborative review and feedback before launch.' },
    ],
  },
  problem: {
    title: 'Your business is growing. Your team is not.',
    body1: 'You are losing leads because nobody answered at 11 pm. Your best salesperson is stuck copy-pasting the same follow-up for the 50th time. Hiring is slow, training is slower, and every new channel means more chaos.',
    body2: 'Traditional chatbots make it worse — robotic scripts that frustrate customers and damage your brand. Generic AI tools sound smart in demos but hallucinate in production.',
    body3: 'You don\'t need another bot. You need digital employees.',
  },
  whatIsBotfy: {
    title: 'Botfy creates digital employees for your business.',
    body1: 'A digital employee is an AI agent trained on your products, your tone, and your rules. It answers customers on WhatsApp, books appointments, sends invoices, and follows up — exactly like a great team member who never sleeps.',
    body2: 'No code. No prompt engineering. Just upload your docs, connect your channels, and go live in 15 minutes.',
  },
  capabilities: {
    title: 'What your digital employees can do',
    subtitle: 'Everything a great team member does — on autopilot, 24/7.',
    items: [
      { title: 'Customer support', desc: 'Answer FAQs, resolve complaints, and escalate to humans only when needed.' },
      { title: 'Lead qualification', desc: 'Ask the right questions, score leads, and route hot prospects to your sales team.' },
      { title: 'Appointment scheduling', desc: 'Check availability, book slots, send confirmations and reminders automatically.' },
      { title: 'Payments & invoicing', desc: 'Send payment links, generate invoices, and confirm transactions inside the chat.' },
      { title: 'Product recommendations', desc: 'Suggest the right product based on conversation context and purchase history.' },
      { title: 'Multi-language support', desc: 'Speak 50+ languages natively. Auto-detect and reply in the customer\'s language.' },
    ],
  },
  newHowItWorks: {
    title: 'Set up your team in 15 minutes. No code.',
    subtitle: 'Three steps to your first digital employee.',
    steps: [
      { title: 'Create your agents', desc: 'Upload your documents, FAQs, and product catalog. The AI learns your business instantly.' },
      { title: 'Connect your channels', desc: 'WhatsApp, Instagram, Telegram, Web Chat — plug in every channel your customers use.' },
      { title: 'Go live', desc: 'Activate and watch your digital employees handle conversations, qualify leads, and close sales.' },
    ],
    noCode: 'No developers. No agencies. No technical setup.',
  },
  useCases: {
    title: 'Digital employees in action',
    subtitle: 'See how they work across industries.',
    cases: [
      { emoji: '🏥', industry: 'Health & dental clinics', desc: 'Patients book appointments via WhatsApp 24/7. The AI confirms, reminds, and reschedules — reducing no-shows by up to 40%.' },
      { emoji: '🛋️', industry: 'Furniture & retail', desc: 'Customers browse products, get recommendations, and receive payment links — all inside a single WhatsApp conversation.' },
      { emoji: '💇', industry: 'Beauty & wellness', desc: 'Salons fill their calendars automatically. The AI handles booking, rescheduling, and follow-up messages after each visit.' },
      { emoji: '🏠', industry: 'Real estate', desc: 'Agents qualify buyers instantly, share property details with photos, and schedule visits — without missing a single inquiry.' },
      { emoji: '🍽️', industry: 'Restaurants & food', desc: 'Take reservations, share menus, handle dietary requests, and confirm bookings — all through WhatsApp, 24/7.' },
      { emoji: '🏋️', industry: 'Fitness & gyms', desc: 'Members book classes, check schedules, and renew memberships automatically. The AI handles cancellations and waitlists too.' },
    ],
  },
  comparison: {
    title: 'Not all AI is created equal',
    subtitle: 'See how Botfy compares to alternatives.',
    headers: ['Traditional chatbot', 'Generic AI', 'Botfy'],
    rows: [
      { label: 'Trained on your business', cells: ['no', 'partial', 'yes'] },
      { label: 'WhatsApp native', cells: ['no', 'no', 'yes'] },
      { label: 'Books appointments', cells: ['no', 'no', 'yes'] },
      { label: 'Sends payment links', cells: ['no', 'no', 'yes'] },
      { label: 'Multi-language (50+)', cells: ['no', 'yes', 'yes'] },
      { label: 'No-code setup', cells: ['partial', 'no', 'yes'] },
      { label: 'CRM integration', cells: ['partial', 'partial', 'yes'] },
      { label: 'Escalation to humans', cells: ['partial', 'no', 'yes'] },
      { label: 'Brand voice & tone', cells: ['no', 'partial', 'yes'] },
      { label: 'Live in under 15 min', cells: ['no', 'no', 'yes'] },
    ],
  },
  newTestimonials: {
    title: 'Trusted by real businesses',
    items: [
      { quote: 'We reduced no-shows by 35% in the first month. The AI handles all our WhatsApp scheduling now.', name: 'Dr. Marina Souza', role: 'Dental clinic owner' },
      { quote: 'Our furniture store gets 200+ WhatsApp messages a day. Botfy handles 80% of them — and actually closes sales.', name: 'Carlos Mendes', role: 'E-commerce manager' },
      { quote: 'My salon is fully booked thanks to the AI. Clients love how fast they get a response.', name: 'Ana Beatriz', role: 'Salon owner' },
    ],
  },
  newCta: {
    title: 'How many digital employees does your business need?',
    body: 'Start with one. Scale to a whole team. Free plan available — no credit card required.',
    ctaPrimary: 'Start for free',
    ctaSecondary: 'Talk to a human (we\'re nice too)',
  },
  meta: {
    title: 'Digital Employees for Your Business | Botfy',
    description: 'Create AI-powered digital employees that handle sales, support, scheduling, and payments on WhatsApp — like a real team that works 24/7.',
  },
  footer: {
    desc: 'Botfy — Digital employees for your business.',
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
      ctaButton: 'Start free',
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
    startFreeTrial: 'Começar grátis',
    product: 'Produto',
    solutions: 'Casos de Uso',
  },
  hero: {
    badge: 'Infraestrutura Segura de Agentes IA',
    titleLine1: 'Monte Sua Força de Trabalho em IA.',
    titleLine2: '',
    titleHighlight: 'Venda no Piloto Automático.',
    subtitle: 'Automatize conversas, qualifique leads e feche vendas 24/7 — sem contratar, sem complexidade.',
    subtitle2: 'Implante agentes de IA em minutos e transforme cada mensagem em receita.',
    cta: 'Começar Grátis',
    ctaSecondary: 'Ver demo (2 min)',
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
        desc: 'Grátis para sempre',
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
    button: 'Começar Grátis',
  },
  kommo: {
    badge: 'Agente de IA para WhatsApp & Mensageiros',
    heroLine1: 'Funcionários digitais',
    heroLine2: 'para o seu',
    heroLine3: 'negócio.',
    heroHeadline: 'Tudo o que você precisa para vender — em uma plataforma de IA',
    heroSubline: 'Agentes de IA treinados nos seus produtos, na sua voz e nas suas regras — vendendo, atendendo e agendando 24/7 no WhatsApp.',
    tryFreeCta: 'Começar grátis',
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
    ctaBadge: 'Grátis para sempre · Sem cartão de crédito',
    ctaHeadline: 'Comece a usar a Botfy gratuitamente',
    ctaSub: 'Comece a construir seu pipeline de vendas com IA hoje. Sem cartão de crédito.',
    tryFree: 'Começar grátis',
  },
  logoSection: {
    title: 'Confiado por clínicas, lojas e negócios de serviços...',
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
      { q: 'Como funciona o plano gratuito?', a: 'A Botfy oferece um plano gratuito sem limite de tempo — você pode usar pelo tempo que quiser. O plano gratuito inclui acesso a agentes de IA, inbox omnichannel e funcionalidades essenciais para que você experimente a plataforma com conversas reais. Não é necessário cartão de crédito. Quando precisar de mais volume, analytics avançados ou funcionalidades de equipe, você pode fazer upgrade para um plano pago a qualquer momento.' },
      { q: 'Funciona com o WhatsApp Business?', a: 'Sim. A Botfy se conecta diretamente à API oficial do WhatsApp Business através da Cloud API da Meta. Você mantém total propriedade do seu número e conta comercial. Suportamos templates de mensagens, botões interativos, listas e envio de mídia — tudo gerenciado pelo painel da Botfy sem precisar de um BSP separado.' },
      { q: 'Preciso saber programar?', a: 'De jeito nenhum. A Botfy foi feita para equipes de negócio, não para desenvolvedores. Você configura fluxos de conversa com um construtor visual, treina a IA enviando seu próprio conteúdo (PDFs, sites, FAQs) e personaliza a personalidade do agente com prompts simples de texto. Se quiser integrações mais profundas, oferecemos API REST e webhooks para sua equipe técnica.' },
      { q: 'Quanto tempo leva para configurar?', a: 'A maioria dos clientes coloca seu primeiro agente de IA no ar em menos de 30 minutos. O processo é simples: conecte seu canal de mensagens (WhatsApp, Telegram ou Web Chat), envie seu conteúdo de treinamento (catálogo de produtos, documentos FAQ, políticas da empresa), personalize o tom e comportamento do agente, e ative. Nosso assistente de onboarding te guia em cada etapa.' },
      { q: 'É compatível com LGPD e GDPR?', a: 'Sim. Todos os dados são armazenados em servidores na União Europeia e processados em total conformidade com GDPR e LGPD. Implementamos criptografia de ponta a ponta, controles de acesso baseados em papéis, políticas automáticas de retenção de dados, e fornecemos ferramentas para exportação e requisições de exclusão. Também disponibilizamos um Acordo de Processamento de Dados (DPA) mediante solicitação.' },
      { q: 'Posso personalizar o tom do agente?', a: 'Com certeza. Você define a personalidade, tom de voz, estilo de comunicação e até as preferências de idioma de cada agente. Quer um agente de suporte formal e um assistente de vendas descontraído? Pode criar ambos com personas diferentes. A IA se adapta às diretrizes da sua marca e responde de forma consistente em todos os canais.' },
      { q: 'Quais canais são suportados?', a: 'Atualmente, a Botfy suporta WhatsApp (via API oficial do Business), Telegram e Web Chat (widget incorporável no seu site). Todas as conversas chegam em uma inbox unificada onde sua equipe pode monitorar, intervir ou deixar a IA gerenciar autonomamente. Estamos desenvolvendo integrações com Instagram e e-mail.' },
      { q: 'Como a IA é treinada?', a: 'O treinamento é baseado em conteúdo e automático. Envie seus documentos (PDF, Word, Excel), cole URLs de sites ou digite pares personalizados de perguntas e respostas. A IA processa seu conteúdo usando tecnologia avançada de RAG (Retrieval-Augmented Generation), ou seja, ela busca as informações mais relevantes na sua base de conhecimento antes de gerar cada resposta. Você pode atualizar os dados de treinamento a qualquer momento e as mudanças surtem efeito em minutos.' },
      { q: 'Posso ter vários agentes para equipes diferentes?', a: 'Sim. Cada agente de IA pode ser configurado independentemente com seus próprios dados de treinamento, personalidade, canais e regras de escalação. Por exemplo, você pode ter um agente de vendas treinado no catálogo de produtos, um agente de suporte treinado na documentação de ajuda, e um agente de agendamento conectado ao seu calendário — todos operando simultaneamente e fazendo handoff para o time humano certo quando necessário.' },
      { q: 'O que acontece quando a IA não sabe a resposta?', a: 'Você tem controle total sobre o fluxo de escalação. Pode configurar a IA para: transferir a conversa para um agente humano ou equipe específica, coletar os dados de contato do cliente para retorno, criar um ticket de suporte no seu CRM, ou enviar uma mensagem personalizada reconhecendo a limitação. A IA reconhece seu nível de confiança e segue suas regras — ela nunca inventa respostas com informações que não possui.' },
      { q: 'Consigo integrar com meu CRM?', a: 'Sim. A Botfy oferece integrações nativas com plataformas populares incluindo HubSpot, Salesforce, RD Station, Pipedrive e Kommo. Para outras ferramentas, você pode usar nossa API REST e sistema de webhooks para enviar dados para praticamente qualquer plataforma — Zapier, Make (Integromat), n8n ou seu próprio backend. Dados de leads, transcrições de conversas e tags podem ser sincronizados automaticamente.' },
      { q: 'Existe limite de conversas por mês?', a: 'Cada plano inclui uma cota mensal generosa de conversas. O plano Starter inclui 1.000 conversas/mês, o Growth inclui 5.000 e o Scale oferece 20.000+. Se você se aproximar do limite, avisamos com antecedência para que possa fazer upgrade sem interrupções. Não há cobranças surpresa por excedente — você sempre sabe exatamente quanto está pagando.' },
      { q: 'Em quais idiomas a IA atende?', a: 'A IA suporta mais de 50 idiomas nativamente, incluindo português, inglês, espanhol, francês, alemão, italiano e muitos outros. O idioma é detectado automaticamente por conversa, então um único agente pode atender clientes em diferentes idiomas sem configuração extra. Você também pode restringir um agente a idiomas específicos, se necessário.' },
      { q: 'Posso testar o agente antes de ir ao ar?', a: 'Sim. Todo plano inclui um ambiente de sandbox integrado onde você pode simular conversas reais com seu agente de IA. Teste diferentes cenários, casos extremos e fluxos de escalação antes de publicar para os clientes. Você também pode compartilhar um link de pré-visualização privado com sua equipe para revisão e feedback colaborativo antes do lançamento.' },
    ],
  },
  problem: {
    title: 'Seu negócio está crescendo. Sua equipe não.',
    body1: 'Você está perdendo leads porque ninguém respondeu às 23h. Seu melhor vendedor está preso copiando e colando o mesmo follow-up pela 50ª vez. Contratar é lento, treinar é mais lento ainda, e cada canal novo significa mais caos.',
    body2: 'Chatbots tradicionais pioram tudo — scripts robóticos que frustram clientes e prejudicam sua marca. Ferramentas genéricas de IA parecem inteligentes em demos, mas alucinam em produção.',
    body3: 'Você não precisa de outro bot. Você precisa de funcionários digitais.',
  },
  whatIsBotfy: {
    title: 'A Botfy cria funcionários digitais para o seu negócio.',
    body1: 'Um funcionário digital é um agente de IA treinado nos seus produtos, no seu tom e nas suas regras. Ele responde clientes no WhatsApp, agenda consultas, envia faturas e faz follow-up — exatamente como um ótimo membro da equipe que nunca dorme.',
    body2: 'Sem código. Sem engenharia de prompts. Basta enviar seus documentos, conectar seus canais e ir ao vivo em 15 minutos.',
  },
  capabilities: {
    title: 'O que seus funcionários digitais podem fazer',
    subtitle: 'Tudo que um ótimo membro da equipe faz — no piloto automático, 24/7.',
    items: [
      { title: 'Suporte ao cliente', desc: 'Responde FAQs, resolve reclamações e escala para humanos apenas quando necessário.' },
      { title: 'Qualificação de leads', desc: 'Faz as perguntas certas, pontua leads e direciona prospects quentes para sua equipe de vendas.' },
      { title: 'Agendamento', desc: 'Verifica disponibilidade, reserva horários, envia confirmações e lembretes automaticamente.' },
      { title: 'Pagamentos e faturas', desc: 'Envia links de pagamento, gera faturas e confirma transações dentro do chat.' },
      { title: 'Recomendações de produtos', desc: 'Sugere o produto certo com base no contexto da conversa e histórico de compras.' },
      { title: 'Suporte multi-idioma', desc: 'Fala 50+ idiomas nativamente. Detecta e responde automaticamente no idioma do cliente.' },
    ],
  },
  newHowItWorks: {
    title: 'Monte sua equipe em 15 minutos. Sem código.',
    subtitle: 'Três passos para seu primeiro funcionário digital.',
    steps: [
      { title: 'Crie seus agentes', desc: 'Envie seus documentos, FAQs e catálogo de produtos. A IA aprende seu negócio instantaneamente.' },
      { title: 'Conecte seus canais', desc: 'WhatsApp, Instagram, Telegram, Web Chat — conecte cada canal que seus clientes usam.' },
      { title: 'Vá ao vivo', desc: 'Ative e veja seus funcionários digitais lidando com conversas, qualificando leads e fechando vendas.' },
    ],
    noCode: 'Sem desenvolvedores. Sem agências. Sem configuração técnica.',
  },
  useCases: {
    title: 'Funcionários digitais em ação',
    subtitle: 'Veja como funcionam em diferentes setores.',
    cases: [
      { emoji: '🏥', industry: 'Clínicas médicas e odontológicas', desc: 'Pacientes agendam consultas pelo WhatsApp 24/7. A IA confirma, lembra e reagenda — reduzindo faltas em até 40%.' },
      { emoji: '🛋️', industry: 'Móveis e varejo', desc: 'Clientes navegam produtos, recebem recomendações e links de pagamento — tudo em uma única conversa no WhatsApp.' },
      { emoji: '💇', industry: 'Beleza e bem-estar', desc: 'Salões lotam suas agendas automaticamente. A IA cuida de agendamento, reagendamento e mensagens de follow-up após cada visita.' },
      { emoji: '🏠', industry: 'Imobiliário', desc: 'Corretores qualificam compradores instantaneamente, compartilham detalhes com fotos e agendam visitas — sem perder nenhuma consulta.' },
      { emoji: '🍽️', industry: 'Restaurantes e alimentação', desc: 'Receba reservas, compartilhe cardápios, lide com restrições alimentares e confirme agendamentos — tudo pelo WhatsApp, 24/7.' },
      { emoji: '🏋️', industry: 'Fitness e academias', desc: 'Alunos reservam aulas, conferem horários e renovam planos automaticamente. A IA cuida de cancelamentos e listas de espera.' },
    ],
  },
  comparison: {
    title: 'Nem toda IA é igual',
    subtitle: 'Veja como a Botfy se compara às alternativas.',
    headers: ['Chatbot tradicional', 'IA genérica', 'Botfy'],
    rows: [
      { label: 'Treinado no seu negócio', cells: ['no', 'partial', 'yes'] },
      { label: 'WhatsApp nativo', cells: ['no', 'no', 'yes'] },
      { label: 'Agenda consultas', cells: ['no', 'no', 'yes'] },
      { label: 'Envia links de pagamento', cells: ['no', 'no', 'yes'] },
      { label: 'Multi-idioma (50+)', cells: ['no', 'yes', 'yes'] },
      { label: 'Configuração sem código', cells: ['partial', 'no', 'yes'] },
      { label: 'Integração com CRM', cells: ['partial', 'partial', 'yes'] },
      { label: 'Escalação para humanos', cells: ['partial', 'no', 'yes'] },
      { label: 'Voz e tom da marca', cells: ['no', 'partial', 'yes'] },
      { label: 'No ar em menos de 15 min', cells: ['no', 'no', 'yes'] },
    ],
  },
  newTestimonials: {
    title: 'Confiado por negócios reais',
    items: [
      { quote: 'Reduzimos as faltas em 35% no primeiro mês. A IA cuida de todo o agendamento pelo WhatsApp agora.', name: 'Dra. Marina Souza', role: 'Proprietária de clínica odontológica' },
      { quote: 'Nossa loja de móveis recebe 200+ mensagens por dia no WhatsApp. A Botfy lida com 80% delas — e realmente fecha vendas.', name: 'Carlos Mendes', role: 'Gerente de e-commerce' },
      { quote: 'Meu salão está com agenda lotada graças à IA. As clientes adoram a rapidez das respostas.', name: 'Ana Beatriz', role: 'Proprietária de salão' },
    ],
  },
  newCta: {
    title: 'Quantos funcionários digitais seu negócio precisa?',
    body: 'Comece com um. Escale para uma equipe inteira. Plano grátis disponível — sem cartão de crédito.',
    ctaPrimary: 'Começar grátis',
    ctaSecondary: 'Falar com um humano (somos legais também)',
  },
  meta: {
    title: 'Funcionários Digitais para o Seu Negócio | Botfy',
    description: 'Crie funcionários digitais com IA que cuidam de vendas, suporte, agendamento e pagamentos no WhatsApp — como uma equipe real que trabalha 24/7.',
  },
  footer: {
    desc: 'Botfy — Funcionários digitais para o seu negócio.',
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
      ctaButton: 'Começar grátis',
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
    startFreeTrial: 'Empezar gratis',
    product: 'Producto',
    solutions: 'Casos de Uso',
  },
  hero: {
    badge: 'Infraestructura Segura de Agentes IA',
    titleLine1: 'Construye Tu Fuerza de Trabajo en IA.',
    titleLine2: '',
    titleHighlight: 'Vende en Piloto Automático.',
    subtitle: 'Automatiza conversaciones, califica leads y cierra ventas 24/7 — sin contratar, sin complejidad.',
    subtitle2: 'Despliega agentes de IA en minutos y convierte cada mensaje en ingresos.',
    cta: 'Empezar Gratis',
    ctaSecondary: 'Ver demo (2 min)',
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
        desc: 'Gratis para siempre',
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
    button: 'Empezar Gratis',
  },
  kommo: {
    badge: 'Agente IA para WhatsApp y Mensajería',
    heroLine1: 'Empleados digitales',
    heroLine2: 'para tu',
    heroLine3: 'negocio.',
    heroHeadline: 'Todo lo que necesitas para vender — en una plataforma de IA',
    heroSubline: 'Agentes de IA entrenados en tus productos, tu voz y tus reglas — vendiendo, atendiendo y agendando 24/7 en WhatsApp.',
    tryFreeCta: 'Empezar gratis',
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
    ctaBadge: 'Gratis para siempre · Sin tarjeta de crédito',
    ctaHeadline: 'Empieza a usar Botfy gratis',
    ctaSub: 'Empieza a construir tu pipeline de ventas con IA hoy. Sin tarjeta de crédito.',
    tryFree: 'Empezar gratis',
  },
  logoSection: {
    title: 'Confiado por clínicas, tiendas y negocios de servicios...',
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
      { q: '¿Cómo funciona el plan gratuito?', a: 'Botfy ofrece un plan gratuito sin límite de tiempo — puedes usarlo el tiempo que quieras. El plan gratuito incluye acceso a agentes de IA, bandeja omnicanal y funcionalidades esenciales para que experimentes la plataforma con conversaciones reales. No se requiere tarjeta de crédito. Cuando necesites más volumen, analíticas avanzadas o funcionalidades de equipo, puedes actualizar a un plan de pago en cualquier momento.' },
      { q: '¿Funciona con WhatsApp Business API?', a: 'Sí. Botfy se conecta directamente a la API oficial de WhatsApp Business a través de la Cloud API de Meta. Mantienes la propiedad total de tu número de teléfono y cuenta empresarial. Soportamos plantillas de mensajes, botones interactivos, mensajes de lista y envío de medios — todo gestionado desde el panel de Botfy sin necesidad de un BSP separado.' },
      { q: '¿Necesito saber programar?', a: 'Para nada. Botfy está diseñado para equipos de negocio, no para desarrolladores. Configuras flujos de conversación con un constructor visual, entrenas la IA subiendo tu propio contenido (PDFs, sitios web, FAQs) y personalizas la personalidad del agente con prompts de texto simples. Si quieres integraciones más profundas, ofrecemos una API REST y webhooks para tu equipo técnico.' },
      { q: '¿Cuánto tiempo tarda la configuración?', a: 'La mayoría de los clientes tienen su primer agente de IA en vivo en menos de 30 minutos. El proceso es simple: conecta tu canal de mensajería (WhatsApp, Telegram o Web Chat), sube tu contenido de entrenamiento (catálogo de productos, documentos FAQ, políticas de empresa), personaliza el tono y comportamiento del agente, y activa. Nuestro asistente de onboarding te guía en cada paso.' },
      { q: '¿Es compatible con GDPR y LGPD?', a: 'Sí. Todos los datos se almacenan en servidores dentro de la Unión Europea y se procesan en total cumplimiento con GDPR y LGPD de Brasil. Implementamos cifrado de extremo a extremo, controles de acceso basados en roles, políticas automáticas de retención de datos, y proporcionamos herramientas para exportación y solicitudes de eliminación. También mantenemos un Acuerdo de Procesamiento de Datos (DPA) disponible bajo solicitud.' },
      { q: '¿Puedo personalizar la personalidad del agente?', a: 'Absolutamente. Defines la personalidad, tono de voz, estilo de comunicación e incluso las preferencias de idioma de cada agente. ¿Quieres un agente de soporte formal y un asistente de ventas informal? Puedes crear ambos con diferentes personas. La IA se adapta a las directrices de tu marca y responde consistentemente en todos los canales.' },
      { q: '¿Qué canales son compatibles?', a: 'Actualmente, Botfy soporta WhatsApp (vía API oficial de Business), Telegram y Web Chat (widget incrustable para tu sitio web). Todas las conversaciones llegan a una bandeja de entrada unificada donde tu equipo puede monitorear, intervenir o dejar que la IA gestione de forma autónoma. Estamos desarrollando activamente integraciones para Instagram y email.' },
      { q: '¿Cómo se entrena la IA?', a: 'El entrenamiento es basado en contenido y automático. Sube tus documentos (PDF, Word, Excel), pega URLs de sitios web o escribe pares personalizados de preguntas y respuestas. La IA procesa tu contenido usando tecnología avanzada de RAG (Retrieval-Augmented Generation), lo que significa que recupera la información más relevante de tu base de conocimiento antes de generar cada respuesta. Puedes actualizar los datos de entrenamiento en cualquier momento y los cambios surten efecto en minutos.' },
      { q: '¿Puedo tener varios agentes para distintos equipos?', a: 'Sí. Cada agente de IA se puede configurar de forma independiente con sus propios datos de entrenamiento, personalidad, canales y reglas de escalamiento. Por ejemplo, puedes tener un agente de ventas entrenado con tu catálogo de productos, un agente de soporte entrenado con tu documentación de ayuda, y un agente de agendamiento conectado a tu calendario — todos operando simultáneamente y transfiriendo al equipo humano adecuado cuando sea necesario.' },
      { q: '¿Qué pasa cuando la IA no sabe la respuesta?', a: 'Tienes control total sobre el flujo de escalamiento. Puedes configurar la IA para: transferir la conversación a un agente humano o equipo específico, recopilar los datos de contacto del cliente para devolución de llamada, crear un ticket de soporte en tu CRM, o enviar un mensaje personalizado reconociendo la limitación. La IA reconoce su nivel de confianza y sigue tus reglas — nunca inventa respuestas con información que no tiene.' },
      { q: '¿Puedo conectar mi CRM u otras herramientas?', a: 'Sí. Botfy ofrece integraciones nativas con plataformas populares incluyendo HubSpot, Salesforce, RD Station, Pipedrive y Kommo. Para otras herramientas, puedes usar nuestra API REST y sistema de webhooks para enviar datos a prácticamente cualquier plataforma — Zapier, Make (Integromat), n8n o tu propio backend. Datos de leads, transcripciones de conversaciones y etiquetas se pueden sincronizar automáticamente.' },
      { q: '¿Hay un límite de conversaciones mensuales?', a: 'Cada plan incluye una generosa cuota mensual de conversaciones. El plan Starter incluye 1.000 conversaciones/mes, Growth incluye 5.000 y Scale ofrece 20.000+. Si te acercas a tu límite, te notificamos con anticipación para que puedas actualizar sin interrupciones. No hay cargos sorpresa por excedente — siempre sabes exactamente cuánto estás pagando.' },
      { q: '¿En qué idiomas atiende la IA?', a: 'La IA soporta más de 50 idiomas de forma nativa, incluyendo español, portugués, inglés, francés, alemán, italiano y muchos más. El idioma se detecta automáticamente por conversación, así que un solo agente puede atender clientes en diferentes idiomas sin configuración adicional. También puedes restringir un agente a idiomas específicos si lo necesitas.' },
      { q: '¿Puedo probar el agente antes de publicarlo?', a: 'Sí. Todos los planes incluyen un entorno sandbox integrado donde puedes simular conversaciones reales con tu agente de IA. Prueba diferentes escenarios, casos extremos y flujos de escalamiento antes de publicar para los clientes. También puedes compartir un enlace de vista previa privado con tu equipo para revisión y feedback colaborativo antes del lanzamiento.' },
    ],
  },
  problem: {
    title: 'Tu negocio está creciendo. Tu equipo no.',
    body1: 'Estás perdiendo leads porque nadie respondió a las 11 pm. Tu mejor vendedor está atrapado copiando y pegando el mismo follow-up por la 50ª vez. Contratar es lento, capacitar es más lento, y cada canal nuevo significa más caos.',
    body2: 'Los chatbots tradicionales lo empeoran — scripts robóticos que frustran a los clientes y dañan tu marca. Las herramientas genéricas de IA suenan inteligentes en demos pero alucinan en producción.',
    body3: 'No necesitas otro bot. Necesitas empleados digitales.',
  },
  whatIsBotfy: {
    title: 'Botfy crea empleados digitales para tu negocio.',
    body1: 'Un empleado digital es un agente de IA entrenado en tus productos, tu tono y tus reglas. Responde clientes por WhatsApp, agenda citas, envía facturas y hace follow-up — exactamente como un gran miembro del equipo que nunca duerme.',
    body2: 'Sin código. Sin ingeniería de prompts. Solo sube tus documentos, conecta tus canales y activa en 15 minutos.',
  },
  capabilities: {
    title: 'Qué pueden hacer tus empleados digitales',
    subtitle: 'Todo lo que hace un gran miembro del equipo — en piloto automático, 24/7.',
    items: [
      { title: 'Soporte al cliente', desc: 'Responde FAQs, resuelve quejas y escala a humanos solo cuando es necesario.' },
      { title: 'Calificación de leads', desc: 'Hace las preguntas correctas, puntúa leads y dirige prospectos calientes a tu equipo de ventas.' },
      { title: 'Agendamiento de citas', desc: 'Verifica disponibilidad, reserva horarios, envía confirmaciones y recordatorios automáticamente.' },
      { title: 'Pagos y facturación', desc: 'Envía links de pago, genera facturas y confirma transacciones dentro del chat.' },
      { title: 'Recomendaciones de productos', desc: 'Sugiere el producto correcto basándose en el contexto de la conversación y el historial de compras.' },
      { title: 'Soporte multi-idioma', desc: 'Habla 50+ idiomas nativamente. Detecta y responde automáticamente en el idioma del cliente.' },
    ],
  },
  newHowItWorks: {
    title: 'Monta tu equipo en 15 minutos. Sin código.',
    subtitle: 'Tres pasos para tu primer empleado digital.',
    steps: [
      { title: 'Crea tus agentes', desc: 'Sube tus documentos, FAQs y catálogo de productos. La IA aprende tu negocio al instante.' },
      { title: 'Conecta tus canales', desc: 'WhatsApp, Instagram, Telegram, Web Chat — conecta cada canal que usan tus clientes.' },
      { title: 'Activa', desc: 'Activa y observa cómo tus empleados digitales manejan conversaciones, califican leads y cierran ventas.' },
    ],
    noCode: 'Sin desarrolladores. Sin agencias. Sin configuración técnica.',
  },
  useCases: {
    title: 'Empleados digitales en acción',
    subtitle: 'Mira cómo funcionan en diferentes industrias.',
    cases: [
      { emoji: '🏥', industry: 'Clínicas médicas y dentales', desc: 'Los pacientes agendan citas por WhatsApp 24/7. La IA confirma, recuerda y reprograma — reduciendo inasistencias hasta un 40%.' },
      { emoji: '🛋️', industry: 'Muebles y retail', desc: 'Los clientes exploran productos, reciben recomendaciones y links de pago — todo en una sola conversación de WhatsApp.' },
      { emoji: '💇', industry: 'Belleza y bienestar', desc: 'Los salones llenan sus agendas automáticamente. La IA maneja reservas, reprogramaciones y mensajes de follow-up después de cada visita.' },
      { emoji: '🏠', industry: 'Inmobiliaria', desc: 'Los agentes califican compradores al instante, comparten detalles con fotos y agendan visitas — sin perder ninguna consulta.' },
      { emoji: '🍽️', industry: 'Restaurantes y comida', desc: 'Recibe reservas, comparte menús, maneja restricciones alimentarias y confirma reservaciones — todo por WhatsApp, 24/7.' },
      { emoji: '🏋️', industry: 'Fitness y gimnasios', desc: 'Los miembros reservan clases, consultan horarios y renuevan membresías automáticamente. La IA maneja cancelaciones y listas de espera.' },
    ],
  },
  comparison: {
    title: 'No toda IA es igual',
    subtitle: 'Mira cómo Botfy se compara con las alternativas.',
    headers: ['Chatbot tradicional', 'IA genérica', 'Botfy'],
    rows: [
      { label: 'Entrenado en tu negocio', cells: ['no', 'partial', 'yes'] },
      { label: 'WhatsApp nativo', cells: ['no', 'no', 'yes'] },
      { label: 'Agenda citas', cells: ['no', 'no', 'yes'] },
      { label: 'Envía links de pago', cells: ['no', 'no', 'yes'] },
      { label: 'Multi-idioma (50+)', cells: ['no', 'yes', 'yes'] },
      { label: 'Configuración sin código', cells: ['partial', 'no', 'yes'] },
      { label: 'Integración con CRM', cells: ['partial', 'partial', 'yes'] },
      { label: 'Escalamiento a humanos', cells: ['partial', 'no', 'yes'] },
      { label: 'Voz y tono de marca', cells: ['no', 'partial', 'yes'] },
      { label: 'Activo en menos de 15 min', cells: ['no', 'no', 'yes'] },
    ],
  },
  newTestimonials: {
    title: 'Confiado por negocios reales',
    items: [
      { quote: 'Redujimos las inasistencias en un 35% en el primer mes. La IA maneja todo nuestro agendamiento por WhatsApp ahora.', name: 'Dra. Marina Souza', role: 'Propietaria de clínica dental' },
      { quote: 'Nuestra tienda de muebles recibe 200+ mensajes de WhatsApp al día. Botfy maneja el 80% de ellos — y realmente cierra ventas.', name: 'Carlos Mendes', role: 'Gerente de e-commerce' },
      { quote: 'Mi salón está completamente reservado gracias a la IA. Las clientas aman la rapidez de las respuestas.', name: 'Ana Beatriz', role: 'Propietaria de salón' },
    ],
  },
  newCta: {
    title: '¿Cuántos empleados digitales necesita tu negocio?',
    body: 'Empieza con uno. Escala a un equipo completo. Plan gratis disponible — sin tarjeta de crédito.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Habla con un humano (somos amables también)',
  },
  meta: {
    title: 'Empleados Digitales para Tu Negocio | Botfy',
    description: 'Crea empleados digitales con IA que manejan ventas, soporte, agendamiento y pagos en WhatsApp — como un equipo real que trabaja 24/7.',
  },
  footer: {
    desc: 'Botfy — Empleados digitales para tu negocio.',
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
      ctaButton: 'Empezar gratis',
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
      orEmail: 'O envíanos un correo directamente a',
    },
  },
}

export const translations: Record<Language, Translations> = { en, pt, es }
