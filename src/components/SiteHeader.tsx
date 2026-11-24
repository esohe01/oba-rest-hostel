import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import crownLogo from '../assets/oba-crown-logo.png'
import { EnquiryLink } from './EnquiryLink'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Rooms & Suites', to: '/rooms' },
  { label: 'Explore', to: '/#home-rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Contact', to: '/contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = useLocation().pathname === '/'

  return (
    <header className={`site-header${isHome ? ' site-header--home' : ''}`}>
      <div className="site-header__inner">
        <NavLink className="brand" to="/" aria-label="Oba’s Rest Hotel home">
          <img className="brand__crown" src={crownLogo} alt="" aria-hidden="true" />
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
          {navigation.map(({ label, to }) => to.includes('#') ? (
            <Link key={to} to={to} className="primary-nav__link" onClick={() => setMenuOpen(false)}>{label}</Link>
          ) : (
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
          <EnquiryLink className="primary-nav__cta" onClick={() => setMenuOpen(false)}>Reservation</EnquiryLink>
        </nav>
        <EnquiryLink className="site-header__cta">Reservation</EnquiryLink>
      </div>
    </header>
  )
}
