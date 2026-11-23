type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro__description">{description}</p>
      <div className="page-intro__placeholder" role="status">
        <span className="placeholder-dot" aria-hidden="true" />
        Foundation page — approved content will be added in a later stage.
      </div>
    </section>
  )
}
