# Codex Agent Instructions — Oba’s Rest Hotel (Individual Project Only)

## Role
You are the implementation partner for the user's **individual Oba’s Rest Hotel project**. The group project has already been completed and is OUT OF SCOPE. Work only on the user's personal deliverables.

## Scope boundary — important
Work only on:
1. The Oba’s Rest Hotel website.
2. Four consistent AI-generated illustrative images and saved prompts.
3. The Chatbase chatbot, approved FAQ, instructions, embedding and tests.
4. Any individual n8n node/work item explicitly assigned to the user as part of their personal assessment, if applicable.

Do NOT build, modify, plan, test or spend time on:
- The group's shared enquiry form.
- The group's six-node n8n workflow.
- Group routing, email or Telegram notifications.
- The group's Google Sheets database or dashboard.
- Group workflow screenshots or group hand-in tasks.
- Any other group member's website or integration.

If a requirement appears to belong to the completed group project, flag it as OUT OF SCOPE and ask the user before doing anything with it.

## Source of truth
Use these sources in this order:
1. Approved `client-brief.md`.
2. Answers the user provides when you ask for missing hotel details.
3. `style.md` for visual decisions.
4. This file for engineering and safety rules.

## Ask the user for missing information at the right time
Do not invent missing hotel information and do not overwhelm the user with a long list of questions at the beginning.

When a missing detail becomes necessary for the current stage, pause and ask the user a clear, simple question. Ask only for the information needed to continue that stage. Examples:
- Before building room cards: ask for room types, descriptions, photos and prices (if prices will be displayed).
- Before completing guest information: ask for check-in/check-out times and house rules.
- Before publishing contact/location details: ask for the approved full address, phone number, email and directions.
- Before finalising chatbot FAQs: ask for the approved answers to any customer questions not covered by the client card.
- Before connecting the booking enquiry CTA: ask what destination/action the user wants it to use (for example, an approved reception contact method or an individual enquiry form).

When you ask, explain briefly why the information is needed. You may continue with other parts that do not depend on the missing information, using clearly marked TODO placeholders. Never silently guess.

## Confirmed facts
- Hotel name: Oba’s Rest Hotel.
- Owner: Mrs Eseosa Iyamu.
- Location reference: Airport Road, Benin City.
- Approximately 35 enquiries a week, many at night.
- 24-hour power.
- Parking for every room.
- Events in Benin can make the hotel fill up quickly.
- Receptionist Musa handles check-in.
- Reception confirms every booking.

Do not assume these facts imply live room inventory or real-time availability.

## Non-negotiable booking safety rule
**NEVER CONFIRM A BOOKING. Reception confirms every booking.**

The website and chatbot may collect an enquiry and explain the next step. They must never claim:
- A room is available for a date.
- A booking is reserved, accepted or confirmed.
- A deposit has been received.
- A price or special offer is guaranteed.

Unless the client supplies a real, approved inventory and confirmation integration, all booking requests remain pending human review. Do not build an independent booking engine.

## Engineering workflow
- Start by inspecting the existing repository, package manager, framework and current git status. Do not overwrite existing work.
- Before editing, explain the intended change and files likely to be touched.
- Work on one milestone at a time. Do not silently continue to the next milestone.
- Prefer the smallest maintainable implementation over unnecessary libraries or architecture.
- Use reusable components and keep content separate from presentation where sensible.
- Use supplied assets. Label AI-generated imagery honestly.
- Do not expose API keys, passwords, webhook secrets, private data or tokens in source code.
- Put secrets in environment variables and provide `.env.example` with placeholder names only.
- Never commit `.env`, credentials, tokens or real guest/customer personal data.
- Do not connect the website directly to a private Google Sheet or expose credentials in browser code.
- Do not add group-project integrations.

## UI and accessibility
- Follow `style.md`.
- Mobile-first; test narrow phone widths and desktop.
- Use semantic HTML, keyboard navigation, visible focus states, accessible labels and adequate contrast.
- Include loading, empty, error and success states for interactive features.
- Do not use lorem ipsum or fabricated hotel details.
- Avoid fake testimonials, fabricated reviews and fabricated awards.

## Chatbot
- Chatbase is the chatbot platform for this individual website.
- Prepare the FAQ from approved facts only.
- State the never-confirm rule in the agent instructions and test it.
- Direct booking enquiries to the user-approved reception contact/enquiry action.
- If asked about an unknown detail, say reception can confirm; do not guess.
- Do not promise that the chatbot is monitored 24/7 unless the client confirms it.
- Group bookings of 5 or more rooms and complaints must be directed to a human.

## v0 and Codex responsibilities
- Use **v0** only to explore or generate a visual UI direction/component when a polished screen is faster to prototype there.
- Treat v0 output as a draft, not as the source of truth. Review code, accessibility, responsiveness, dependencies and data assumptions before using it.
- Bring approved code into the existing repository; do not create a second competing project.
- Use **Codex** to inspect, integrate, refactor, connect approved individual-project actions, test, document and commit.
- Do not ask v0 or Codex to invent business facts or make live booking decisions.

## Required response after every milestone
Report:
1. What changed.
2. Which files changed.
3. What command(s) were run.
4. Test results (and what was not tested).
5. Missing information or blockers.
6. Exact git commit created.
7. The next single step.

## Git safety — required at every milestone
Before work:
```bash
git status --short
```
After a milestone passes its checks:
```bash
git add <specific-files>
git diff --cached --stat
git diff --cached
git commit -m "milestone: short description"
git push
git status --short
```
Do not use `git add .` blindly. Check staged files before committing. Never commit secrets or guest data.

If a milestone fails, do not commit broken work as complete. Fix it or leave the working tree clearly described. If a pushed milestone needs to be undone, prefer a new revert commit:
```bash
git revert <commit-hash>
git push
```
Do not use `git reset --hard` or force-push unless the user explicitly asks and understands the consequences.

## Definition of done
- One-page client brief approved.
- Responsive website is live.
- Website content uses verified facts only.
- At least four consistent AI images and their prompts are saved.
- Individual booking-enquiry action works and clearly states that reception confirms every booking.
- Chatbase widget is embedded and five tests are documented, including a booking-confirmation refusal.
- Any individually assigned n8n task required by the user's assessment is complete; do not build the group workflow.
- Final screenshots, links and hand-in checklist are saved.


## Updated product decisions and hotel information

This is a multi-page individual project with a modern boutique visual direction and a balanced visual/usability experience. Proposed pages: Home; Rooms & Suites; Amenities & Guest Information; Location & Contact. The chatbot launcher should appear on all pages. Follow `style.md`.

### Additional hotel facts supplied by the user
- Approximately 30 rooms, numbered 101–130.
- Categories: Junior Suite; Suite (Standard / Executive Suite); Penthouse Suite; Presidential Suite.
- Overall room-price range: ₦30,000–₦230,000 per night. Category-specific rates are not supplied.
- AI-generated illustrative images will be used instead of actual room photographs.
- Phone and WhatsApp number: 08163186622.
- Location reference: Airport Road, Benin City, Edo State, Nigeria.
- Hotel operates 24 hours. Arrival/departure arrangements depend on each guest's lodging arrangement; no fixed hours supplied.
- Confirmed facilities: 24-hour power and parking for every room.

### Strict factual boundaries
- Do not allocate room numbers 101–130 to categories without the actual allocation.
- Do not distribute the overall price range across categories or invent category-specific prices.
- Do not invent room features, occupancy, amenities, policies, nearby attractions or exact street address.
- AI/web research may suggest amenities and draft house rules for owner approval only. It does not establish hotel facts.
- Label generated room imagery as illustrative, never as actual hotel photography.

### Booking flow is unresolved
- No existing enquiry URL has been supplied.
- The earlier assignment direction was to link the website CTA to the existing group enquiry form, but obtain its URL before implementation.
- A new individual website enquiry form and/or WhatsApp handoff to 08163186622 are alternatives, but do not implement until the user chooses.
- Never invent a URL. An enquiry is not a reservation; reception confirms every booking.

### Ask for missing details at the relevant stage
Ask focused questions when needed: room-number allocation, category-specific prices, descriptions/features, approved amenities, approved house rules, precise arrival/departure wording, enquiry URL or approval for a new flow, exact address/map pin, and confirmation of phone/WhatsApp link behaviour. Do not send a long questionnaire upfront. Use TODO placeholders where possible.
