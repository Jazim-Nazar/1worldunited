import { useCountUp } from '../../hooks/useCountUp'

type CountUpNumberProps = {
  end: number
  suffix?: string
  duration?: number
}

export function CountUpNumber({ end, suffix = '+', duration }: CountUpNumberProps) {
  const value = useCountUp(end, { duration })

  return (
    <span aria-label={`${end}${suffix}`}>
      <span aria-hidden>{value}</span>
      <span aria-hidden>{suffix}</span>
    </span>
  )
}
