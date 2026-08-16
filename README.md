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

## Making changes — always preview first

**Rule: never push directly to `master`.** Every push to `master` changes the
live website within seconds, with no review step. Instead, make every change on
a branch, check Cloudflare's preview of that branch in a browser, and only then
merge into `master`. This applies to all changes, including one-line text fixes.

1. Start from an up-to-date `master` and create a branch for the change:

   ```bash
   git checkout master
   git pull
   git checkout -b my-change
   ```

2. Edit files, commit, and push the **branch** (not `master`):

   ```bash
   git commit -am "Describe the change"
   git push -u origin my-change
   ```

3. Cloudflare builds every branch at its own **preview URL** — find it in the
   Pages dashboard under the deployment, or on the pull request if you open one.
   Open the preview in a browser and check the change. Nothing on the live site
   has changed yet.

4. When the preview looks right, merge into `master` — that is the moment the
   change goes live. Open a pull request on GitHub and merge it there, or
   locally:

   ```bash
   git checkout master
   git merge my-change
   git push            # now it's live on anivaenterprises.com
   ```

5. Delete the branch — it did its job:

   ```bash
   git branch -d my-change              # delete your local copy
   git push origin --delete my-change   # delete it on GitHub
   ```

   (Merging a pull request on GitHub offers a "Delete branch" button that does
   the second command for you.) Deleting the branch stops future preview builds
   for it; old preview deployments linger harmlessly in the Pages deployment
   history.

If a bad change does reach `master`, the fastest fix is to revert it
(`git revert <commit>` then push) — or, in the Cloudflare Pages dashboard, open
the previous good deployment and choose **Rollback to this deployment**.

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

