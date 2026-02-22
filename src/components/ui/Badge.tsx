import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'popular'
  className?: string
}

const badgeVariants = {
  default: 'bg-white/[0.06] border-white/[0.1] text-gray-300',
  success: 'bg-green-500/20 border-green-500/30 text-green-400',
  popular: 'bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white',
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
