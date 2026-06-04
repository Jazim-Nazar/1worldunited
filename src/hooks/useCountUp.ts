import { useEffect, useRef, useState } from 'react'

type UseCountUpOptions = {
  duration?: number
  start?: number
}

export function useCountUp(end: number, { duration = 1400, start = 0 }: UseCountUpOptions = {}) {
  const [value, setValue] = useState(start)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      frameRef.current = requestAnimationFrame(() => setValue(end))
      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }

    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [duration, end, start])

  return value
}
