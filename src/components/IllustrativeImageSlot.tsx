type IllustrativeImageSlotProps = {
  title: string
  variant: 'lobby' | 'junior' | 'suite' | 'premium'
  compact?: boolean
}

export function IllustrativeImageSlot({ title, variant, compact = false }: IllustrativeImageSlotProps) {
  return (
    <figure className={`illustration-slot illustration-slot--${variant}${compact ? ' illustration-slot--compact' : ''}`}>
      <div className="illustration-slot__scene" aria-hidden="true">
        <span className="illustration-slot__shape illustration-slot__shape--one" />
        <span className="illustration-slot__shape illustration-slot__shape--two" />
        <span className="illustration-slot__line" />
      </div>
      <figcaption className="illustration-slot__caption">
        <span className="illustration-slot__status">Illustrative image pending generation</span>
        <strong>{title}</strong>
        <span>Not a photograph of Oba’s Rest Hotel</span>
      </figcaption>
    </figure>
  )
}
