import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}

const variants = {
  primary:
    'bg-accent-purple text-white hover:bg-accent-purple/90 shadow-md active:translate-y-[1px] active:shadow-sm',
  secondary:
    'bg-white text-text-primary border border-gray-200 hover:border-accent-purple/30 hover:bg-gray-50',
  ghost:
    'bg-transparent hover:bg-gray-100 text-text-secondary hover:text-text-primary',
  outline:
    'bg-transparent text-text-primary border border-gray-200 hover:border-accent-purple/40 hover:bg-accent-purple/5',
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
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono font-bold uppercase tracking-widest transition-[background-color,border-color,color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
