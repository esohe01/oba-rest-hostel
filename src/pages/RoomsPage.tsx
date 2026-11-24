import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { IllustrativeImageSlot } from '../components/IllustrativeImageSlot'
import { PageIntro } from '../components/PageIntro'
import { SectionHeading } from '../components/SectionHeading'

const roomTypes = [
  { name: 'Junior Suite', variant: 'junior' as const },
  { name: 'Suite', detail: 'Standard / Executive Suite', variant: 'suite' as const },
  { name: 'Penthouse Suite', variant: 'premium' as const },
  { name: 'Presidential Suite', variant: 'premium' as const },
]

export function RoomsPage() {
  return (
    <>
      <PageIntro eyebrow="Stay" title="Rooms & Suites" description="Explore the room categories at Oba’s Rest Hotel. Contact reception for the details that apply to your stay." />
      <section className="section-space">
        <ContentContainer>
          <SectionHeading eyebrow="Room categories" title="Choose a category to ask about" description="Room imagery on this page is illustrative. Specific room features, rates and availability are confirmed by reception." />
          <div className="room-card-grid">
            {roomTypes.map((room, index) => (
              <article className="room-card" key={room.name}>
                <IllustrativeImageSlot title={room.name} variant={room.variant} compact />
                <div className="room-card__body">
                  <span className="room-card__number">0{index + 1}</span>
                  <h3>{room.name}</h3>
                  {room.detail && <p className="room-card__variant">{room.detail}</p>}
                  <p>Contact reception for details and the rate for your dates.</p>
                  <EnquiryLink appearance="quiet">Ask reception</EnquiryLink>
                </div>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>
      <section className="rate-band">
        <ContentContainer className="rate-band__inner">
          <div><p className="eyebrow">Nightly rates</p><h2>₦30,000–₦230,000</h2><p>Overall range across the hotel. Reception confirms the rate for a specific category and date.</p></div>
          <EnquiryLink>Request a booking</EnquiryLink>
        </ContentContainer>
      </section>
      <section className="page-disclaimer">
        <ContentContainer><p>Room numbers have not been assigned to categories on this page. A request is not a confirmed booking; reception checks availability and confirms every booking.</p></ContentContainer>
      </section>
    </>
  )
}
