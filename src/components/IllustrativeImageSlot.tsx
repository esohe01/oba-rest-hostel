type IllustrativeImageSlotProps = {
  title: string
  variant: 'lobby' | 'junior' | 'suite' | 'premium'
  compact?: boolean
  src?: string
  alt?: string
  objectPosition?: string
  priority?: boolean
  showCaption?: boolean
}

export function IllustrativeImageSlot({ title, variant, compact = false, src, alt = '', objectPosition = 'center', priority = false, showCaption = true }: IllustrativeImageSlotProps) {
  return (
    <figure className={`illustration-slot illustration-slot--${variant}${compact ? ' illustration-slot--compact' : ''}`}>
      {src ? (
        <img
          className="illustration-slot__image"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ objectPosition }}
        />
      ) : (
        <div className="illustration-slot__scene" aria-hidden="true">
          <span className="illustration-slot__shape illustration-slot__shape--one" />
          <span className="illustration-slot__shape illustration-slot__shape--two" />
          <span className="illustration-slot__line" />
        </div>
      )}
      {showCaption && (
        <figcaption className="illustration-slot__caption">
          <span className="illustration-slot__status">{src ? 'Illustrative AI-generated concept' : 'Illustrative image pending generation'}</span>
          <strong>{title}</strong>
          <span>Not a photograph of Oba’s Rest Hotel</span>
        </figcaption>
      )}
    </figure>
  )
}
