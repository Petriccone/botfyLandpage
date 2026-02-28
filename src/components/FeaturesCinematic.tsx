import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../hooks/useLanguage'
import { Plus, Check, Globe, Shield, MessageSquare, Zap } from 'lucide-react'

export function FeaturesCinematic() {
    const { t, language } = useLanguage()
    const container = useRef(null)

    return (
        <section ref={container} className="py-24 bg-background text-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="font-heading font-black text-4xl uppercase tracking-tighter mb-4">
                        {language === 'en' ? 'Functional Artifacts' : 'Artefatos Funcionais'}
                    </h2>
                    <p className="font-drama italic text-2xl text-accent">
                        {language === 'en' ? 'Designed for high-performance operations.' : 'Desenhado para operações de alta performance.'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1: Diagnostic Scrambler (Multi-Agent) */}
                    <FeatureCard
                        title={language === 'en' ? 'Multi-Agent Fleet' : 'Frota Multi-Agente'}
                        desc={language === 'en' ? 'Deploy specialized agents for every role.' : 'Instale agentes especializados para cada função.'}
                    >
                        <ScramblerUI />
                    </FeatureCard>

                    {/* Card 2: Telemetry Typewriter (Document Training) */}
                    <FeatureCard
                        title={language === 'en' ? 'Knowledge Synthesis' : 'Síntese de Conhecimento'}
                        desc={language === 'en' ? 'Your AI learns from your proprietary data.' : 'Sua IA aprende com seus dados proprietários.'}
                    >
                        <TypewriterUI />
                    </FeatureCard>

                    {/* Card 3: Protocol Scheduler (Omnichannel) */}
                    <FeatureCard
                        title={language === 'en' ? 'Omnichannel Protocol' : 'Protocolo Omnichannel'}
                        desc={language === 'en' ? 'Unified intelligence across all channels.' : 'Inteligência unificada em todos os canais.'}
                    >
                        <SchedulerUI />
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ title, desc, children }: { title: string, desc: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-[2.5rem] p-10 border border-primary/5 shadow-cinematic flex flex-col h-[520px] group hover:border-accent/30 transition-colors duration-500">
            <div className="mb-8">
                <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
            </div>
            <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

/* Card 1: Diagnostic Scrambler */
function ScramblerUI() {
    const [items, setItems] = useState(['Lead Gen', 'Sales Rep', 'Support Hero'])
    const container = useRef(null)

    useGSAP(() => {
        const cycle = () => {
            gsap.to('.scramble-item', {
                y: -40,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => {
                    setItems(prev => {
                        const next = [...prev]
                        next.push(next.shift()!)
                        return next
                    })
                    gsap.fromTo('.scramble-item',
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.7)' }
                    )
                }
            })
        }
        const interval = setInterval(cycle, 3000)
        return () => clearInterval(interval)
    }, { scope: container })

    return (
        <div ref={container} className="flex flex-col gap-3 w-full max-w-[200px]">
            {items.map((item, i) => (
                <div
                    key={item}
                    className={`
            scramble-item p-4 rounded-2xl border flex items-center gap-3 transition-colors
            ${i === 0 ? 'bg-accent border-accent text-primary' : 'bg-background border-primary/5 text-primary/40'}
          `}
                    style={{ transform: `scale(${1 - i * 0.05})`, opacity: 1 - i * 0.3 }}
                >
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-primary/20'}`} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{item}</span>
                </div>
            ))}
        </div>
    )
}

/* Card 2: Telemetry Typewriter */
function TypewriterUI() {
    const [text, setText] = useState('')
    const [phase, setPhase] = useState(0)
    const phrases = [
        'ANALYZING PDF_STRUCTURE...',
        'VECTORIZING_KNOWLEDGE_BASE...',
        'CONTEXT_INJECTION_COMPLETE.',
        'AGENT_READY_TO_SERVE.'
    ]

    useEffect(() => {
        let charIndex = 0
        let currentPhrase = phrases[phase]
        const timer = setInterval(() => {
            setText(currentPhrase.substring(0, charIndex))
            charIndex++
            if (charIndex > currentPhrase.length) {
                clearInterval(timer)
                setTimeout(() => {
                    setPhase((p) => (p + 1) % phrases.length)
                }, 1500)
            }
        }, 50)
        return () => clearInterval(timer)
    }, [phase])

    return (
        <div className="bg-primary p-6 rounded-[2rem] w-full max-w-[240px] shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[9px] text-accent tracking-tighter uppercase font-bold">Live Telemetry</span>
            </div>
            <div className="min-h-[60px]">
                <p className="font-mono text-[11px] text-background leading-relaxed">
                    {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink" />
                </p>
            </div>
            <div className="mt-6 flex flex-col gap-1.5 opacity-40">
                <div className="h-[2px] bg-background/20 w-full" />
                <div className="h-[2px] bg-background/20 w-2/3" />
            </div>
        </div>
    )
}

/* Card 3: Protocol Scheduler (SVG Cursor) */
function SchedulerUI() {
    const cursorRef = useRef(null)
    const [activeDay, setActiveDay] = useState<number | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 })

        // Reset
        tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0 })

        // Entry
        tl.to(cursorRef.current, { opacity: 1, duration: 0.5 })

        // Move to Wednesday (index 3)
        tl.to(cursorRef.current, { x: 60, y: 20, duration: 1.5, ease: 'power2.inOut' })

        // Click
        tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 })
            .call(() => setActiveDay(3))
            .to(cursorRef.current, { scale: 1, duration: 0.2 })

        // Move to Save Button
        tl.to(cursorRef.current, { x: 100, y: 80, duration: 1.2, ease: 'power3.inOut' })

        // Click Save
        tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 })
            .to(cursorRef.current, { scale: 1, duration: 0.2 })

        // Exit
        tl.to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 1 })
            .call(() => setActiveDay(null))
    }, [])

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <div className="relative bg-background border border-primary/5 p-8 rounded-[2rem] w-full max-w-[280px]">
            <div className="grid grid-cols-7 gap-2 mb-8">
                {days.map((day, i) => (
                    <div
                        key={i}
                        className={`
              aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold font-mono transition-all duration-300
              ${activeDay === i ? 'bg-accent text-primary scale-110 shadow-lg' : 'bg-primary/5 text-primary/30'}
            `}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="h-10 w-full bg-primary/5 rounded-xl flex items-center justify-center">
                <div className={`h-2 w-1/3 rounded-full transition-colors ${activeDay !== null ? 'bg-accent' : 'bg-primary/10'}`} />
            </div>

            {/* Animated SVG Cursor */}
            <svg
                ref={cursorRef}
                viewBox="0 0 24 24"
                className="absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none text-accent drop-shadow-lg"
            >
                <path
                    fill="currentColor"
                    d="M3,3l18,11.5l-8.5,1.5L9,24L3,3z"
                    stroke="white"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}
