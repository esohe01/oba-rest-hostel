import { Link } from 'react-router'
import { EnquiryLink } from './EnquiryLink'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" to="/">Oba’s Rest Hotel</Link>
        <p>Airport Road, Benin City, Edo State, Nigeria</p>
        <a className="site-footer__phone" href="tel:08163186622">Contact reception · 08163186622</a>
        <p className="site-footer__note">Reception confirms every booking.</p>
        <EnquiryLink appearance="quiet" className="site-footer__enquiry">Make an enquiry</EnquiryLink>
        <span className="site-footer__copyright">© {new Date().getFullYear()} Oba’s Rest Hotel</span>
      </div>
    </footer>
  )
}
