import { cn } from '../../utils/cn'

type SectionEyebrowProps = {
  children: string
  color?: 'blue' | 'red'
  align?: 'left' | 'center'
}

export function SectionEyebrow({ children, color = 'blue', align = 'left' }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        'font-mono text-label font-bold uppercase',
        color === 'blue' ? 'text-brand-blue' : 'text-brand-red',
        align === 'center' && 'text-center',
      )}
    >
      {children}
    </p>
  )
}
