# Deployment notes

The site is **static** — just upload the files below to any web host
(Netlify, Cloudflare Pages, cPanel, Nginx, etc.).

## Publish ONLY these

```
.htaccess          (HTTPS redirect + security headers — Apache hosts)
index.html
privacy.html
safeguarding.html
impressum.html
style.css
main.js
assets/            (fonts, fontawesome, logo, gallery photos)
```

Upload everything above into the web root (usually `public_html/`).
Note: `.htaccess` is a hidden file — enable "show hidden files" in your
FTP client / cPanel File Manager, or it may not appear after upload.

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

## Security headers

These are already configured in the included **`.htaccess`** file
(Apache / cPanel hosts) — HTTPS redirect, CSP, X-Frame-Options,
X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.

After the site is live and HTTPS works everywhere, enable HSTS by
uncommenting the `Strict-Transport-Security` line in `.htaccess`.

If your host runs **Nginx** instead of Apache, the `.htaccess` file is
ignored — ask and the same rules can be provided as an Nginx server block.
