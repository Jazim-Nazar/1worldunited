type ImagePlaceholderProps = {
  width: number
  height: number
  description: string
}

export function ImagePlaceholder({ width, height, description }: ImagePlaceholderProps) {
  return (
    <div
      aria-label={description}
      className="grid place-items-center border border-dashed border-line-strong bg-surface-muted p-6 text-center font-mono text-label uppercase text-ink-muted"
      style={{ aspectRatio: `${width} / ${height}` }}
      role="img"
    >
      Missing asset: {description} ({width}x{height})
    </div>
  )
}
