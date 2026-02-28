import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../hooks/useLanguage'

gsap.registerPlugin(ScrollTrigger)

export function PhilosophyManifesto() {
    const { language } = useLanguage()
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('.manifesto-line-1', { y: 30, opacity: 0, duration: 1 })
            .from('.manifesto-line-2', { y: 50, opacity: 0, duration: 1.2 }, '-=0.6')
    }, { scope: container })

    return (
        <section
            ref={container}
            className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden py-32"
        >
            {/* Organic Texture Parallax */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                    alt="Texture"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-primary/80" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p className="manifesto-line-1 font-heading text-background/40 text-lg md:text-xl mb-8 tracking-tight">
                    {language === 'en'
                        ? 'Most AI tools focus on: simple chat interfaces.'
                        : 'A maioria das ferramentas de IA foca em: interfaces de chat simples.'}
                </p>

                <h2 className="manifesto-line-2 font-heading font-extrabold text-background leading-[1.1] tracking-tighter text-[clamp(2.5rem,7vw,5rem)]">
                    {language === 'en' ? 'We focus on:' : 'Nós focamos em:'} <br />
                    <span className="font-drama italic text-accent block mt-4 text-[clamp(3.5rem,10vw,8rem)]">
                        {language === 'en' ? 'Autonomous Performance.' : 'Performance Autônoma.'}
                    </span>
                </h2>
            </div>
        </section>
    )
}
