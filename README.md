# Harbor Pediatrics — website

A simple, self-contained static site (HTML/CSS/JS, no build step) ready to host
for free on GitHub Pages.

## Files

- `index.html` — the page content
- `styles.css` — all styling
- `script.js` — mobile menu, footer year, contact-form placeholder

## 1. Customize the content

Before publishing, update in `index.html`:

- Practice name ("Harbor Pediatrics") — also in the `<title>`, the nav
  brand, and the footer
- Email, phone, and location under the "Book an evaluation" section
- The testimonial quote
- Colors/fonts live at the top of `styles.css` under `:root` if you want to
  adjust the palette

A note on content: PANDAS/PANS diagnostic criteria and treatment are an area
of active research and some clinical debate. Keep the copy's honest, no-
guarantees framing when you edit it — it's there deliberately, for both
accuracy and trust with families researching a confusing diagnosis.

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

Replace `<your-username>/<your-repo>` with your actual GitHub username and a
repository name you've created on github.com (Settings aren't needed yet —
just create an empty repo there first, with no README/license, so `git push`
doesn't conflict).

## 3. Turn on GitHub Pages

1. On GitHub, go to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. Wait a minute or two, then refresh the page — GitHub will show your live
   URL, typically:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

Any time you push new commits to `main`, the live site updates automatically
within a minute or two.

## 4. Custom domain (optional)

If you own a domain, add it under Settings → Pages → **Custom domain**, then
create a `CNAME` record at your registrar pointing to
`<your-username>.github.io`. GitHub will add a `CNAME` file to the repo for
you automatically.

## 5. Making the contact form actually send email

GitHub Pages only serves static files — it can't run server-side code, so the
form currently just shows a message instead of sending anything. The easiest
fix is a free form backend:

1. Sign up at [Formspree](https://formspree.io) (or Netlify Forms, Getform,
   etc.) and create a form to get an endpoint URL.
2. In `index.html`, add `action="https://formspree.io/f/yourFormId"` and
   `method="POST"` to the `<form>` tag.
3. In `script.js`, remove the `event.preventDefault()` block (or leave it and
   let Formspree's own JS/AJAX handle it per their docs) so the form actually
   submits.

## Notes

- No build tools, frameworks, or dependencies — just open `index.html` in a
  browser to preview locally.
