import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
  accent?: 'blue' | 'red' | 'black'
}

export type Service = {
  id: string
  title: string
  description: string
}

export type PortfolioItem = {
  title: string
  description: string
  image: string
  alt: string
}

export type FooterColumn = {
  title: string
  lines: string[]
  icon?: LucideIcon
}
