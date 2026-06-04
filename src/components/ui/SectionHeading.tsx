import type { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  id?: string
}

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className="mt-3 max-w-3xl font-display text-section uppercase text-ink">
      {children}
    </h2>
  )
}
