import { NavLink } from 'react-router'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Rooms & Suites', to: '/rooms' },
  { label: 'Amenities & Guest Info', to: '/amenities' },
  { label: 'Location & Contact', to: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="brand" to="/" aria-label="Oba’s Rest Hotel home">
          <span className="brand__mark" aria-hidden="true">O</span>
          <span className="brand__name">Oba’s Rest Hotel</span>
        </NavLink>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `primary-nav__link${isActive ? ' is-active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
