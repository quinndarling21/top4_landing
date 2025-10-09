# Top 4 Landing Page Requirements

## 1. Project Overview
- **Purpose:** Promote the Top 4 party app, highlight core gameplay loop (draft, debate, decide), and drive iOS downloads.
- **Primary Call-to-Action:** App Store download button; secondary CTAs include following social accounts (tiktok, instagram, reddit, discord) and contacting support.
- **Target Platform:** Responsive web experience hosted on Vercel with React-based stack.

## 2. User Personas & Goals
- **Curious players:** Discover what the app does, view gameplay visuals, and download immediately.
- **Hosts / party planners:** Understand how the game fits group settings, review features, and share with friends.
- **Existing users:** Access support resources, FAQ, and privacy policy quickly.
- **Press / partners:** Access press kit, branding assets, and contact info.

## 3. Page Structure & Content
1. **Hero section**
   - Large phone mockup showcasing app UI (animated loop or interactive frame).
   - Tagline emphasizing “Draft. Debate. Decide.” and social party angle.
   - iOS download button + secondary link for newsletter / notify on Android.
   - Optional subtle background animation or gradient inspired by app brand colors.
2. **Features / highlights**
   - Bulleted cards describing categories, real-time voting, custom prompts, history log, etc.
   - Potential carousel or scroll-triggered reveals.
3. **Community & social links**
   - Icons linking to tiktok, instagram, reddit, discord
7. **Support & resources**
   - FAQ accordion covering gameplay, subscription (if any), troubleshooting.
   - Support email/link and bug report form route.
8. **Footer**
   - Privacy policy, terms of service, support, press kit, version year.
   - Reiterate download CTA.

## 4. Feature Requirements
- **Responsive design:** Optimized for mobile-first, tablet, and desktop breakpoints.
- **Animation & interactivity:**
  - Smooth scroll-based transitions (e.g., parallax hero background, staggered feature cards).
  - Micro-interactions on hover/focus states.
  - Lottie or CSS animations for playful elements if feasible.
- **Analytics & tracking:** Integrate privacy-compliant analytics (e.g., Vercel Analytics, Plausible, or GA4) and App Store campaign tracking parameters.
- **Newsletter capture:** Optional integration with mailing list provider (e.g., Mailchimp, ConvertKit); should be modular and easy to toggle off.
- **Press kit download:** Provide link to hosted assets (placeholder until files exist).
- **SEO basics:** Metadata, open graph tags, sitemap, robots, structured data for app.

## 5. Technical Stack & Architecture
- **Framework:** Next.js (React + Vercel-first deployment).
- **Styling:** Tailwind CSS with custom theme or CSS-in-JS alternative (e.g., styled-components) depending on animation needs. Preference for Tailwind + Framer Motion.
- **Animations:** Framer Motion (scroll-triggered + component animations). Consider Lenis / Locomotive Scroll for smooth scrolling if needed.
- **Asset handling:** Use Next.js Image component for optimization; store static assets in `/public`.
- **Content management:** Hardcoded JSON/TS data modules for initial release; structure to allow easy migration to CMS if needed.
- **Forms:** Use serverless function or third-party form handler (e.g., Formspree) for support/contact submissions.
- **Testing & quality:** Basic integration tests via Playwright or Cypress (if time permits) and component-level tests with React Testing Library for critical sections.

## 6. Accessibility & Performance
- WCAG 2.1 AA compliance target (semantic HTML, keyboard navigability, ARIA where needed).
- Color contrast meeting accessibility guidelines while reflecting brand gradients.
- Lazy-load non-critical assets and animations; prefetch App Store link.
- Lighthouse performance/accessibility best practices; optimize bundle size.

## 7. Project Setup & Tooling
- Monorepo not required; single Next.js app.
- TypeScript enabled.
- ESLint + Prettier with Next.js defaults.
- Commit hooks via Husky + lint-staged for format/lint on staged files.
- Vercel preview deployments.
- Environment variables managed via `.env.local`; document required keys.

## 8. Deliverables & Milestones
1. Requirements approval (this document).
2. Wireframe / component map (low-fidelity layout with sections above).
3. High-fidelity design pass (Figma or equivalent references).
4. Implementation of core layout + hero + CTA.
5. Add supporting sections (How it works, Features, Social proof).
6. Integrate animations & interactions.
7. Implement support, privacy, and footer pages.
8. QA, accessibility review, analytics setup.
9. Launch to production (Vercel).
