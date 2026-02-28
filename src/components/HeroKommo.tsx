import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../hooks/useLanguage'

export function HeroKommo() {
  const { t, language } = useLanguage()
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } })

    tl.from('.hero-text-1', { y: 60, opacity: 0, delay: 0.2 })
      .from('.hero-text-2', { y: 60, opacity: 0 }, '-=0.9')
      .from('.hero-cta', { y: 30, opacity: 0 }, '-=0.8')
  }, { scope: container })

  // Preset B Mood Image: luxury office / dark marble vibes
  const bgImage = "https://images.unsplash.com/photo-1518005020480-10f43bc54005?q=80&w=2574&auto=format&fit=crop"

  return (
    <section
      ref={container}
      className="relative h-[100dvh] w-full flex items-end overflow-hidden bg-primary"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>

      {/* Content Area - Bottom Left Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="max-w-4xl">
          {/* Prefix - Sans Bold */}
          <h1 className="hero-text-1 font-heading font-extrabold text-background tracking-tight leading-[0.9] mb-2 uppercase text-[clamp(2.5rem,8vw,5.5rem)]">
            {language === 'en' ? 'Smart AI Workforce meets' : 'A Automação Inteligente encontra'}
          </h1>

          {/* Main Headline - Massive Serif Italic */}
          <h2 className="hero-text-2 font-drama italic text-accent leading-[1] mb-10 text-[clamp(4rem,15vw,13rem)]" style={{ marginLeft: '-0.05em' }}>
            {language === 'en' ? 'Infinite Scale.' : 'a Escala Infinita.'}
          </h2>

          <div className="hero-cta flex flex-wrap gap-4 items-center">
            <a
              href="https://botfyai.vercel.app/register"
              className="magnetic-button group h-14 px-10 flex items-center justify-center bg-accent text-primary font-bold text-base transition-all"
            >
              <span className="bg-layer !bg-background"></span>
              <span className="text-layer group-hover:text-primary transition-colors duration-400">
                {t.nav.startFreeTrial}
              </span>
            </a>

            <p className="text-background/40 font-mono text-[11px] tracking-widest uppercase ml-2 hidden sm:block">
              {t.nav.bookDemo} — botfy.io 2026
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <p className="font-mono text-[9px] text-background/30 vertical-text tracking-[0.3em] uppercase rotate-90 origin-right">
          SCROLL TO EXPLORE
        </p>
      </div>
    </section>
  )
}
