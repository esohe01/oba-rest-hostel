import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ContentContainer } from '../components/ContentContainer'
import { CountUpNumber } from '../components/CountUpNumber'
import { EnquiryLink } from '../components/EnquiryLink'
import { IllustrativeImageSlot } from '../components/IllustrativeImageSlot'
import heroImage from '../assets/images/hero.jpg'
import juniorSuiteImage from '../assets/images/junior-suite.jpg'
import standardSuiteImage from '../assets/images/standard-executive-suite.jpg'
import premiumSuiteImage from '../assets/images/penthouse-presidential-suite.jpg'
import penthouseSuiteImage from '../assets/images/penthouse-suite.jpg'

const roomTypes = [
  { name: 'Junior Suite', image: juniorSuiteImage },
  { name: 'Suite', detail: 'Standard / Executive Suite', image: standardSuiteImage },
  { name: 'Penthouse Suite', image: penthouseSuiteImage },
  { name: 'Presidential Suite', image: premiumSuiteImage },
]

export function HomePage() {
  const [activeRoom, setActiveRoom] = useState(0)
  const roomItems = useRef<Array<HTMLLIElement | null>>([])
  const roomSection = useRef<HTMLElement>(null)

  useEffect(() => {
    let frame = 0
    const updateActiveRoom = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const section = roomSection.current
        if (!section) return
        const sectionBounds = section.getBoundingClientRect()
        if (sectionBounds.bottom <= 0 || sectionBounds.top >= window.innerHeight) return

        const focusLine = window.innerHeight * 0.5
        let closestIndex = activeRoom
        let closestDistance = Number.POSITIVE_INFINITY
        roomItems.current.forEach((item, index) => {
          if (!item) return
          const bounds = item.getBoundingClientRect()
          const distance = Math.abs(bounds.top + bounds.height / 2 - focusLine)
          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })
        setActiveRoom((current) => current === closestIndex ? current : closestIndex)
      })
    }

    updateActiveRoom()
    window.addEventListener('scroll', updateActiveRoom, { passive: true })
    window.addEventListener('resize', updateActiveRoom)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveRoom)
      window.removeEventListener('resize', updateActiveRoom)
    }
  }, [])

  return (
    <div className="homepage">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__visual">
          <IllustrativeImageSlot
            title="Hotel reception"
            variant="lobby"
            src={heroImage}
            alt="Illustrative concept of a hotel reception with warm wood walls, a stone counter and pendant lights; not an actual hotel photograph."
            priority
            showCaption={false}
          />
        </div>
        <ContentContainer className="home-hero__grid">
          <div className="home-hero__copy">
            <p className="home-hero__location">Airport Road <span aria-hidden="true">·</span> Benin City</p>
            <h1 id="home-title">OBA’S REST HOTEL</h1>
            <p className="home-hero__description">A calm, welcoming stay in Benin City.</p>
            <div className="home-hero__actions">
              <EnquiryLink>Request a booking</EnquiryLink>
              <Link className="home-hero__explore" to="#home-rooms">Explore rooms <span aria-hidden="true">↓</span></Link>
            </div>
            <p className="home-hero__assurance">Reception checks availability and confirms every booking.</p>
          </div>
          <a className="home-hero__scroll" href="#home-welcome" aria-label="Scroll to discover the hotel">
            <span>Discover Oba’s Rest</span><span aria-hidden="true">↓</span>
          </a>
        </ContentContainer>
      </section>

      <section id="home-welcome" className="home-welcome">
        <ContentContainer className="home-welcome__layout">
          <p className="home-welcome__index" data-home-reveal="eyebrow">01 <span>—</span> A warm welcome</p>
          <h2 data-home-reveal="headline">A calm place to settle into Benin City.</h2>
          <div className="home-welcome__copy" data-home-reveal="copy">
            <p>At Oba’s Rest Hotel, begin with the room category that suits your plans. Reception can help with the details of your stay.</p>
            <Link className="home-welcome__link" to="/amenities">What to know before you arrive <span aria-hidden="true">↗</span></Link>
          </div>
        </ContentContainer>
      </section>

      <section id="home-rooms" className="home-rooms" aria-labelledby="home-rooms-title" ref={roomSection}>
        <ContentContainer>
          <div className="home-rooms__heading">
            <div>
              <p className="home-rooms__eyebrow" data-home-reveal="eyebrow">02 <span>—</span> Rooms & suites</p>
              <h2 id="home-rooms-title" data-home-reveal="headline">Find the room category for your stay.</h2>
            </div>
            <p data-home-reveal="copy">Room images are illustrative concepts, not photographs of Oba’s Rest Hotel. Reception can confirm category details and rates for your dates.</p>
          </div>

          <div className="home-rooms__story">
            <figure className="home-rooms__visual" aria-hidden="true" data-home-reveal="image">
              <div className="home-rooms__image-stack">
                {roomTypes.map((room, index) => (
                  <img
                    key={room.name}
                    className={`home-rooms__image${activeRoom === index ? ' is-active' : ''}`}
                    src={room.image}
                    alt=""
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ))}
              </div>
              <figcaption><span>Illustrative concepts · Not hotel photographs</span><span>0{activeRoom + 1} / 04</span></figcaption>
            </figure>

            <ol className="home-room-list">
              {roomTypes.map((room, index) => (
                <li
                  className={`home-room-list__item${activeRoom === index ? ' is-active' : ''}`}
                  key={room.name}
                  data-room-index={index}
                  ref={(element) => { roomItems.current[index] = element }}
                  data-home-reveal="room"
                  data-home-reveal-index={index}
                  onFocus={() => setActiveRoom(index)}
                >
                  <span className="home-room-list__number">0{index + 1}</span>
                  <Link to="/rooms" aria-label={`Explore ${room.name}${room.detail ? `, ${room.detail}` : ''}`}>
                    <span className="home-room-list__name">{room.name}</span>
                    {room.detail && <span className="home-room-list__detail">{room.detail}</span>}
                    <span className="home-room-list__action">Explore category <span aria-hidden="true">↗</span></span>
                  </Link>
                  <img className="home-room-list__thumbnail" src={room.image} alt="" loading="lazy" decoding="async" />
                </li>
              ))}
            </ol>
          </div>
          <Link className="home-rooms__all-link" to="/rooms">View rooms & suites <span aria-hidden="true">↗</span></Link>
        </ContentContainer>
      </section>

      <section className="home-essentials" aria-labelledby="home-essentials-title">
        <ContentContainer className="home-essentials__layout">
          <div className="home-essentials__intro">
            <p className="home-essentials__eyebrow" data-home-reveal="eyebrow">03 <span>—</span> Confirmed at the hotel</p>
            <h2 id="home-essentials-title" data-home-reveal="headline">The essentials for a more settled stay.</h2>
            <Link data-home-reveal="copy" to="/amenities">See guest information <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-essentials__facts">
            <div className="home-essential" data-home-reveal="room" data-home-reveal-index="0">
              <CountUpNumber value={24} className="home-essential__number" accessibleText="24 hours of power" suffix="" />
              <div><h3>Hour power</h3><p>Electricity is available throughout the day and night.</p></div>
            </div>
            <div className="home-essential" data-home-reveal="room" data-home-reveal-index="1">
              <span className="home-essential__number">02</span>
              <div><h3>Parking for every room</h3><p>Parking is available for every room.</p></div>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <ContentContainer className="home-contact__layout">
          <div className="home-contact__location">
            <p className="home-contact__eyebrow" data-home-reveal="eyebrow">04 <span>—</span> Find us</p>
            <address data-home-reveal="headline">Airport Road<br />Benin City, Edo State<br />Nigeria</address>
            <Link data-home-reveal="copy" to="/contact">Location & contact details <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-contact__invitation">
            <p className="home-contact__eyebrow" data-home-reveal="eyebrow">Your stay starts with a conversation</p>
            <h2 id="home-contact-title" data-home-reveal="headline">Speak with reception.</h2>
            <p data-home-reveal="copy">Ask about room categories, rates, availability or arrangements for your visit. Reception checks availability and confirms every booking.</p>
            <div className="home-contact__actions" data-home-reveal="copy">
              <EnquiryLink openChat>Make an enquiry</EnquiryLink>
              <a href="tel:08163186622">Call reception <span aria-hidden="true">↗</span></a>
              <a href="https://wa.me/2348163186622" aria-label="Open WhatsApp chat with reception">WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </ContentContainer>
      </section>
    </div>
  )
}
