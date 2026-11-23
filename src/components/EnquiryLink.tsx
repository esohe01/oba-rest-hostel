import type { PropsWithChildren } from 'react'
import { Link } from 'react-router'

type EnquiryLinkProps = PropsWithChildren<{
  appearance?: 'primary' | 'quiet'
  className?: string
}>

export function EnquiryLink({ children, appearance = 'primary', className = '' }: EnquiryLinkProps) {
  return (
    <Link className={`enquiry-link enquiry-link--${appearance} ${className}`.trim()} to="/contact">
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}
