import type { PropsWithChildren } from 'react'

type ContentContainerProps = PropsWithChildren<{
  className?: string
}>

export function ContentContainer({ children, className = '' }: ContentContainerProps) {
  return <div className={`content-container ${className}`.trim()}>{children}</div>
}
