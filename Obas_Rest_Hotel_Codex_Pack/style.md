# Oba’s Rest Hotel — UI style guide

## Product feel
Create a polished, calm, trustworthy hotel website. It should feel welcoming and quietly premium, not like a generic hotel template or a loud travel-booking marketplace.

**Proposed visual direction (confirm with the project owner before final polish):**
- Deep midnight navy for structure and trust.
- Warm ivory / soft sand for spacious backgrounds.
- Restrained muted brass or champagne-gold accents.
- Warm, natural photography with soft daylight.

## Design tokens
Use these as initial values and keep them consistent. Adjust only if the project owner approves a different direction.

```css
:root {
  --color-ink: #172333;
  --color-navy: #182A3A;
  --color-ivory: #F7F4EE;
  --color-sand: #E9E1D5;
  --color-brass: #B8955B;
  --color-text: #26313B;
  --color-muted: #6F7880;
  --color-white: #FFFFFF;
  --radius-card: 18px;
  --radius-button: 999px;
  --shadow-soft: 0 12px 36px rgba(23, 35, 51, 0.08);
  --content-width: 1180px;
}
```

## Typography
- Use an elegant, readable display face for large headings (e.g. Playfair Display or a similar available serif).
- Use a clean sans-serif for body copy and interface text (e.g. Inter).
- Keep body text comfortably readable on mobile.
- Use sentence case and avoid all-caps navigation labels.

## Layout and components
- Design mobile-first, then enhance for tablet and desktop.
- Keep a clear max-width content container and generous vertical spacing.
- Use simple navigation: Home, Rooms, Amenities, Guest Info, Location.
- Primary CTA: **Request a booking**. Secondary CTA: **Explore rooms**.
- Use room cards only after actual room details are supplied.
- Use accessible contrast, visible focus states, semantic headings and descriptive image alt text.
- Buttons need clear hover, focus, disabled and loading states where relevant.
- On small screens, navigation and CTAs must remain easy to tap.

## Page structure
1. **Hero:** strong illustrative hotel image, concise promise, Airport Road / Benin City location, Request a booking CTA.
2. **Welcome:** short introduction to Oba’s Rest Hotel.
3. **Rooms:** approved room types, descriptions and actual details. Do not invent room names, prices or availability.
4. **Amenities:** highlight confirmed 24-hour power and parking for every room. Add other amenities only after confirmation.
5. **Guest information:** approved check-in/check-out times and house rules. If not supplied, show “Please contact reception to confirm”.
6. **Location:** client-approved address, directions and map link. Do not guess nearby attractions.
7. **Booking enquiry:** provide a clear way to send an enquiry. State that a request is not a confirmed reservation and reception confirms every booking.
8. **Footer:** approved contact details, address and relevant links.

## Imagery
- Keep all four required AI images in one coherent visual style and colour treatment.
- Show a plausible, contemporary Nigerian hospitality context where people or place are shown.
- Avoid fake logos, text inside images, watermarks, distorted architecture and unrealistic luxury claims.
- Never imply AI-generated images are actual photographs of Oba’s Rest Hotel or its guests.
- Add a discreet “Illustrative image” caption where a guest could mistake an image for a real hotel room or facility.

## Voice and copy
- Warm, respectful, clear and reassuring.
- Short sentences. Explain what happens next.
- Avoid exaggerated claims such as “the best hotel in Benin”.
- Use “Request a booking” rather than “Book now” if the action only submits an enquiry.
- Repeat the key expectation: **Reception confirms every booking.**

## Quality bar
Before accepting a screen, check:
- Does it look credible and polished on a 360px-wide phone?
- Is the main action obvious?
- Can a guest find power, parking and location information quickly?
- Is every factual claim approved?
- Is the booking language clear that the request is not a confirmation?


## Confirmed planning direction and proposed information architecture

- Visual direction: **modern boutique hotel**.
- Website structure: **multi-page**.
- Experience: balanced between strong visual presentation and easy navigation.
- Proposed pages: Home; Rooms & Suites; Amenities & Guest Information; Location & Contact.
- Use consistent navigation across pages and make the Chatbase launcher available throughout.

### Hotel information supplied
- Approximately 30 rooms, numbered 101–130.
- Categories: Junior Suite; Suite (Standard / Executive Suite); Penthouse Suite; Presidential Suite.
- Overall room-price range: ₦30,000–₦230,000 per night. Category-specific prices are not yet supplied.
- AI-generated illustrative images will be used instead of actual room photographs.
- Phone and WhatsApp number supplied: 08163186622.
- Location reference: Airport Road, Benin City, Edo State, Nigeria.
- Confirmed facilities: 24-hour power and parking for every room.
- The hotel operates 24 hours. Arrival/departure arrangements depend on the guest's lodging arrangement; fixed check-in/check-out hours have not been supplied.
- Reception confirms every booking.

### Rooms page rules
- Organise by the four supplied categories, not 30 individual cards by default.
- Do not allocate room numbers 101–130 to categories until the allocation is supplied.
- Do not assign specific prices to categories until approved rates are supplied.
- Label generated images as illustrative; do not present them as actual hotel photographs.
- Do not invent room features, occupancy limits, bed sizes or facilities.

### Booking flow is unresolved
- No existing enquiry URL has been supplied.
- The earlier assignment direction was to connect the website CTA to the existing group enquiry form, but its URL must be obtained before implementation.
- A new individual website enquiry form and/or WhatsApp handoff to 08163186622 are possible alternatives, but the user has not selected the final flow.
- Do not fabricate a URL or implement a booking flow until the user approves it.
- Use “Request a booking” or “Make an enquiry”. An enquiry is not a confirmed reservation.

### Amenities and house rules
- Only 24-hour power and parking for every room are confirmed.
- AI/web research may create suggestions and draft house rules for owner review. Research does not prove the hotel provides a facility or enforces a policy.
- Never publish unapproved suggestions as hotel facts.
