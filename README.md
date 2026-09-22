# Stix Paediatric Practice — PANS/PANDAS website

A self-contained, 3-page static site (HTML/CSS/JS, no build step) ready to
host for free on GitHub Pages.

## Pages

- `index.html` — **What is PANS/PANDAS?** Definitions, symptoms, and how it
  differs from typical childhood OCD.
- `physiology.html` — **Physiology & Management.** The proposed autoimmune
  mechanism, diagnostic criteria (PANDAS vs. PANS side by side), and current
  treatment/management approaches.
- `join.html` — **Join a Group.** Links to national PANS/PANDAS communities
  and clinician networks, plus a sign-up form for an in-house parent support
  group.

Shared files: `styles.css` (all styling) and `script.js` (mobile menu, footer
year, form placeholder handling).

## Content and sources

The medical content is written from, and cites, the following sources (full
links are also listed at the bottom of the relevant pages):

- NIMH, *PANS and PANDAS: Questions and Answers* (2025)
- American Academy of Pediatrics, *Pediatric Acute-Onset Neuropsychiatric
  Syndrome*, clinical report, Pediatrics Vol. 155 (2025)
- Rheumatology Advisor, *PANDAS: Diagnosis and Management Review*
- Łojek & Rzeszutek, *PANS and PANDAS – symptoms beyond OCD and tics: a
  systematic review*, Journal of Psychiatric Research, Vol. 187 (2025)
- Zych, Burdan, Ziomek, et al., *Current knowledge of PANDAS and PANS
  syndromes in paediatric patients*, Journal of Pre-Clinical and Clinical
  Research (2024)
- PANDAS Network, clinical/scientific research overview and community
  resources (pandasnetwork.org)
- autism.org, *PANS/PANDAS Research Updates* webinar

PANS/PANDAS diagnosis and treatment are an area of active research and real
clinical debate — the copy is written to reflect that honestly (what's
established vs. still being studied). Keep that framing if you edit it; it
matters both for accuracy and for trust with families researching a
confusing diagnosis.

## 1. Customize the content

Before publishing, double-check:

- Contact link in each page's footer points to the right page on
  stix.co.za (currently `/contact-us`)
- The parent group's meeting details, once you have a real cadence/location
- Colors/fonts live at the top of `styles.css` under `:root` (currently a
  bright, child-friendly palette matching the practice's warm branding)

## 2. Put it on GitHub

If you don't already have a repository:

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Or use GitHub's web UI: create an empty repo (no README/license), then
"Add file → Upload files" and drag in all the files at once.

**Important:** make sure `index.html` lands at the repo's top level, not
inside a subfolder — GitHub Pages looks for it at the root.

## 3. Turn on GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a
   branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute or two, then refresh — GitHub will show your live URL:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

If GitHub Pages shows your README instead of the site, or a 404, add an
empty file named exactly `.nojekyll` to the repo root (Add file → Create new
file, leave the contents blank, commit). This tells GitHub Pages to skip
Jekyll processing and serve the files as-is.

Any time you push new commits to `main`, the live site updates automatically
within a minute or two.

## 4. Making the sign-up form actually send email

GitHub Pages only serves static files — it can't run server-side code, so
the forms currently just show a message instead of sending anything. The
easiest fix is a free form backend:

1. Sign up at [Formspree](https://formspree.io) (or Netlify Forms, Getform,
   etc.) and create a form to get an endpoint URL.
2. In the relevant `<form>` tag, add `action="https://formspree.io/f/yourFormId"`
   and `method="POST"`.
3. In `script.js`, remove the `event.preventDefault()` line for that form (or
   follow Formspree's AJAX docs) so it actually submits.

## Notes

- No build tools, frameworks, or dependencies — just open any page in a
  browser to preview locally.
- Internal nav links point to the plain filenames (`index.html`,
  `physiology.html`, `join.html`), so the site works the same locally and on
  GitHub Pages.
