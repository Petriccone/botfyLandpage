import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'popular'
  className?: string
}

const badgeVariants = {
  default: 'bg-white/[0.06] border-white/[0.1] text-text-secondary',
  success: 'bg-accent-blue/20 border-accent-blue/30 text-accent-blue',
  popular: 'bg-accent-purple border-none text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
