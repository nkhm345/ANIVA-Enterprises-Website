# ANIVA Enterprises Website

Source code for **[anivaenterprises.com](https://anivaenterprises.com)** — a static
HTML/CSS site with no build step and no frameworks.

## How the site is hosted

The site is served by **Cloudflare Pages** (project `anivaenterprises`, on
Cloudflare's free plan). Pages watches this GitHub repository: **every push to
the `master` branch automatically deploys to production in about 15 seconds.**
There is no server, nothing to upload, and no other deploy mechanism.

- Production URLs: <https://anivaenterprises.com>, <https://www.anivaenterprises.com>,
  and the permanent alias <https://anivaenterprises.pages.dev> (same deployment)
- HTTPS certificates are issued and renewed automatically
- Deployment history and logs: Cloudflare dashboard → Workers & Pages → `anivaenterprises`

## Making and previewing changes

For a change you're confident in:

```bash
git pull
# edit files
git commit -am "Describe the change"
git push            # live on anivaenterprises.com ~15 seconds later
```

To **preview before going live**, push to a branch instead of `master`:

```bash
git checkout -b my-change
# edit files
git commit -am "Describe the change"
git push -u origin my-change
```

Cloudflare builds every branch at its own **preview URL** — find it in the
Pages dashboard under the deployment, or on the pull request if you open one.
Check the preview in a browser. When it looks right, merge it into `master`
(open a pull request on GitHub and merge it there, or locally:)

```bash
git checkout master
git merge my-change
git push            # now it's live in production
```

Then delete the branch — it did its job:

```bash
git branch -d my-change              # delete your local copy
git push origin --delete my-change   # delete it on GitHub
```

(Merging a pull request on GitHub offers a "Delete branch" button that does the
second command for you.) Deleting the branch stops future preview builds for
it; old preview deployments linger harmlessly in the Pages deployment history.

## Domain & DNS

- `anivaenterprises.com` is **registered at Cloudflare** (Registrar), renewing
  automatically each December at Cloudflare's at-cost price (~$10.45/yr).
  WHOIS privacy is included.
- **DNS is hosted in the same Cloudflare account.** The apex and `www` records
  point at the Pages project; the MX/SPF/DKIM records route email to Zoho.
  Don't edit DNS casually — the website and email both depend on it.

## Email

`mani@anivaenterprises.com` and `heju@anivaenterprises.com` are hosted on
**Zoho Mail Lite** (~$30/yr for both, renews each August 15).

- Webmail: <https://mail.zoho.com>
- Mail apps: IMAP `imap.zoho.com:993` (SSL), SMTP `smtp.zoho.com:465` (SSL),
  username = full email address
- Admin console: <https://mailadmin.zoho.com>

Email and website are fully independent — a website change can never affect mail.

## Accounts & access

| What | Where |
|---|---|
| Cloudflare (hosting + DNS + domain) | Account `mani@anivaenterprises.com`; `anivamani@gmail.com` is a second member with admin access (backup login) |
| Zoho Mail | Administered by `mani@anivaenterprises.com`; `anivamani@gmail.com` is the recovery address |
| GitHub repo | Owned by `nkhm345`; `smanivannan` has write access |

**Enable two-factor authentication on all of these accounts** if not already done.

## Repository layout

| Path | What it is |
|---|---|
| `index.html` | Root page — redirects to `Home/Home.html` |
| `Home/`, `AboutUs/`, `ContactUs/`, `LogisticsandSupplyChain/`, `TranslationServices/` | One folder per page: its HTML, CSS, JS, and images together |
| `Nav_Bar.css`, `Footer.css` | Shared styles for the navigation bar and footer |
| `_redirects` | Cloudflare Pages redirect rules (short vanity URLs like `/contactus.html`) |

## Known issues

- **The contact form does not send yet.** It posts to Web3Forms, but the access
  keys in `ContactUs/ContactUs.html` are placeholders (`WEB3FORMS_KEY_...`).
  Finishing it requires a free Web3Forms account and real keys. The direct
  email links on the contact page work regardless.
