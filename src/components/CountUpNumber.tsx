import { useEffect, useRef, useState } from 'react'

type CountUpNumberProps = {
  value: number
  className: string
  accessibleText: string
  prefix?: string
  suffix?: string
  duration?: number
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function CountUpNumber({
  value,
  className,
  accessibleText,
  prefix = '',
  suffix = '',
  duration = 1800,
}: CountUpNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(() => prefersReducedMotion() ? value : 0)

  useEffect(() => {
    const element = numberRef.current
    if (!element) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !('IntersectionObserver' in window)) {
      setDisplayValue(value)
      return
    }

    let hasStarted = false
    let animationFrame = 0
    let startTime: number | undefined

    const observer = new IntersectionObserver((entries) => {
      if (hasStarted || !entries.some((entry) => entry.isIntersecting)) return
      hasStarted = true
      observer.unobserve(element)

      const animate = (time: number) => {
        startTime ??= time
        const progress = Math.min((time - startTime) / duration, 1)
        const easedProgress = progress < 0.5
          ? 4 * progress ** 3
          : 1 - ((-2 * progress + 2) ** 3) / 2

        setDisplayValue(progress === 1 ? value : Math.round(value * easedProgress))
        if (progress < 1) animationFrame = window.requestAnimationFrame(animate)
      }

      animationFrame = window.requestAnimationFrame(animate)
    }, { threshold: 0.35 })

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return
      hasStarted = true
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
      setDisplayValue(value)
    }

    motionPreference.addEventListener('change', handleMotionPreferenceChange)
    observer.observe(element)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
      motionPreference.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [duration, value])

  const formattedValue = new Intl.NumberFormat('en-NG', { maximumFractionDigits: 2 }).format(displayValue)
  const finalText = `${prefix}${new Intl.NumberFormat('en-NG', { maximumFractionDigits: 2 }).format(value)}${suffix}`

  return (
    <span className={className} ref={numberRef}>
      <span aria-hidden="true">{prefix}{formattedValue}{suffix}</span>
      <span className="visually-hidden">{accessibleText || finalText}</span>
    </span>
  )
}
