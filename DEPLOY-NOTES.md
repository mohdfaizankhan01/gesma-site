# Deployment notes

The site is **static** — just upload the files below to any web host
(Netlify, Cloudflare Pages, cPanel, Nginx, etc.).

## Publish ONLY these

```
index.html
privacy.html
safeguarding.html
impressum.html
style.css
main.js
assets/            (fonts, fontawesome, logo, gallery photos)
```

## NEVER publish these (information disclosure risk)

| File / folder        | Why it must be excluded                              |
|----------------------|------------------------------------------------------|
| `.git/`              | Exposes full source history — attackers scan for it. |
| `.DS_Store`          | Leaks file/directory names.                          |
| `*.docx`             | Internal content drafts.                             |
| `numbers.jpeg`       | Internal working file, not used by the site.         |
| `DEPLOY-NOTES.md`    | Internal doc (this file).                            |

If your host deploys an entire folder, either point it at a clean
export containing only the "publish" list above, or confirm the host
blocks dotfiles and the file types listed.

## Recommended host security headers

Set these at the hosting layer (format depends on host — ask if you
need the exact file for yours):

- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`

Serve the site over HTTPS only.
