# Omaco Professional Services

Official website for **Omaco Professional Services** — Chartered Accountants, Chartered Tax Practitioners, and Financial & Management Consultants in Nigeria.

Live site: [https://omacoprofessionalservices.com](https://omacoprofessionalservices.com)

## Overview

A fully static, multi-page marketing website built with plain HTML, Bootstrap 5, and jQuery. No build step or backend required — upload the files straight to any web host (e.g. cPanel `public_html`).

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Services hub | `service.html` |
| Contact | `contact.html` |
| FAQ | `faq.html` |
| Privacy Policy | `privacy-policy.html` |
| 404 | `404.html` |
| Audit & Assurance | `service-audit.html` |
| Accounting | `service-accounting.html` |
| Secretarial Services | `service-secretarial-services.html` |
| Financial Advisory | `service-financial-advisory.html` |
| Tax & Tax Consultancy | `service-tax-and-tax-consultancy.html` |
| Accounting Software Setup & Training | `service-accounting-software-training.html` |

## Project Structure

```
├── index.html              # Home page
├── service-*.html          # Individual service pages
├── *.html                  # Supporting pages
├── css/
│   ├── bootstrap.min.css   # Bootstrap 5 (customized)
│   └── style.css           # Custom styles
├── js/
│   └── main.js             # Custom scripts (navbar, contact form, etc.)
├── img/                    # Images (jpg, webp, avif, png)
├── lib/                    # Vendor libraries (animate, easing, wow)
├── robots.txt
└── sitemap.xml
```

## Deployment

The site is fully static:

1. Upload all files/directories to your host's web root (e.g. cPanel `public_html`).
2. Keep `index.html` at the root (not in a subfolder).
3. Ensure `robots.txt` and `sitemap.xml` reference your live domain.
4. Enable HTTPS (AutoSSL / Let's Encrypt) and force HTTPS redirect.

## Development Notes

- **CSS cache busting**: `style.css` is referenced with a version query string (e.g. `css/style.css?v=20260918.3`). When editing styles, bump this version in every HTML page or visitors may see stale CSS.
- **Contact form**: Submissions are handled client-side via [FormSubmit.co](https://formsubmit.co), emailing `info@omacoprofessionalservices.com`.
- **No build step**: HTML, CSS, and JS are served as-is.

## License

© 2026 Omaco Professional Services. Designed by Ticksera.