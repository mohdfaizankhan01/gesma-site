# GESMA — Domain & Hosting Setup Checklist

A one-time guide to get the site live on **gesma.ch**. Works for any
traditional host (Infomaniak, Hostpoint, Hostinger, cPanel, etc.).

---

## 1. Domain

- [ ] **Check if `gesma.ch` is already registered.** The email
      `info@gesma.ch` strongly suggests it is — confirm with whoever set
      up that email before buying anything.
- [ ] If it exists: note **where it's registered** (the registrar) and
      get login access.
- [ ] If it does NOT exist: register `gesma.ch` (a Swiss host like
      Infomaniak can register `.ch` directly; not all registrars can).
- [ ] Decide whether the **domain and hosting** will be at the same
      provider (simplest) or separate (then you'll point DNS — step 2).

## 2. Hosting account

- [ ] Create the hosting plan (any basic shared/static plan is enough —
      no PHP/database needed; the site is fully static).
- [ ] Find the **web root** folder (usually `public_html/` or `www/`).
- [ ] **Point the domain at the host:**
  - Same provider → usually automatic.
  - Different provider → set the domain's **nameservers** (or A record)
    to the host, per the host's instructions. DNS can take up to 24h.

## 3. Upload the site

- [ ] Open **File Manager** (in cPanel/hPanel) or connect via **FTP**
      (e.g. FileZilla — host gives you FTP credentials).
- [ ] Enable **"show hidden files"** (so `.htaccess` is visible).
- [ ] Upload the **contents of the `public/` folder** into the web root
      (everything publicly served lives in `public/` — `.htaccess`,
      `_headers`, the HTML pages, `style.css`, `main.js`, `assets/`).
- [ ] Do **NOT** upload anything outside `public/` (`.git/`, `.DS_Store`,
      `*.docx`, `numbers.jpeg`, `DEPLOY-NOTES.md`, `SETUP-CHECKLIST.md`).
- [ ] Confirm `.htaccess` actually uploaded (hidden files are easy to miss).

> **Cloudflare Pages / Netlify:** instead of FTP, just set the **build
> output directory** to `public` — the host serves that folder directly.

## 4. SSL / HTTPS

- [ ] Enable **free SSL** (Let's Encrypt) — one click in most hosts'
      dashboards (look for "SSL/TLS" or "Security").
- [ ] Wait for the certificate to issue (minutes to ~1 hour).
- [ ] Visit `https://gesma.ch` — should show a padlock.
- [ ] Test that `http://gesma.ch` **redirects** to `https://`
      (the `.htaccess` handles this).

## 5. Email (keep `info@gesma.ch` working)

- [ ] Confirm the mailbox `info@gesma.ch` still receives mail after the
      move (if email is hosted at the same provider, check it's set up;
      if elsewhere, leave its **MX records** untouched).
- [ ] Send a test email to `info@gesma.ch` and confirm it arrives.

## 6. Verify the live site

- [ ] Home page loads, fonts render correctly (Cormorant + DM Sans).
- [ ] **Contact form** — submit a test message, confirm it lands in
      `info@gesma.ch` (form goes via Web3Forms; no extra setup needed).
- [ ] **Map** loads in the Contact section.
- [ ] Footer links open: **Privacy**, **Safeguarding**, **Legal Notice**.
- [ ] **WhatsApp** buttons open the correct number.
- [ ] Check on a **phone** (responsive layout).
- [ ] Quick header check: run the URL through
      https://securityheaders.com — should score well thanks to `.htaccess`.

## 7. After launch

- [ ] Fill the **Legal Notice** + **Privacy** placeholders (association
      legal name + Geneva address) and re-upload those two pages.
- [ ] Once HTTPS is confirmed working everywhere, enable **HSTS** by
      uncommenting the `Strict-Transport-Security` line in `.htaccess`.
- [ ] (Optional) Submit `gesma.ch` to Google Search Console so it gets
      indexed.

---

**Recommended for a Swiss org:** Infomaniak (Swiss data residency,
native `.ch`, email included) — but any host above works the same way.
