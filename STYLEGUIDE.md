# Coding & Design Styleguide
## IPA-S Marketing Website

**Version**: 1.0  
**Last Updated**: January 4, 2026

---

## 1. Overview

This styleguide ensures consistency across code, design, and content for the IPA-S website. Following these guidelines makes the codebase maintainable, professional, and easy for others to contribute to.

---

## 2. Code Formatting

### Automatic Formatting

**Tool**: Prettier (v3.0+)

**Why**: Eliminates debates about formatting, ensures consistency automatically.

**Setup**:
```bash
npm install --save-dev prettier prettier-plugin-tailwindcss
```

**Configuration** (`.prettierrc`):
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Run**:
```bash
npm run format         # Format all files
npm run format:check   # Check without changing
```

### Linting

**Tool**: ESLint (v8.0+) with Next.js config

**Configuration** (`.eslintrc.json`):
```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "no-unused-vars": "error"
  }
}
```

**Run**:
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

---

## 3. TypeScript Standards

### Always Use TypeScript
- All `.tsx` and `.ts` files (no `.jsx` or `.js`)
- Enable strict mode in `tsconfig.json`
- No `any` types (use `unknown` if truly unknown)

### Type Definitions

**Components**:
```typescript
// ✅ Good: Explicit props type
type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText: string;
  onCTAClick: () => void;
};

export default function Hero({ title, subtitle, ctaText, onCTAClick }: HeroProps) {
  // ...
}

// ❌ Avoid: Implicit types
export default function Hero(props) {
  // ...
}
```

**API Routes**:
```typescript
// ✅ Good: Type the request/response
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
});

type FormData = z.infer<typeof schema>;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const data: FormData = schema.parse(await request.json());
  // ...
  return NextResponse.json({ success: true });
}
```

**Utilities**:
```typescript
// ✅ Good: Explicit return types
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// ❌ Avoid: Inferred return (less clear)
export function formatPhoneNumber(phone: string) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Hero`, `CTAButton` |
| Functions | camelCase | `formatDate`, `sendEmail` |
| Variables | camelCase | `userName`, `isLoading` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL`, `MAX_FILE_SIZE` |
| Types/Interfaces | PascalCase | `FormData`, `UserProfile` |
| Files (components) | PascalCase | `Hero.tsx`, `Footer.tsx` |
| Files (utils) | kebab-case | `email-service.ts`, `validation.ts` |
| Folders | kebab-case | `shared/`, `api-routes/` |

---

## 4. React Component Standards

### Component Structure

```tsx
// 1. Imports (external first, then internal)
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces
type SectionProps = {
  title: string;
  description: string;
  variant?: 'default' | 'dark';
};

// 3. Component
export default function Section({
  title,
  description,
  variant = 'default',
}: SectionProps) {
  // 3a. State & hooks
  const [isVisible, setIsVisible] = useState(false);

  // 3b. Effects
  useEffect(() => {
    // side effects
  }, []);

  // 3c. Event handlers
  const handleClick = () => {
    setIsVisible(true);
  };

  // 3d. Computed values
  const containerClasses = cn(
    'container mx-auto',
    variant === 'dark' && 'bg-navy-900 text-white'
  );

  // 3e. Early returns (if needed)
  if (!title) return null;

  // 3f. Main render
  return (
    <section className={containerClasses}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={handleClick}>Click me</Button>
    </section>
  );
}

// 4. Sub-components (if small and tightly coupled)
function SubComponent() {
  return <div>Helper component</div>;
}
```

### Hooks Rules

```tsx
// ✅ Good: Hooks at top level only
function MyComponent() {
  const [count, setCount] = useState(0);
  const data = useData();
  
  return <div>{count}</div>;
}

// ❌ Bad: Hooks inside conditionals
function MyComponent() {
  if (something) {
    const [count, setCount] = useState(0); // ❌ Error!
  }
}

// ✅ Good: Custom hooks for reusable logic
function useFormSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submit = async (data: FormData) => {
    setIsSubmitting(true);
    // ... submission logic
    setIsSubmitting(false);
  };
  
  return { submit, isSubmitting };
}
```

### Props

```tsx
// ✅ Good: Destructure props
function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

// ❌ Avoid: Using props object directly
function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

// ✅ Good: Optional props with defaults
type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Optional
  disabled?: boolean; // Optional
};

function Button({
  text,
  onClick,
  variant = 'primary', // Default value
  disabled = false, // Default value
}: ButtonProps) {
  // ...
}
```

---

## 5. Tailwind CSS Standards

### Class Organization

**Order classes by type** (Prettier does this automatically with plugin):
1. Layout (display, position)
2. Box model (margin, padding, border)
3. Sizing (width, height)
4. Typography (font, text)
5. Visual (background, color)
6. Misc (transitions, transforms)

```tsx
// ✅ Good: Organized, readable
<div className="
  flex items-center justify-between
  mx-auto px-4 py-8
  max-w-7xl
  text-lg font-semibold
  bg-white shadow-lg
  transition-all duration-300
">
  {/* content */}
</div>

// ❌ Avoid: Random order
<div className="bg-white py-8 flex text-lg mx-auto shadow-lg px-4 max-w-7xl">
```

### Use `cn()` Utility for Conditional Classes

```tsx
import { cn } from '@/lib/utils';

// ✅ Good: Clean conditional classes
<button
  className={cn(
    'px-6 py-3 rounded-lg font-semibold transition-colors',
    variant === 'primary' && 'bg-teal-600 text-white hover:bg-teal-700',
    variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    isDisabled && 'opacity-50 cursor-not-allowed'
  )}
>
  {text}
</button>

// ❌ Avoid: String concatenation
<button
  className={
    'px-6 py-3 ' +
    (variant === 'primary' ? 'bg-teal-600 ' : 'bg-gray-200 ') +
    (isDisabled ? 'opacity-50' : '')
  }
>
```

### Mobile-First Responsive Design

```tsx
// ✅ Good: Mobile first, then scale up
<div className="
  text-sm      {/* mobile */}
  md:text-base {/* tablet */}
  lg:text-lg   {/* desktop */}
">

// ❌ Avoid: Desktop first
<div className="text-lg md:text-base sm:text-sm">
```

### Custom Tailwind Classes

Add custom values in `tailwind.config.ts`:
```typescript
export default {
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          // ... full palette
          900: '#102a43',
        },
        'teal': {
          // IPA-S brand teal
          600: '#0d9488',
          700: '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
};
```

### Avoid Arbitrary Values (When Possible)

```tsx
// ✅ Good: Use theme values
<div className="p-8 text-navy-900">

// ⚠️ OK: When theme value doesn't exist
<div className="p-[33px] text-[#102a43]">
// Better: Add to theme if used repeatedly
```

---

## 6. Design System

### Color Palette

**Primary Colors**:
```css
/* Navy (Trust, Professionalism) */
--navy-900: #102a43;
--navy-800: #1f3a55;
--navy-700: #2d4a67;

/* Teal (Innovation, Action) */
--teal-600: #0d9488;
--teal-700: #0f766e;

/* Neutral */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;

/* Semantic */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
```

**Usage**:
- **Navy 900**: Primary backgrounds, headers
- **Teal 600**: CTAs, links, highlights
- **Gray 50-100**: Secondary backgrounds
- **White**: Content areas

### Typography

**Font**: Inter (via next/font/google)

**Scale**:
```typescript
text-xs     // 12px - Fine print, captions
text-sm     // 14px - Secondary text
text-base   // 16px - Body text (default)
text-lg     // 18px - Emphasized body
text-xl     // 20px - Section subtitles
text-2xl    // 24px - Card titles
text-3xl    // 30px - Section headings
text-4xl    // 36px - Page headings
text-5xl    // 48px - Hero headline (desktop)
```

**Weights**:
```typescript
font-normal    // 400 - Body text
font-semibold  // 600 - Subheadings, emphasis
font-bold      // 700 - Headlines, CTAs
```

**Line Heights**:
```typescript
leading-tight  // Headlines (1.25)
leading-snug   // Subheadings (1.375)
leading-normal // Body text (1.5)
leading-relaxed // Long-form content (1.625)
```

### Spacing Scale

Use Tailwind's default scale (multiples of 4px):
```typescript
p-1   // 4px
p-2   // 8px
p-4   // 16px
p-6   // 24px
p-8   // 32px (common for section padding)
p-12  // 48px
p-16  // 64px (large section padding)
```

**Section Spacing**:
- Mobile: `py-12` (48px)
- Desktop: `py-20` (80px)

### Shadows

```typescript
shadow-sm   // Subtle cards
shadow-md   // Elevated cards
shadow-lg   // Modals, dropdowns
shadow-xl   // Hero elements
```

### Border Radius

```typescript
rounded-sm   // 2px - Subtle
rounded      // 4px - Buttons, inputs
rounded-lg   // 8px - Cards
rounded-xl   // 12px - Large cards
rounded-2xl  // 16px - Hero sections
rounded-full // Pills, avatars
```

---

## 7. Components Patterns

### Button Component

```tsx
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'font-semibold transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        
        // Variants
        variant === 'primary' &&
          'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
        variant === 'secondary' &&
          'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-700',
        variant === 'ghost' &&
          'bg-transparent hover:bg-gray-100 focus:ring-gray-300',
        
        // Sizes
        size === 'sm' && 'px-4 py-2 text-sm rounded',
        size === 'md' && 'px-6 py-3 text-base rounded-lg',
        size === 'lg' && 'px-8 py-4 text-lg rounded-lg',
        
        // Allow override
        className
      )}
    >
      {children}
    </button>
  );
}
```

### Card Component

```tsx
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6',
        'hover:shadow-lg transition-shadow',
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

## 8. Accessibility Standards

### Semantic HTML

```tsx
// ✅ Good: Semantic elements
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Section Title</h2>
    <p>Content...</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 IPA-S</p>
</footer>

// ❌ Avoid: Divs for everything
<div>
  <div>
    <div><a href="/">Home</a></div>
  </div>
</div>
```

### ARIA Labels

```tsx
// ✅ Good: Descriptive aria-label
<button aria-label="Open navigation menu">
  <MenuIcon />
</button>

// ✅ Good: Describe icon buttons
<button aria-label="Close dialog">
  <XIcon />
</button>

// ✅ Good: Form labels
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />
```

### Keyboard Navigation

```tsx
// ✅ Good: All interactive elements are keyboard accessible
<button onClick={handleClick} onKeyDown={handleKeyDown}>
  Click me
</button>

// ✅ Good: Skip to main content link
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main">
  {/* content */}
</main>
```

### Color Contrast

- **Minimum ratio**: 4.5:1 for normal text
- **Large text**: 3:1 (18px+ or 14px+ bold)
- Test with: Chrome DevTools, Contrast Checker

```tsx
// ✅ Good: High contrast
<p className="text-gray-900 bg-white">Readable text</p>

// ❌ Avoid: Low contrast
<p className="text-gray-400 bg-gray-300">Hard to read</p>
```

---

## 9. Performance Standards

### Image Optimization

```tsx
import Image from 'next/image';

// ✅ Good: Optimized with Next.js Image
<Image
  src="/images/hero-bg.jpg"
  alt="Tax professionals collaborating"
  width={1920}
  height={1080}
  priority  // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/..." // Low-res placeholder
/>

// ❌ Avoid: Regular img tag
<img src="/hero.jpg" alt="Hero" />
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic';

// ✅ Good: Lazy load heavy components
const CalendlyEmbed = dynamic(
  () => import('@/components/CalendlyEmbed'),
  {
    loading: () => <Spinner />,
    ssr: false, // Client-side only
  }
);

// Use when needed
<CalendlyEmbed />
```

### Bundle Size

- Keep dependencies minimal
- Tree-shake unused code
- Use `next/dynamic` for large components
- Check bundle size: `npm run build && npm run analyze`

---

## 10. Form Validation Standards

### Zod Schemas

```typescript
import { z } from 'zod';

// Define schema
export const processAnalysisSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen haben')
    .max(100, 'Name ist zu lang'),
  
  email: z
    .string()
    .email('Ungültige E-Mail-Adresse')
    .toLowerCase(),
  
  phone: z
    .string()
    .regex(/^[\d\s\-+()]+$/, 'Ungültige Telefonnummer')
    .min(10, 'Telefonnummer zu kurz'),
  
  firmName: z
    .string()
    .min(2, 'Firmenname erforderlich'),
  
  employeeCount: z.enum(['<5', '5-10', '10-20', '20-50', '50+']),
  
  message: z
    .string()
    .max(1000, 'Nachricht ist zu lang')
    .optional(),
  
  honeypot: z.string().max(0), // Bot trap
});

// Infer TypeScript type
export type ProcessAnalysisFormData = z.infer<typeof processAnalysisSchema>;
```

### Error Messages

```tsx
// ✅ Good: User-friendly German messages
{errors.email && (
  <p className="text-sm text-error mt-1">
    {errors.email.message}
  </p>
)}

// ❌ Avoid: Technical messages
{errors.email && (
  <p>Validation failed: email.regex.test() === false</p>
)}
```

---

## 11. API Route Standards

### Standard Structure

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// 1. Schema
const schema = z.object({
  // ...
});

// 2. Handler
export async function POST(request: NextRequest) {
  try {
    // 2a. Parse request
    const body = await request.json();
    
    // 2b. Validate
    const data = schema.parse(body);
    
    // 2c. Rate limit check (optional)
    await checkRateLimit(request);
    
    // 2d. Process
    const result = await processData(data);
    
    // 2e. Respond
    return NextResponse.json(
      { success: true, data: result },
      { status: 200 }
    );
  } catch (error) {
    // 2f. Error handling
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 3. Helper functions
async function processData(data: any) {
  // ...
}

async function checkRateLimit(request: NextRequest) {
  // ...
}
```

---

## 12. Git Commit Standards

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting (not code logic)
- `refactor`: Code restructure (no behavior change)
- `test`: Add/update tests
- `chore`: Build/config changes

**Examples**:
```bash
feat(hero): add responsive background image

fix(form): validate phone number format correctly

docs(readme): update installation instructions

style(button): adjust padding on mobile screens

refactor(api): extract email logic to utility function
```

---

## 13. Comments & Documentation

### When to Comment

```typescript
// ✅ Good: Explain WHY, not WHAT
// We use a delay here because DATEV API rate limits at 10 req/sec
await delay(100);

// ❌ Avoid: Obvious comments
// Set count to 0
const count = 0;
```

### JSDoc for Functions

```typescript
/**
 * Sends a notification email via Resend
 * 
 * @param data - Form submission data
 * @returns Promise that resolves when email is sent
 * @throws {Error} If Resend API fails
 */
async function sendNotificationEmail(
  data: ProcessAnalysisFormData
): Promise<void> {
  // ...
}
```

### TODO Comments

```typescript
// TODO: Add rate limiting (Priority: High)
// TODO: Implement retry logic (Priority: Medium)
// FIXME: This breaks on iOS Safari (Bug #42)
```

---

## 14. Content Guidelines

### Tone & Voice

**IPA-S Brand Voice**:
- **Professional**: Not casual, but not stuffy
- **Trustworthy**: Data security is paramount
- **Clear**: Avoid jargon when possible
- **Confident**: "We automate" not "We can help automate"

**Examples**:
```
✅ Good:
"IPA-S automates up to 40% of repetitive administrative tasks, 
freeing your tax professionals for high-value consulting."

❌ Too casual:
"IPA-S is super cool and makes boring stuff go away!"

❌ Too technical:
"IPA-S leverages n8n-based workflow orchestration with on-premise 
LLM inference to optimize DATEV integration pipelines."
```

### German Language

**Formal "Sie" Form**:
- Always use formal address (Sie, Ihnen, Ihr)
- Capitalize: "Ihre Kanzlei", "Ihren Prozess"

**Examples**:
```
✅ "Vereinbaren Sie Ihre kostenlose Prozessanalyse"
❌ "Vereinbare deine Prozessanalyse"

✅ "Wie können wir Ihnen helfen?"
❌ "Wie können wir dir helfen?"
```

---

## 15. File Naming

### Components
```
✅ Hero.tsx
✅ ProcessAnalysisForm.tsx
✅ CTAButton.tsx

❌ hero.tsx
❌ cta_button.tsx
❌ FormForProcessAnalysis.tsx
```

### Utilities
```
✅ email-service.ts
✅ validation.ts
✅ utils.ts

❌ EmailService.ts
❌ util.ts
❌ helpers.ts
```

### Images
```
✅ hero-background.jpg
✅ taylor-wessing-badge.svg
✅ workflow-annual-accounts.png

❌ heroBackground.jpg
❌ img1.png
❌ TW_Badge.svg
```

---

## 16. Security Best Practices

```typescript
// ✅ Good: Sanitize user input
import DOMPurify from 'isomorphic-dompurify';

const clean = DOMPurify.sanitize(userInput);

// ✅ Good: Use environment variables
const apiKey = process.env.RESEND_API_KEY;

// ❌ Never: Hardcode secrets
const apiKey = 're_123abc456def';

// ✅ Good: Validate on server
export async function POST(request: NextRequest) {
  const data = schema.parse(await request.json());
  // Process...
}

// ❌ Avoid: Trust client-side validation only
```

---

## 17. Testing Standards (Phase 2)

### Component Tests

```typescript
import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

describe('Hero Component', () => {
  it('renders headline', () => {
    render(<Hero />);
    expect(
      screen.getByText(/IPA-S/)
    ).toBeInTheDocument();
  });
  
  it('shows CTA button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', {
      name: /Process Analysis/i,
    });
    expect(button).toBeInTheDocument();
  });
});
```

---

## Approval

**Reviewed by**: [Name]  
**Approved by**: [Name]  
**Date**: [Date]

---

## Quick Reference Card

### Code Formatting
```bash
npm run format    # Auto-format
npm run lint      # Check errors
```

### Component Template
```tsx
import { cn } from '@/lib/utils';

type Props = {
  title: string;
};

export default function Component({ title }: Props) {
  return <div>{title}</div>;
}
```

### Tailwind Classes Order
1. Layout (flex, grid)
2. Box (margin, padding)
3. Size (w, h)
4. Text (font, text)
5. Visual (bg, color)
6. Misc (transition)

### Commit Format
```
type(scope): subject

feat(hero): add new section
fix(form): validation bug
```
