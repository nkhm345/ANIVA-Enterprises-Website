# ANIVA Enterprises Website

Source code for **[anivaenterprises.com](https://anivaenterprises.com)** — a static
HTML/CSS site, no build step, no frameworks to maintain.

## How updates work

**Anything pushed to the `master` branch goes live automatically in about 15
seconds.** Cloudflare Pages watches this repository and redeploys on every push —
there is no server to upload to and nothing else to do.

```
edit files  →  git commit  →  git push  →  live
```

**Not sure about a change?** Push it to any other branch instead. Cloudflare
builds every branch at its own preview URL (shown in the Pages dashboard or on
the pull request) so you can look at it in a browser before merging to `master`.

## Repository layout

| Path | What it is |
|---|---|
| `index.html` | Root page — just redirects to `Home/Home.html` |
| `Home/`, `AboutUs/`, `ContactUs/`, `LogisticsandSupplyChain/`, `TranslationServices/` | One folder per page: its HTML, CSS, JS, and images together |
| `Nav_Bar.css`, `Footer.css` | Shared styles for the navigation bar and footer |
| `_redirects` | Cloudflare Pages redirect rules (the short vanity URLs like `/contactus.html`) |

## Where everything lives

| Piece | Provider | Notes |
|---|---|---|
| Website hosting | Cloudflare Pages (project `anivaenterprises`) | Free plan; deploys from this repo |
| DNS | Cloudflare | Same account |
| Email (mani@ / heju@) | Zoho Mail Lite | Webmail at mail.zoho.com; IMAP `imap.zoho.com:993`, SMTP `smtp.zoho.com:465` |
| Domain registration | Cloudflare Registrar (~$10.45/yr) | Transferred from Network Solutions Nov 2026 |

Account access: the Cloudflare and Zoho accounts are administered as
`mani@anivaenterprises.com`, with `anivamani@gmail.com` as the independent
backup (second Cloudflare member; Zoho recovery address). The GitHub repo is
owned by `nkhm345`; `smanivannan` has write access. **Enabling two-factor
authentication on all of these is recommended and pending.**

Annual running costs: Zoho ~$30 (renews Aug 15) + domain ~$10.45 (renews Dec).
Everything else is free.

## Known issues (inherited from the 2016 site)

- **The homepage appears blank below the navigation bar.** Every page loads
  jQuery and the Ubuntu font over `http://`, which browsers block on an HTTPS
  site ("mixed content"). The homepage content fades in via jQuery, so it never
  appears; the About Us carousel is broken the same way. **The fix** is changing
  `http://` to `https://` in the `<script src=...>` and font `<link href=...>`
  tags of all six HTML files — a great first practice commit.
- **The contact form does not send yet.** It posts to Web3Forms, but the access
  keys in `ContactUs/ContactUs.html` are placeholders (`WEB3FORMS_KEY_...`).
  Finishing it requires a free Web3Forms account and swapping in real keys. The
  direct email links on the contact page work regardless.

## Migration status — August 2026 (delete this section when complete)

- [x] DNS moved to Cloudflare
- [x] Old mail copied to Zoho (Mani done; Heju in progress)
- [x] DKIM configured
- [ ] MX cutover — the moment new mail starts arriving at Zoho
- [ ] Post-cutover migration re-run (catches mail that arrived during the switch)
- [ ] Reconnect Outlook / phone mail apps to Zoho
- [ ] Point anivaenterprises.com at Cloudflare Pages (site currently still served by SiteGround)
- [ ] Cancel SiteGround (paid through Jan 9, 2027 — cancel "at expiration" by December)
- [ ] Transfer domain to Cloudflare Registrar (initiate by mid-November; approval email goes to the registrant contact, then switch that contact to anivamani@gmail.com)
