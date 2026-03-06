export function GlobeFallback() {
  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center">
      <div className="w-56 h-56 rounded-full relative"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #8b5cf6, #7c3aed 50%, #4c1d95)',
          boxShadow: '0 0 50px rgba(139,92,246,0.3), 0 0 100px rgba(124,58,237,0.15), inset 0 -8px 24px rgba(0,0,0,0.2)',
        }}
      >
        {/* Grid lines */}
        <div className="absolute inset-0 rounded-full border border-white/15" />
        <div className="absolute inset-3 rounded-full border border-white/10" />
        <div className="absolute inset-6 rounded-full border border-white/8" />
        <div className="absolute inset-10 rounded-full border border-white/5" />

        {/* Glowing dots */}
        {[
          { top: '18%', left: '28%' },
          { top: '32%', left: '62%' },
          { top: '48%', left: '22%' },
          { top: '52%', left: '72%' },
          { top: '68%', left: '42%' },
          { top: '22%', left: '48%' },
          { top: '62%', left: '32%' },
          { top: '38%', left: '42%' },
        ].map((pos, i) => (
          <div key={i} className="absolute" style={pos}>
            <div className="w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: '0 0 6px 2px rgba(196,181,253,0.8)' }}
            />
          </div>
        ))}

        {/* Atmosphere glow */}
        <div className="absolute -inset-4 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, transparent 50%, rgba(139,92,246,0.1) 70%, transparent 85%)' }}
        />
      </div>
    </div>
  )
}
