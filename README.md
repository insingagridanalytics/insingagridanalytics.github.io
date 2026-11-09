# Insinga Grid Analytics website

Static website for Insinga Grid Analytics, hosted on GitHub Pages at https://insingagridanalytics.github.io

No build step: plain HTML, CSS and one small JavaScript file.

## Files

```
index.html                    the whole page (text, layout and styles)
README.md                     this file
privacy.html                  privacy notice (linked from the footer)
assets/site.js                mobile menu, demo booking buttons, contact form sending
assets/favicon.svg            browser tab icon
assets/hero.jpg               hero still (shown before the film loads)
assets/hero-loop.mp4          hero background film (12.5 s loop)
assets/field.mp4              founder field video (About us)
assets/field-poster.jpg       still frame shown before the video loads
assets/electricity-access.jpg planning module image
assets/energy-losses.jpg      Insinga LossFinder image
assets/data-sharing.jpg       data sharing module image
assets/founder.jpg            Nshuti Elisé
assets/cofounder.jpg          Vital Ahishakiye
assets/cofounder2.jpg         Mandela Wilson
assets/team-aline.jpg         Aline Uwimana
assets/team-eric.jpg          Eric Ibyishaka
assets/team-samuel.jpg        Samuel Ishimwe
```

## Publishing on GitHub Pages

1. Upload everything in this folder (index.html, privacy.html, README.md and the assets folder) to the main branch of the repository `insingagridanalytics.github.io`. The files must sit at the top level of the repository, not inside a subfolder.
2. In Settings > Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
3. Check the Actions tab for a green tick, then open the site in a private window.

To update a single file later: Add file > Upload files, drag the file in (into the assets folder for images) and commit. GitHub replaces the old version.

## Contact form

The form is connected to Formspree (endpoint `https://formspree.io/f/mrpprgyq`). Messages go to the email addresses linked in the Formspree dashboard. The form ID is meant to be public; protect the Formspree account itself with a strong password.

If messages stop arriving, check the Spam tab in the Formspree dashboard and the spam folder in Gmail.

## Moving to your own domain later

1. In Settings > Pages > Custom domain, enter the domain and save.
2. Add the DNS records GitHub lists ("Managing a custom domain for your GitHub Pages site") at your domain registrar.
3. Tick "Enforce HTTPS" once available.
4. Update the `og:url` and `og:image` addresses at the top of index.html to the new domain.

## Editing content

All text is in index.html. Search for the sentence you want to change and edit it directly on GitHub (pencil icon), then commit.

## Before going public

- Replace or regenerate AI-generated images that contain spelling errors or another company's logo (energy-losses.jpg, data-sharing.jpg).
- Confirm employers and partners named on the page (71point4, Rwanda Space Agency) are comfortable being mentioned.
- Turn on two-factor authentication for every GitHub account with access to this repository.

## Updating from an earlier version

Upload index.html, and delete `lossfinder-demo.html`, `assets/ai-analyst.jpg` and `assets/data-foundation.jpg` from the repository if they are still there.
