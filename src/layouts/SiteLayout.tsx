import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { BotpressWebchat } from '../components/BotpressWebchat'

export function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const isHome = location.pathname === '/'
    const targets = isHome
      ? Array.from(document.querySelectorAll<HTMLElement>('.homepage [data-home-reveal]'))
      : Array.from(document.querySelectorAll<HTMLElement>('.site-main section, .site-main .illustration-slot'))
        .filter((target) => !target.closest('.home-hero'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal')
      if (isHome) target.style.setProperty('--home-reveal-delay', `${(index % 4) * 75}ms`)
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" key={location.pathname} className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
      <BotpressWebchat />
    </div>
  )
}
