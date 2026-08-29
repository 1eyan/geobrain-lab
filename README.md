# GeoBrain Research Group

A bilingual static academic website for the GeoBrain research group, built with Astro and deployed with GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Content maintenance

- Team, research-area and project records live in `src/data/site.ts`.
- Verified publications live in `src/content/publications/`.
- Bilingual news records live in `src/content/news/`.
- Missing member profiles and paper repositories can be submitted through `content-supplement.json`.
- `npm run build` validates schemas, member references, bilingual routes and deployment-safe links.

### Updating the starter handbook

The handbook is published only as the encrypted asset `public/guides/geophysics-ai-onboarding.enc`. Keep the source PDF outside the repository and generate a replacement locally:

```powershell
$env:GEOBRAIN_GUIDE_PASSWORD='your-password'
npm run encrypt:guide -- 'C:\path\to\updated-handbook.pdf'
Remove-Item Env:GEOBRAIN_GUIDE_PASSWORD
```

Commit the updated `.enc` file to `main`; GitHub Pages will validate and republish it automatically. Never place the unencrypted PDF under `public/` or commit it to the repository. The password is not stored in the site source: the browser derives a key from the entered password and decrypts the guide locally.

Replace `public/guides/geophysics-ai-onboarding-cover.png` as well whenever the cover design changes.

Security note: this provides encrypted static access, but a weak password can still be guessed offline. Earlier repository commits that contained an unencrypted PDF must be removed from Git history before the document should be considered confidential.

### Updating member photos

- Use a square JPG or PNG, at least 600 × 600 px, with the member's permission or an official reusable source.
- Follow the stable filenames listed in `content-supplement.json`, for example `public/member-photos/qi-liu.webp`.
- Record the official source or `member-provided` in `photoSource`; ambiguous search-result images are not accepted.
- Add the relative filename and source to the corresponding member record in `src/data/site.ts`. The existing name avatar remains the safe fallback until both fields are present.

Publication discovery may begin with Google Scholar or ResearchGate, but every entry must retain an authoritative verification source such as an institutional profile, DOI publisher page, ORCID record or arXiv author record.

## Brand assets

- `public/geobrain-logo.jpg` is the group mark supplied by the website owner and is used for every GeoBrain brand instance.
- `public/pku-emblem.png` comes from the official Peking University Visual Identity Management Office download center.
- `public/hit-emblem.png` comes from the official Harbin Institute of Technology emblem page.
- `public/jianwei-ma.jpg` is self-hosted from Professor Jianwei Ma's official Peking University faculty profile.
- `public/member-photos/` contains authorized team portraits matched by name from SeismicBench's `public/team/` source directory and optimized as WebP for the site.
- SeismicBench retains its own project identity inside the featured-project section.
- The official model and dataset organization is `https://huggingface.co/GeoBrain`.
