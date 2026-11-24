import { Link } from 'react-router'
import { ContentContainer } from '../components/ContentContainer'
import { PageIntro } from '../components/PageIntro'
import { SectionHeading } from '../components/SectionHeading'

export function LocationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Find us"
        title="Location & Contact"
        description="Contact reception for booking enquiries and directions to Oba’s Rest Hotel."
      />
      <section className="contact-section section-space" id="enquiry">
        <ContentContainer className="contact-grid">
          <div className="contact-grid__intro">
            <SectionHeading eyebrow="Get in touch" title="Speak with reception" description="Reception checks room availability and confirms every booking." />
            <p className="booking-note booking-note--light">A request or enquiry is not a confirmed reservation.</p>
          </div>
          <div className="contact-card">
            <div className="contact-card__item">
              <span className="contact-card__label">Address</span>
              <p>Airport Road<br />Benin City, Edo State<br />Nigeria</p>
              <span className="contact-card__hint">Contact reception for exact directions.</span>
            </div>
            <div className="contact-card__item">
              <span className="contact-card__label">Phone</span>
              <a className="contact-card__phone" href="tel:08163186622">08163186622</a>
              <span className="contact-card__hint">Use this number to reach reception.</span>
            </div>
            <a className="enquiry-link enquiry-link--primary contact-card__action" href="tel:08163186622">
              Contact reception <span aria-hidden="true">↗</span>
            </a>
            <a className="enquiry-link enquiry-link--quiet contact-card__action" href="https://wa.me/2348163186622" aria-label="Open WhatsApp chat with reception">
              Contact reception on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <p className="contact-card__hint">WhatsApp will open with reception. No message is sent until you choose to send one.</p>
          </div>
        </ContentContainer>
      </section>
      <section className="contact-followup">
        <ContentContainer className="contact-followup__inner">
          <p>Want to learn about room types first?</p>
          <Link className="text-link text-link--dark" to="/rooms">Explore rooms <span aria-hidden="true">→</span></Link>
        </ContentContainer>
      </section>
    </>
  )
}
