import { ContentContainer } from '../components/ContentContainer'
import { EnquiryLink } from '../components/EnquiryLink'
import { PageIntro } from '../components/PageIntro'
import { SectionHeading } from '../components/SectionHeading'

const facilities = [
  { number: '01', title: '24-hour power', detail: 'Power is available throughout the day and night.' },
  { number: '02', title: 'Parking for every room', detail: 'Parking is available for every room.' },
]

export function AmenitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your stay"
        title="Amenities & Guest Information"
        description="Find confirmed facility information and what to check with reception before your arrival."
      />
      <section className="section-space">
        <ContentContainer>
          <SectionHeading eyebrow="Confirmed facilities" title="The essentials" description="These are the facilities confirmed for the hotel." />
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility.number}>
                <span className="facility-card__number">{facility.number}</span>
                <span className="facility-card__symbol" aria-hidden="true">✳</span>
                <h3>{facility.title}</h3>
                <p>{facility.detail}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>
      <section className="guest-info section-space">
        <ContentContainer className="guest-info__grid">
          <SectionHeading eyebrow="Before you arrive" title="Guest information" description="Arrival and departure arrangements depend on your lodging arrangement." />
          <div className="guest-info__details">
            <div><h3>Arrival and departure</h3><p>The hotel operates 24 hours. Please contact reception to confirm the arrangements for your stay.</p></div>
            <div><h3>House rules</h3><p>Please contact reception for the current house rules.</p></div>
            <div><h3>Check-in</h3><p>Reception handles check-in. Contact the team to confirm your arrival details.</p></div>
          </div>
        </ContentContainer>
      </section>
      <section className="page-disclaimer">
        <ContentContainer className="page-disclaimer__inner"><p>Only confirmed hotel information is listed here. Contact reception with questions about other facilities or policies.</p><EnquiryLink appearance="quiet">Contact reception</EnquiryLink></ContentContainer>
      </section>
    </>
  )
}
