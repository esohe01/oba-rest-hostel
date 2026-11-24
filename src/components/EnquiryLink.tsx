import type { PropsWithChildren } from 'react'
import { Link } from 'react-router'

type EnquiryLinkProps = PropsWithChildren<{
  appearance?: 'primary' | 'quiet'
  className?: string
  onClick?: () => void
}>

export function EnquiryLink({ children, appearance = 'primary', className = '', onClick }: EnquiryLinkProps) {
  return (
    <Link className={`enquiry-link enquiry-link--${appearance} ${className}`.trim()} to="/contact" onClick={onClick}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}
