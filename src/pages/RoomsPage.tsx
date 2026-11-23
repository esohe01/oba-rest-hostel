import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { PageIntro } from '../components/PageIntro'
import { SectionHeading } from '../components/SectionHeading'

const roomTypes = [
  { name: 'Junior Suite', detail: '' },
  { name: 'Suite', detail: 'Standard / Executive Suite' },
  { name: 'Penthouse Suite', detail: '' },
  { name: 'Presidential Suite', detail: '' },
]

export function RoomsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Stay"
        title="Rooms & Suites"
        description="Explore the room categories at Oba’s Rest Hotel. Contact reception for the details that apply to your stay."
      />
      <section className="section-space">
        <ContentContainer>
          <SectionHeading eyebrow="Room categories" title="Choose a category to ask about" description="Specific room features, rates and availability are confirmed by reception." />
          <ul className="room-type-list">
            {roomTypes.map((room, index) => (
              <li className="room-type-list__item" key={room.name}>
                <span className="room-type-list__number">0{index + 1}</span>
                <div className="room-type-list__copy">
                  <h3>{room.name}</h3>
                  {room.detail && <p className="room-type-list__variants">{room.detail}</p>}
                  <p>Ask reception for the room details and rate for your dates.</p>
                </div>
                <EnquiryLink appearance="quiet">Ask reception</EnquiryLink>
              </li>
            ))}
          </ul>
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
