# Akshansh Yadav — Academic Portfolio

A simple, responsive, single-page academic website built with Next.js and Tailwind CSS. It includes a personal introduction, six published/accepted papers, three submitted manuscripts, eight research/engineering projects, education, experience, and contact links.

## Run locally

Install Node.js 22.13 or later (Node.js 22 LTS is suitable). Extract this folder, open a terminal inside it, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

## Publish to your GitHub Pages address

The intended address is **https://akshanshyadav-research.github.io/**. It becomes live only after the repository is created and a deployment succeeds.

1. Sign in to GitHub as `akshanshyadav-research`.
2. Create a **public** repository named exactly `akshanshyadav-research.github.io`. If it already exists, preserve its contents and review changes before replacing anything. The commands below assume a new, empty repository; do not initialize it with a README.
3. In this project folder, run:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Add academic portfolio"
   git remote add origin https://github.com/akshanshyadav-research/akshanshyadav-research.github.io.git
   git push -u origin main
   ```

   Authenticate using your normal GitHub sign-in flow if prompted.

4. Open the repository's **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. If an initial run failed before step 4, rerun it now.
6. Wait for both build and deploy to succeed. Open the published address shown in **Settings → Pages**.

Future pushes to `main` automatically rebuild and publish the page. No paid hosting, backend, or API keys are required.

### Alternative: publish the already-built page without installing Node.js

The delivery archive also includes a separate `github-pages-ready` folder containing the tested static export. For this alternative, publish **only the contents of that folder** into the root of the new repository, including `_next`, `index.html`, and the `.nojekyll` file. Do not upload the containing folder itself.

Set **Settings → Pages → Source → Deploy from a branch**, then choose **main** and **/(root)**. Use Git or GitHub Desktop to preserve all files, including the dotfile. This alternative does not need the Next.js source or the Actions workflow in the deployed repository. To update the static version, rebuild the source and replace the export.

## Edit your website

| Change | File |
| --- | --- |
| Biography, email, links, publication statuses, projects | `content/profile.js` |
| Page structure, experience, honors | `app/page.jsx` |
| Colors, spacing, typography, responsive rules | `app/globals.css` |
| Search title and description | `app/layout.jsx` |
| Profile photograph | `public/portrait.jpg` |
| Downloadable CV | `public/Akshansh-Yadav-CV.pdf` |
| Deployment workflow | `.github/workflows/deploy.yml` |

To make a production export:

```bash
npm run build
```

The complete static website is generated in `out/`. To preview that export, serve `out/` through a local HTTP server, for example `python -m http.server 8000 --directory out`, then open http://localhost:8000. Do not use `next start` for a static export.

## Content notes

- The supplied two-page résumé and attached papers are the sources of profile and publication details.
- Duplicate manuscript/proof copies of *Prune Before You Attend* are represented as one publication.
- GateAttn-ViT and the DATE 2025 paper have published-paper evidence in the supplied files. Other accepted-paper statuses follow the résumé and are not independently upgraded to published.
- CRAFT, FreqPress, and the E-Nose manuscript are explicitly submitted work. DATE 2027 is the target conference year, not an invented submission date.
- SmartBypass is included as a research project. Its authors, venue, and submission status are not inferred from the anonymous manuscript.
- Google Scholar could not be read in this environment. The correct supplied profile link is included, without citation counts or an h-index.
- Publisher DOI links are included where supplied. Manuscripts and author proofs are not copied into public assets. The supplied CV is downloadable as requested for the portfolio and contains its original contact information.
- No contact form or analytics is included. Email opens the visitor's mail application.

## Other repository names

The configuration targets the root user site above. For a project site such as `username.github.io/portfolio`, set `NEXT_PUBLIC_BASE_PATH=/portfolio` for both local development and the build (including the workflow), update the metadata base in `app/layout.jsx`, and rebuild. The photo, CV, favicon, and generated assets respect this base path.

## Official deployment references

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://nextjs.org/docs/app/guides/static-exports

Profile text, photographs, and publication material remain their respective owners' content. No open-source license for those assets is implied.
