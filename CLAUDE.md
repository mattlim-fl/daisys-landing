# Daisy's Social Club - Development Guidelines

## Project Context

This is Daisy's Social Club website - a members-only social club landing page for Perth, WA with an elegant, minimalist black and gold aesthetic.

## Tech Stack

- React 18+ with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for base components
- Supabase for backend (member signups)

## Brand Colors

Use the `daisy` color tokens defined in `tailwind.config.ts`:

```
daisy.black     - #0a0a0a (backgrounds)
daisy.white     - #ffffff (text)
daisy.cream     - #f5f0e6 (secondary text)
daisy.gold      - #c9a962 (accents, buttons)
daisy.gold-dark - #a68b4e (hover states)
```

## Typography

- **Font:** Inter (system font stack)
- Clean, minimal typography with generous spacing

## File Structure

```
src/
├── components/
│   ├── SignupForm.tsx    # Email signup form
│   ├── SignupModal.tsx   # Membership signup modal
│   ├── SuccessScreen.tsx # Post-signup confirmation
│   └── ui/               # shadcn/ui components
├── pages/
│   └── Home.tsx          # Single-page landing
├── services/             # API client functions
└── lib/                  # Utilities (supabaseClient)
```

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Landing page with signup |

## Component Patterns

**Page Structure:**
```tsx
<div className="min-h-screen bg-daisy-black text-daisy-white">
  {/* Hero section */}
  {/* Signup modal */}
</div>
```

**Button Styles:**
- Primary: `bg-daisy-gold hover:bg-daisy-gold-dark text-daisy-black`

## Environment Variables

Required in `.env.local`:
```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
```

## Coding Conventions

1. Use TypeScript for all components
2. Prefer Tailwind classes over inline styles
3. Use the `daisy.*` color tokens, not hex codes
4. Keep the design minimal and elegant
5. Focus on the single-page signup flow
