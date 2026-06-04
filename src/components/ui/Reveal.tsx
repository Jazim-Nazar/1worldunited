import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ amount: 0.25, once: true }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
