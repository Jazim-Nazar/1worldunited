import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        'grid size-10 place-items-center border border-line bg-white text-ink transition hover:border-brand-blue hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
