/** Keeps existing 2D pulsing rings for mobile / low-end devices */
export function AICoreFallback() {
  return (
    <>
      {/* Dot grid overlay */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '18px 18px'
        }} />
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
        <div className="absolute w-28 h-28 rounded-full border border-white/20 animate-pulse-ring" />
        <div className="absolute w-28 h-28 rounded-full border border-white/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />
      </div>
    </>
  )
}
