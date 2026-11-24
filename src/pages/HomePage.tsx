import { Link } from 'react-router'
import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { IllustrativeImageSlot } from '../components/IllustrativeImageSlot'
import { SectionHeading } from '../components/SectionHeading'

const roomTypes = [
  'Junior Suite',
  'Suite · Standard / Executive',
  'Penthouse Suite',
  'Presidential Suite',
]

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <ContentContainer className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Airport Road · Benin City</p>
            <h1>A welcoming place to stay.</h1>
            <p className="home-hero__description">
              Welcome to Oba’s Rest Hotel. Explore room categories, confirmed facilities and guest information, then contact reception with your questions.
            </p>
            <div className="home-hero__actions">
              <EnquiryLink>Request a booking</EnquiryLink>
              <Link className="text-link" to="/rooms">Explore rooms <span aria-hidden="true">→</span></Link>
            </div>
            <p className="booking-note">A request is not a confirmed booking. Reception checks availability and confirms every booking.</p>
          </div>
          <IllustrativeImageSlot title="Hotel entrance or reception" variant="lobby" />
        </ContentContainer>
      </section>

      <section className="home-rooms section-space">
        <ContentContainer>
          <div className="section-heading-row">
            <SectionHeading eyebrow="Rooms & Suites" title="Find a room category" description="Ask reception for room details, rates and availability for your dates." />
            <Link className="text-link" to="/rooms">View all room categories <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-room-list">
            {roomTypes.map((room, index) => (
              <Link className="home-room-link" key={room} to="/rooms">
                <span className="home-room-link__number">0{index + 1}</span>
                <span>{room}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="home-facilities">
        <ContentContainer className="home-facilities__inner">
          <div className="home-facilities__intro">
            <p className="eyebrow">Confirmed facilities</p>
            <h2>Practical details for your stay.</h2>
            <Link className="text-link text-link--light" to="/amenities">Explore amenities <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-facility">
            <span className="home-facility__index">01</span>
            <div><h3>24-hour power</h3><p>Power is available throughout the day and night.</p></div>
          </div>
          <div className="home-facility">
            <span className="home-facility__index">02</span>
            <div><h3>Parking for every room</h3><p>Parking is available for every room.</p></div>
          </div>
        </ContentContainer>
      </section>

      <section className="home-guest section-space">
        <ContentContainer className="home-guest__grid">
          <SectionHeading eyebrow="Guest information" title="Know what to confirm before you arrive." description="Arrival and departure arrangements depend on your lodging arrangement. Reception can confirm the details for your stay." />
          <div className="home-guest__aside">
            <p>Questions about check-in or house rules? Please contact reception to confirm.</p>
            <Link className="text-link" to="/amenities">Guest information & FAQs <span aria-hidden="true">→</span></Link>
          </div>
        </ContentContainer>
      </section>

      <section className="booking-strip">
        <ContentContainer className="booking-strip__inner">
          <div><p className="eyebrow">Contact reception</p><h2>Planning a stay?</h2><p>Ask about your dates and room options. Reception confirms every booking.</p></div>
          <EnquiryLink>Make an enquiry</EnquiryLink>
        </ContentContainer>
      </section>
    </>
  )
}
