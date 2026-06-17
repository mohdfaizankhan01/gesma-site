# Deployment notes

The site is **static**. All publicly-served files live in the
**`public/`** folder. Everything outside `public/` (these notes, the
setup checklist, `.gitignore`, working files) is internal and must NOT
be published.

## What to deploy

**Everything inside `public/`** — and nothing else:

```
public/
  .htaccess          (HTTPS redirect + security headers — Apache hosts)
  _headers           (security headers — Cloudflare Pages)
  index.html
  privacy.html
  safeguarding.html
  impressum.html
  style.css
  main.js
  assets/            (fonts, fontawesome, logo, gallery photos)
```

- **Cloudflare Pages / Netlify:** set the **build output directory** to
  `public` (no build command — it's plain static files).
- **Apache / cPanel (FTP):** upload the **contents of `public/`** into
  the web root (usually `public_html/`). `.htaccess` is hidden — enable
  "show hidden files" in your FTP client, or it won't appear.

## NEVER publish these (kept outside `public/`)

| File / folder        | Why it must stay internal                            |
|----------------------|------------------------------------------------------|
| `.git/`              | Exposes full source history — attackers scan for it. |
| `.DS_Store`          | Leaks file/directory names.                          |
| `*.docx`             | Internal content drafts.                             |
| `numbers.jpeg`       | Internal working file, not used by the site.         |
| `DEPLOY-NOTES.md` / `SETUP-CHECKLIST.md` | Internal docs.                   |

Because the site is isolated in `public/`, pointing a host at that folder
automatically keeps all of the above private.

## Security headers

Configured in two files inside `public/`, depending on host:

- **`public/_headers`** — used by **Cloudflare Pages** / Netlify.
- **`public/.htaccess`** — used by **Apache / cPanel** (also adds the
  HTTPS redirect). Ignored by Cloudflare/Netlify (harmless).

Both set the same CSP, X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, and Permissions-Policy.

After the site is live and HTTPS works everywhere, enable HSTS:
- Apache → uncomment the `Strict-Transport-Security` line in `.htaccess`.
- Cloudflare → SSL/TLS → Edge Certificates → enable HSTS.

If your host runs **Nginx**, neither file applies — ask and the same
rules can be provided as an Nginx server block.
