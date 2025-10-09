## Top 4 Landing Page

Marketing site for the Top 4 party app. Built with Next.js App Router, Tailwind CSS, and Framer Motion for subtle motion cues.

### Quick start

```bash
npm install
npm run dev
```

Visit <http://localhost:3000> to view the landing page. Update content in `src/data/content.ts` and section markup in `src/app/page.tsx` and `src/components/*`.

### Available scripts

- `npm run dev` – start the development server.
- `npm run build` – create an optimized production build.
- `npm run start` – run the production build locally.
- `npm run lint` – lint the project with the Next.js ESLint config.

### Tech stack

- **Next.js 15** with the App Router and TypeScript
- **Tailwind CSS 4 (preview)** for theming + utility-first styling
- **Framer Motion** for entrance and scroll-triggered animations
- **Lucide Icons** for iconography

### Structure overview

- `src/app/page.tsx` – assembles landing page sections.
- `src/components/` – reusable UI blocks (hero, features, community, footer, etc.).
- `src/app/{privacy,support,terms,press}/page.tsx` – static resource pages linked from the footer/nav.
- `public/og-image.png` – Open Graph image used for social sharing.

### Design tokens

Global colors, gradients, and radiuses live in `src/app/globals.css` using Tailwind 4 `@theme inline`. Update these values to tweak theming in one place.

### Environment & deployment

The site targets Vercel deployment. Ensure you are running Node.js ≥ 18.18 to avoid engine warnings during install/build. Configure analytics, forms, or CMS integrations as they become available.

### Testing

No automated tests are configured yet. Run `npm run lint` before committing. Consider adding Playwright or Cypress smoke tests once the UI stabilizes.
