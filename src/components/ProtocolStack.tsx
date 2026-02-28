import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export function ProtocolStack() {
    const { language } = useLanguage()
    const container = useRef(null)

    const steps = [
        {
            num: '01',
            title: language === 'en' ? 'Infrastructure Setup' : 'Configuração de Infraestrutura',
            desc: language === 'en' ? 'Deploy your dedicated AI node in the Frankfurt region with sub-100ms latency.' : 'Implante seu nó dedicado de IA na região de Frankfurt com latência abaixo de 100ms.',
            animation: <GeometricAnimation />
        },
        {
            num: '02',
            title: language === 'en' ? 'Knowledge Parsing' : 'Parsing de Conhecimento',
            desc: language === 'en' ? 'Deep-scan your proprietary data models to build a custom vector knowledge base.' : 'Escaneie seus modelos de dados proprietários para construir uma base de conhecimento vetorial.',
            animation: <LaserScanAnimation />
        },
        {
            num: '03',
            title: language === 'en' ? 'Global Pulse' : 'Pulsação Global',
            desc: language === 'en' ? 'Seamlessly serve intelligent responses across WhatsApp, Web and APIs 24/7.' : 'Sirva respostas inteligentes através de WhatsApp, Web e APIs 24/7 sem atrito.',
            animation: <ECGAnimation />
        }
    ]

    useGSAP(() => {
        const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[]

        cards.forEach((card, i) => {
            if (i === cards.length - 1) return

            ScrollTrigger.create({
                trigger: card,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                animation: gsap.to(card, {
                    scale: 0.92,
                    opacity: 0.4,
                    filter: 'blur(10px)',
                    ease: 'none'
                })
            })
        })
    }, { scope: container })

    return (
        <section ref={container} className="relative bg-primary">
            {steps.map((step, i) => (
                <div
                    key={i}
                    className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-primary border-t border-white/5"
                >
                    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
                        {/* Text Content */}
                        <div className="order-2 md:order-1">
                            <span className="font-mono text-accent text-sm tracking-[0.5em] mb-4 block">STEP {step.num}</span>
                            <h3 className="font-heading font-extrabold text-background text-[clamp(2rem,5vw,3.5rem)] leading-none mb-6">
                                {step.title}
                            </h3>
                            <p className="text-background/50 text-xl leading-relaxed max-w-md">
                                {step.desc}
                            </p>
                        </div>

                        {/* Animation Area */}
                        <div className="order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[500px]">
                            {step.animation}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

function GeometricAnimation() {
    const ref = useRef(null)
    useGSAP(() => {
        gsap.to(ref.current, {
            rotate: 360,
            duration: 10,
            repeat: -1,
            ease: 'none'
        })
    }, [])

    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            <div ref={ref} className="absolute inset-0 border-[1px] border-accent/20 rounded-full" />
            <div ref={ref} className="absolute inset-4 border-[1px] border-accent/40 rounded-[20%] rotate-45" />
            <div ref={ref} className="absolute inset-8 border-[2px] border-accent rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
            </div>
        </div>
    )
}

function LaserScanAnimation() {
    const line = useRef(null)
    useGSAP(() => {
        gsap.to(line.current, {
            top: '100%',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
    }, [])

    return (
        <div className="relative w-64 h-80 bg-background/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 gap-1 p-4 opacity-20">
                {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="bg-accent rounded-sm h-1" />
                ))}
            </div>
            <div
                ref={line}
                className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(201,168,76,1)] z-10"
            />
        </div>
    )
}

function ECGAnimation() {
    const path = useRef<SVGPathElement>(null)
    useGSAP(() => {
        if (!path.current) return
        const length = path.current.getTotalLength()
        gsap.fromTo(path.current,
            { strokeDashoffset: length },
            { strokeDashoffset: 0, duration: 1.5, repeat: -1, ease: 'none' }
        )
    }, [])

    return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm text-accent">
            <path
                ref={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="1000"
                d="M0,50 L40,50 L45,30 L55,70 L60,50 L100,50 L105,20 L115,80 L120,50 L200,50"
            />
        </svg>
    )
}
