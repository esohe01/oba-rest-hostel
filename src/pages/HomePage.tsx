import { Link } from 'react-router'
import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { SectionHeading } from '../components/SectionHeading'

const pageLinks = [
  { eyebrow: 'Stay', title: 'Rooms & Suites', description: 'Explore the room categories.', to: '/rooms' },
  { eyebrow: 'Guest information', title: 'Amenities', description: 'See confirmed facilities and arrival information.', to: '/amenities' },
  { eyebrow: 'Find us', title: 'Location & Contact', description: 'Find the hotel and contact reception.', to: '/contact' },
]

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <ContentContainer className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Oba’s Rest Hotel · Benin City</p>
            <h1>A welcoming place to stay in Benin City.</h1>
            <p className="home-hero__description">
              Find the information you need for a stay at Oba’s Rest Hotel on Airport Road.
            </p>
            <div className="home-hero__actions">
              <EnquiryLink>Request a booking</EnquiryLink>
              <Link className="text-link" to="/rooms">Explore rooms <span aria-hidden="true">→</span></Link>
            </div>
            <p className="booking-note">A request is not a confirmed booking. Reception checks availability and confirms every booking.</p>
          </div>
          <div className="hotel-facts" aria-label="Confirmed hotel information">
            <div className="hotel-facts__topline"><span>Oba’s Rest</span><span>Benin City</span></div>
            <div className="hotel-facts__arch" aria-hidden="true"><span /></div>
            <div className="hotel-facts__bottomline">
              <div><span className="fact-index">01</span><strong>24-hour power</strong></div>
              <div><span className="fact-index">02</span><strong>Parking for every room</strong></div>
            </div>
            <p className="hotel-facts__caption">Confirmed guest information</p>
          </div>
        </ContentContainer>
      </section>

      <section className="home-intro section-space">
        <ContentContainer className="home-intro__grid">
          <SectionHeading eyebrow="Welcome" title="Oba’s Rest Hotel" />
          <p className="home-intro__copy">
            Located on Airport Road in Benin City, Edo State. Use this site to explore room categories, confirmed facilities, guest information and ways to contact reception.
          </p>
        </ContentContainer>
      </section>

      <section className="page-links section-space">
        <ContentContainer>
          <SectionHeading eyebrow="Explore" title="Plan your visit" description="Choose a page to find the information you need." />
          <div className="page-link-grid">
            {pageLinks.map((item, index) => (
              <Link className="page-link-card" key={item.to} to={item.to}>
                <span className="page-link-card__number">0{index + 1}</span>
                <span className="page-link-card__eyebrow">{item.eyebrow}</span>
                <strong>{item.title}</strong>
                <span className="page-link-card__description">{item.description}</span>
                <span className="page-link-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="booking-strip">
        <ContentContainer className="booking-strip__inner">
          <div><p className="eyebrow">Next step</p><h2>Have a question about your stay?</h2><p>Contact reception to ask about your dates and room options.</p></div>
          <EnquiryLink>Make an enquiry</EnquiryLink>
        </ContentContainer>
      </section>
    </>
  )
}
