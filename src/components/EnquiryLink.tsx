import type { MouseEvent, PropsWithChildren } from 'react'
import { Link } from 'react-router'

type EnquiryLinkProps = PropsWithChildren<{
  appearance?: 'primary' | 'quiet'
  className?: string
  onClick?: () => void
  openChat?: boolean
}>

export function EnquiryLink({ children, appearance = 'primary', className = '', onClick, openChat = false }: EnquiryLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    if (!openChat) return

    const botpress = (window as Window & { botpress?: { open?: () => void } }).botpress
    if (!botpress?.open) return

    event.preventDefault()
    botpress.open()
  }

  return (
    <Link className={`enquiry-link enquiry-link--${appearance} ${className}`.trim()} to="/contact" onClick={handleClick}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}
