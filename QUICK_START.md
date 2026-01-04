# 🚀 Quick Start Guide

Get the IPA website running in 5 minutes!

## Step 1: Install Dependencies (2 min)

```bash
npm install
```

## Step 2: Set Up Environment (1 min)

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:

```env
RESEND_API_KEY=re_xxx  # Get from resend.com (or leave empty for testing)
NEXT_PUBLIC_CALCOM_URL=https://cal.com/houseofmaad/30min
NOTIFICATION_EMAIL=robin@houseofmaad.de
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=ipa.smith-und-partners.de
```

## Step 3: Run Development Server (1 min)

```bash
npm run dev
```

Open **http://localhost:3000** 🎉

---

## Testing the Form (1 min)

1. Scroll to the bottom contact form
2. Fill in all required fields
3. Click "Kostenlose Prozessanalyse vereinbaren"
4. You should be redirected to `/danke` page
5. Check your email (or Resend dashboard) for notification

---

## What to Check

- ✅ All 8 sections load correctly
- ✅ Navigation scrolls smoothly
- ✅ Mobile menu works (resize browser)
- ✅ Form validates correctly
- ✅ Cal.com embed loads on thank you page

---

## Common Issues

**Dependencies fail to install?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Form doesn't submit?**
- Check console for errors
- Verify `.env.local` exists
- Check Resend API key is correct

---

## Next Steps

1. **Test locally** - Make sure everything works
2. **Update legal pages** - Datenschutz & Impressum
3. **Get Resend API key** - For email notifications
4. **Deploy to Coolify** - Follow README.md instructions

---

## Need Help?

- Check `README.md` for full documentation
- Check `BUILD_COMPLETE.md` for deployment guide
- Email: robin@houseofmaad.de

---

**That's it! You're ready to go! 🎉**
