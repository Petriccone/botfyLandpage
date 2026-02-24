import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}

const variants = {
  primary:
    'bg-accent-purple text-black hover:bg-white shadow-[4px_4px_0px_rgba(255,255,255,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  secondary:
    'bg-transparent text-white border border-white/20 hover:border-accent-purple hover:bg-accent-purple/5',
  ghost:
    'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white',
  outline:
    'bg-transparent text-white border border-white/10 hover:border-accent-purple/50 hover:bg-accent-purple/5',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-10 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
  xl: 'h-16 px-10 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-purple disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
