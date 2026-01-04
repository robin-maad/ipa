# IPA Marketing Website

Professional marketing website for IPA - Intelligente Prozessautomatisierung für Steuerkanzleien.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Booking**: Cal.com
- **Deployment**: Docker (Coolify/Hetzner)

## 📋 Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker (for deployment)

## 🛠️ Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys:

```env
RESEND_API_KEY=re_your_key_here
NEXT_PUBLIC_CALCOM_URL=https://cal.com/houseofmaad/30min
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=ipa.smith-und-partners.de
NOTIFICATION_EMAIL=robin@houseofmaad.de
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production (Test)

```bash
npm run build
npm run start
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t ipa-website .
```

### Run with Docker Compose

```bash
# Create production environment file
cp .env.production.example .env.production
# Edit .env.production with your values

# Start the container
docker-compose up -d
```

### Deploy to Coolify/Hetzner

1. **Push to GitHub** (your repo is already connected)

2. **In Coolify**:
   - Connect your GitHub repository
   - Set build pack to "Dockerfile"
   - Add environment variables from `.env.production.example`
   - Deploy

## 📂 Project Structure

```
ipa/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── danke/            # Thank you page
│   ├── datenschutz/      # Privacy policy
│   ├── impressum/        # Legal notice
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── forms/            # Form components
│   ├── sections/         # Page sections
│   ├── shared/           # Shared components
│   └── ui/               # Base UI components
├── lib/
│   ├── validation/       # Zod schemas
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── docs/                 # Documentation (PRD, etc.)
```

## 🎨 Key Features

### 8 Landing Page Sections

1. **Hero** - Value proposition with stats
2. **Problem Stats** - Market pain points
3. **Architecture** - How IPA works
4. **Safety Shield** - GDPR compliance & security
5. **Economics** - ROI metrics
6. **Proven Workflows** - Use cases
7. **Path to Production** - 3-step process
8. **Final CTA** - Contact form + Cal.com booking

### Forms & Integration

- ✅ Validated contact form (Zod schema)
- ✅ Email notifications via Resend
- ✅ Cal.com booking embed
- ✅ Rate limiting (5 requests/hour)
- ✅ Bot protection (honeypot)

### SEO Optimized

- ✅ Metadata for all pages
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ German language optimization
- ✅ Accessibility (WCAG 2.1 AA)

## ⚙️ Configuration

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the development domain
3. Get your API key
4. Add to `.env.local`: `RESEND_API_KEY=re_xxx`

### Cal.com Setup

1. Already configured: `https://cal.com/houseofmaad/30min`
2. Update in `.env.local` if URL changes

### Legal Pages (⚠️ IMPORTANT)

Before going live, you **MUST** update:

- `/app/datenschutz/page.tsx` - Privacy policy placeholders
- `/app/impressum/page.tsx` - Legal notice placeholders

## 🚨 Pre-Launch Checklist

- [ ] Update company information in Impressum
- [ ] Update privacy policy with correct legal entity
- [ ] Get Resend API key
- [ ] Verify Cal.com booking link
- [ ] Test form submissions
- [ ] Test email delivery
- [ ] Test Cal.com embed
- [ ] Run Lighthouse audit (target: 90+ all metrics)
- [ ] Test on mobile devices
- [ ] Legal review of Datenschutz & Impressum

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Docker Build Issues

```bash
# Rebuild without cache
docker-compose build --no-cache
```

### Form Not Sending Emails

1. Check Resend API key is correct
2. Verify email is not in spam
3. Check Resend dashboard for delivery status

## 📧 Support

For questions or issues:
- Email: robin@houseofmaad.de
- Check documentation in `/docs`

## 📄 License

Private - All Rights Reserved
