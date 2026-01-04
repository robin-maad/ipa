# Project Structure
## IPA-S Marketing Website

**Version**: 1.0  
**Last Updated**: January 4, 2026

---

## 1. Overview

This document defines the complete file and folder structure for the IPA-S marketing website. Following this structure ensures consistency, maintainability, and makes it easy for new developers to understand the codebase.

---

## 2. Root Directory Structure

```
ipa-s-website/
├── .github/                  # GitHub configuration
│   └── workflows/
│       └── ci.yml           # CI/CD pipeline
├── .next/                    # Next.js build output (gitignored)
├── .vscode/                  # VS Code settings
│   └── settings.json
├── app/                      # Next.js App Router (main source)
├── components/               # Reusable React components
├── public/                   # Static assets
├── lib/                      # Utility functions & config
├── docs/                     # Project documentation
├── .env.example              # Environment variables template
├── .env.local                # Local environment (gitignored)
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS config (for Tailwind)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project README
```

---

## 3. App Directory (Next.js App Router)

```
app/
├── layout.tsx                # Root layout (header, footer, fonts)
├── page.tsx                  # Homepage (all landing sections)
├── globals.css               # Global styles + Tailwind imports
├── favicon.ico               # Favicon
│
├── api/                      # API routes (server-side)
│   ├── submit-form/
│   │   └── route.ts         # Process Analysis form handler
│   └── subscribe/
│       └── route.ts         # Newsletter signup handler
│
├── danke/                    # Thank you page
│   └── page.tsx             # Success message + Calendly embed
│
├── datenschutz/              # Privacy policy (German)
│   └── page.tsx
│
└── impressum/                # Legal notice (German requirement)
    └── page.tsx
```

### Page Component Structure

**app/page.tsx** (Homepage):
```tsx
import Hero from '@/components/sections/Hero';
import ProblemStats from '@/components/sections/ProblemStats';
// ... other imports

export const metadata = {
  title: 'IPA-S | Intelligente Prozessautomatisierung',
  // ... SEO metadata
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStats />
      <ArchitectureDiagram />
      <SafetyShield />
      <Economics />
      <ProvenWorkflows />
      <PathToProduction />
      <FinalCTA />
    </main>
  );
}
```

**app/layout.tsx** (Root Layout):
```tsx
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 4. Components Directory

```
components/
├── sections/                 # Page sections (large, one-off)
│   ├── Hero.tsx
│   ├── ProblemStats.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── SafetyShield.tsx
│   ├── Economics.tsx
│   ├── ProvenWorkflows.tsx
│   ├── PathToProduction.tsx
│   └── FinalCTA.tsx
│
├── shared/                   # Shared across sections
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── Badge.tsx
│   └── SectionContainer.tsx
│
├── forms/                    # Form components
│   ├── ProcessAnalysisForm.tsx
│   └── NewsletterForm.tsx
│
└── ui/                       # Shadcn UI components (base)
    ├── button.tsx
    ├── card.tsx
    ├── form.tsx
    ├── input.tsx
    ├── label.tsx
    ├── textarea.tsx
    └── select.tsx
```

### Component File Template

```tsx
// components/sections/Hero.tsx

import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 to-navy-800">
      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Hero content */}
      </div>
    </section>
  );
}
```

---

## 5. Public Directory (Static Assets)

```
public/
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg
│   ├── architecture/
│   │   └── flow-diagram.svg
│   ├── workflows/
│   │   ├── annual-accounts.png
│   │   ├── new-client.png
│   │   └── monthly-accounting.png
│   ├── badges/
│   │   ├── taylor-wessing.svg
│   │   ├── gdpr-compliant.svg
│   │   └── datev-native.svg
│   └── og-image.png          # Open Graph preview image
│
├── icons/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon/
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
│
└── robots.txt                # SEO crawl rules
```

### Image Naming Convention
- Lowercase, hyphen-separated
- Descriptive: `architecture-flow-diagram.svg` not `diagram.svg`
- Include size if multiple: `logo-large.svg`, `logo-small.svg`

---

## 6. Lib Directory (Utilities)

```
lib/
├── utils.ts                  # General utility functions
├── validation/
│   ├── schemas.ts           # Zod validation schemas
│   └── sanitize.ts          # Input sanitization
├── email/
│   ├── resend.ts            # Resend client setup
│   └── templates/
│       └── process-analysis-notification.tsx
├── analytics/
│   └── plausible.ts         # Analytics helper
└── constants/
    ├── navigation.ts        # Nav menu items
    └── content.ts           # Reusable text content
```

### Example Files

**lib/validation/schemas.ts**:
```typescript
import { z } from 'zod';

export const processAnalysisSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(10, 'Ungültige Telefonnummer'),
  firmName: z.string().min(2, 'Firmenname erforderlich'),
  employeeCount: z.enum(['<5', '5-10', '10-20', '20-50', '50+']),
  message: z.string().optional(),
  honeypot: z.string().max(0), // Bot trap
});

export type ProcessAnalysisFormData = z.infer<typeof processAnalysisSchema>;
```

**lib/utils.ts**:
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
```

---

## 7. Docs Directory (Project Documentation)

```
docs/
├── PRD.md                    # Product Requirements (this file!)
├── ARCHITECTURE.md           # Technical architecture
├── PROJECT_STRUCTURE.md      # This file
├── STYLEGUIDE.md             # Code & design style guide
├── TESTPLAN.md               # Testing strategy
├── CHECKLIST.md              # Launch checklist
└── DEPLOYMENT.md             # Deployment guide
```

---

## 8. Configuration Files

### package.json
```json
{
  "name": "ipa-s-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "resend": "^3.0.0",
    "@radix-ui/react-label": "^2.0.0",
    "@radix-ui/react-select": "^2.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  },
};

module.exports = nextConfig;
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          // ... custom color palette
          900: '#102a43',
        },
        teal: {
          // IPA-S brand teal
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### .env.example
```bash
# Resend Email API
RESEND_API_KEY=re_xxx

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/ipa-s/process-analysis

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=ipa-s.de

# Optional: CRM Integration
HUBSPOT_API_KEY=xxx
```

### .gitignore
```
# Dependencies
node_modules/

# Next.js
.next/
out/

# Environment
.env.local
.env.production.local

# Testing
coverage/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Misc
*.log
```

### .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}
```

---

## 9. Naming Conventions

### Files & Folders
- **Components**: PascalCase → `Hero.tsx`, `CTAButton.tsx`
- **Utilities**: camelCase → `utils.ts`, `validation.ts`
- **Folders**: kebab-case → `shared/`, `ui/`, `api/`
- **Pages**: kebab-case → `danke/`, `datenschutz/`

### Code
- **React Components**: PascalCase → `function Hero() {}`
- **Functions**: camelCase → `function formatPhone() {}`
- **Constants**: UPPER_SNAKE_CASE → `const API_BASE_URL = ...`
- **Types/Interfaces**: PascalCase → `type FormData = ...`

### CSS Classes (Tailwind)
- Use component-level classes, not global
- Use `cn()` utility to merge classes conditionally
- Follow Tailwind's recommended order (positioning → layout → spacing → sizing → typography → visual → misc)

---

## 10. Import Aliases

Configure `tsconfig.json` for clean imports:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/app/*": ["./app/*"]
    }
  }
}
```

**Usage**:
```typescript
// ❌ Avoid relative imports
import Hero from '../../../components/sections/Hero';

// ✅ Use alias
import Hero from '@/components/sections/Hero';
```

---

## 11. Directory Organization Principles

### Colocation
Keep related files together:
```
components/forms/ProcessAnalysisForm/
├── ProcessAnalysisForm.tsx    # Main component
├── schema.ts                   # Validation schema
└── types.ts                    # TypeScript types
```

### Separation of Concerns
- **Sections**: Large, page-specific components
- **Shared**: Reusable across multiple sections
- **UI**: Base components (buttons, inputs, etc.)
- **Forms**: Form-specific logic and validation

### Progressive Enhancement
Start with basic structure, add complexity as needed:
1. Create basic component
2. Add TypeScript types
3. Add Zod validation (if form)
4. Add tests (later)

---

## 12. File Size Guidelines

**Keep files focused and manageable**:
- **Components**: < 200 lines (split if larger)
- **Utility files**: < 300 lines
- **API routes**: < 150 lines
- **Config files**: < 100 lines

**If file gets too large**:
1. Extract related functions to separate module
2. Split component into sub-components
3. Move constants to separate file

---

## 13. Asset Organization

### Images
**Original Files** (not committed):
- Store design files separately (Figma, Sketch)
- Keep high-res originals (for future use)

**Optimized Files** (public/images):
- Export at appropriate sizes
- Use WebP for photos (with JPG fallback)
- Use SVG for icons/logos
- Compress images (TinyPNG, Squoosh)

**Sizing Guidelines**:
- Hero images: 1920x1080 (max)
- Section images: 1200x800 (max)
- Thumbnails: 400x300 (max)
- Icons: 24x24, 32x32, 64x64 (SVG preferred)

### Fonts
- Use next/font/google (built-in optimization)
- Load only weights needed (400, 600, 700)
- Subset to Latin characters (smaller file size)

---

## 14. Git Workflow & Branches

### Branch Structure
```
main                    # Production (ipa-s.de)
  ↑
develop                 # Staging (preview URL)
  ↑
feature/hero-section    # Feature branches
feature/form-handling
bugfix/mobile-menu
```

### Commit Message Format
```
type(scope): subject

feat(hero): add responsive background image
fix(form): validate phone number format
docs(readme): update setup instructions
style(button): adjust padding on mobile
```

**Types**: feat, fix, docs, style, refactor, test, chore

---

## 15. Development Workflow

### Starting New Feature
```bash
# 1. Pull latest
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/economics-section

# 3. Work on feature
# ... make changes ...

# 4. Commit regularly
git add .
git commit -m "feat(economics): add ROI calculator component"

# 5. Push to remote
git push origin feature/economics-section

# 6. Create PR to develop
# ... on GitHub ...

# 7. Merge after review
```

### Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000

# Format code
npm run format

# Check types
npm run type-check

# Lint
npm run lint
```

---

## 16. Code Organization Best Practices

### Component Structure
```tsx
// 1. Imports (external → internal)
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// 2. Types
type Props = {
  title: string;
  description?: string;
};

// 3. Component
export default function Section({ title, description }: Props) {
  // 3a. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 3b. Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 3c. Render
  return (
    <section>
      {/* JSX */}
    </section>
  );
}

// 4. Helper components (if small)
function SubComponent() {
  return <div>...</div>;
}
```

### API Route Structure
```typescript
// app/api/submit-form/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// 1. Schema
const schema = z.object({
  // validation rules
});

// 2. Main handler
export async function POST(request: NextRequest) {
  try {
    // 2a. Parse & validate
    const body = await request.json();
    const data = schema.parse(body);

    // 2b. Process
    await sendEmail(data);

    // 2c. Respond
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

// 3. Helper functions
async function sendEmail(data: any) {
  // implementation
}
```

---

## 17. Testing Structure (Phase 2)

```
__tests__/
├── components/
│   ├── Hero.test.tsx
│   └── ProcessAnalysisForm.test.tsx
├── lib/
│   └── utils.test.ts
└── api/
    └── submit-form.test.ts
```

---

## 18. Documentation Updates

**When to Update This Document**:
- Adding new major directory
- Changing file organization
- Adding new configuration file
- Changing naming conventions

**Keep in Sync**:
- Update PRD when requirements change
- Update ARCHITECTURE when tech stack changes
- Update this doc when structure changes

---

## 19. Onboarding New Developers

**Give new developers**:
1. This PROJECT_STRUCTURE.md
2. README.md (getting started guide)
3. PRD.md (understand the product)
4. STYLEGUIDE.md (code standards)

**First PR should be**: Small, isolated change (fix typo, add comment)

---

## 20. Quick Reference

### Most Common Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run format       # Format all code
npm run lint         # Check for errors
```

### Most Common Paths
```bash
app/page.tsx                              # Homepage
components/sections/Hero.tsx              # Hero section
lib/validation/schemas.ts                 # Form validation
app/api/submit-form/route.ts             # Form API
public/images/                            # All images
```

### Most Common Imports
```typescript
import Image from 'next/image';           // Images
import Link from 'next/link';             // Links
import { cn } from '@/lib/utils';         // Class merging
import { Button } from '@/components/ui/button'; // UI components
```

---

## Approval

**Reviewed by**: [Name]  
**Approved by**: [Name]  
**Date**: [Date]
