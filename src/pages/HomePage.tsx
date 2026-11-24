import { Link } from 'react-router'
import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { IllustrativeImageSlot } from '../components/IllustrativeImageSlot'
import { SectionHeading } from '../components/SectionHeading'

const roomTypes = [
  { name: 'Junior Suite', variant: 'junior' as const, index: '01' },
  { name: 'Suite', detail: 'Standard / Executive Suite', variant: 'suite' as const, index: '02' },
  { name: 'Penthouse Suite', variant: 'premium' as const, index: '03' },
  { name: 'Presidential Suite', variant: 'premium' as const, index: '04' },
]

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <ContentContainer className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Airport Road <span aria-hidden="true">/</span> Benin City</p>
            <p className="home-hero__overline">OBA’S REST HOTEL</p>
            <h1 id="home-title">Make room for a <em>restful</em> stay.</h1>
            <p className="home-hero__description">
              Explore our room categories and confirmed guest information, then speak with reception about your plans.
            </p>
            <div className="home-hero__actions">
              <EnquiryLink>Enquire about rooms</EnquiryLink>
              <Link className="text-link" to="/rooms">Explore rooms <span aria-hidden="true">↗</span></Link>
            </div>
            <p className="booking-note">Reception checks availability and confirms every booking.</p>
          </div>
          <div className="home-hero__visual">
            <span className="home-hero__visual-index" aria-hidden="true">01 <span>/</span> WELCOME</span>
            <IllustrativeImageSlot title="Hotel entrance or reception" variant="lobby" />
            <span className="home-hero__visual-note">Representative image · not an actual hotel photograph</span>
          </div>
        </ContentContainer>
        <div className="home-hero__rule" aria-hidden="true" />
      </section>

      <section className="home-introduction section-space" aria-labelledby="home-introduction-title">
        <ContentContainer className="home-introduction__grid">
          <div className="home-introduction__marker">
            <span>01</span>
            <span>WELCOME</span>
          </div>
          <div className="home-introduction__copy">
            <p className="eyebrow">A place to begin</p>
            <h2 id="home-introduction-title">Welcome to Oba’s Rest Hotel.</h2>
            <p>Find the room category that suits your plans, learn about confirmed facilities, and contact reception for the details of your stay.</p>
            <Link className="text-link" to="/contact">Find us on Airport Road <span aria-hidden="true">↗</span></Link>
          </div>
          <aside className="home-introduction__aside">
            <span className="home-introduction__aside-label">A helpful note</span>
            <p>Room details, rates and availability are confirmed by reception for your dates.</p>
          </aside>
        </ContentContainer>
      </section>

      <section className="home-rooms section-space" aria-labelledby="home-rooms-title">
        <ContentContainer>
          <div className="home-rooms__heading">
            <SectionHeading eyebrow="Rooms & Suites" title="A room for your plans." description="Explore the four room categories, then contact reception for the details that apply to your stay." />
            <Link className="text-link" to="/rooms">View all rooms <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-room-grid">
            {roomTypes.map((room) => (
              <Link className={`home-room-card home-room-card--${room.variant}`} key={room.name} to="/rooms" aria-label={`Explore ${room.name}${room.detail ? `, ${room.detail}` : ''}`}>
                <IllustrativeImageSlot title={room.name} variant={room.variant} compact />
                <div className="home-room-card__caption">
                  <span className="home-room-card__index">{room.index}</span>
                  <div><h3>{room.name}</h3>{room.detail && <p>{room.detail}</p>}</div>
                  <span className="home-room-card__arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="home-facilities" aria-labelledby="home-facilities-title">
        <ContentContainer className="home-facilities__inner">
          <div className="home-facilities__intro">
            <p className="eyebrow">Confirmed at the hotel</p>
            <h2 id="home-facilities-title">The essentials, clearly.</h2>
            <Link className="text-link text-link--light" to="/amenities">Amenities & guest information <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-facility"><span className="home-facility__index">01</span><div><h3>24-hour power</h3><p>Power is available throughout the day and night.</p></div></div>
          <div className="home-facility"><span className="home-facility__index">02</span><div><h3>Parking for every room</h3><p>Parking is available for every room.</p></div></div>
        </ContentContainer>
      </section>

      <section className="home-guest section-space">
        <ContentContainer className="home-guest__grid">
          <SectionHeading eyebrow="Before you arrive" title="Know what to check before you arrive." description="Arrival and departure arrangements depend on your lodging arrangement. Reception can confirm the details for your visit." />
          <div className="home-guest__aside">
            <p>Questions about arrival, departure or house rules? The reception team can help clarify them.</p>
            <Link className="text-link" to="/amenities">Read guest information <span aria-hidden="true">↗</span></Link>
          </div>
        </ContentContainer>
      </section>

      <section className="booking-strip" aria-labelledby="home-contact-title">
        <ContentContainer className="booking-strip__inner">
          <div><p className="eyebrow">Your stay starts with a conversation</p><h2 id="home-contact-title">Let’s talk about your visit.</h2><p>Send an enquiry to reception. Every booking is checked and confirmed by the team.</p></div>
          <EnquiryLink>Make an enquiry</EnquiryLink>
        </ContentContainer>
      </section>
    </>
  )
}
