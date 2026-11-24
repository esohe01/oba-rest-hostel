import { useState } from 'react'
import { NavLink } from 'react-router'
import { EnquiryLink } from './EnquiryLink'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Rooms & Suites', to: '/rooms' },
  { label: 'Amenities & Guest Info', to: '/amenities' },
  { label: 'Location & Contact', to: '/contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand" to="/" aria-label="Oba’s Rest Hotel home">
          <span className="brand__mark" aria-hidden="true">O</span>
          <span className="brand__name">Oba’s Rest Hotel</span>
        </NavLink>
        <button
          className="primary-nav__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          <span className="visually-hidden">{menuOpen ? 'Close' : 'Open'} navigation menu</span>
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `primary-nav__link${isActive ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <EnquiryLink className="primary-nav__cta" onClick={() => setMenuOpen(false)}>Request a booking</EnquiryLink>
        </nav>
        <EnquiryLink className="site-header__cta">Request a booking</EnquiryLink>
      </div>
    </header>
  )
}
