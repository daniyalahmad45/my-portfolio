<p align="center">
  <img src="docs/logo.svg" alt="Personal Portfolio Website logo" width="120" height="120">
</p>

<h1 align="center">Daniyal Ahmad — Personal Portfolio</h1>

<p align="center">
  My personal portfolio site: projects, skills, experience and resume, all on one page.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white">
  <img alt="Deployed on Vercel" src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white">
</p>

---

## About

A single-page portfolio built with React and Tailwind CSS. The page scrolls through each section, and a tab bar at the top jumps between them.

## Features

- **Sections:** About, Projects, Resume (skills, experience, education, certifications) and Contact
- **Project cards** with a logo, tech stack, and links to the GitHub repo and demo video
- **Downloadable resume** as a PDF
- **Light and dark mode** toggle
- **Responsive layout** that works on phones and desktops
- **Cursor spotlight** effect that follows the mouse

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React (Create React App) |
| Styling | Tailwind CSS |
| Icons | Lucide React, React Icons, Devicon |
| Hosting | Vercel (deploys automatically from `main`) |

## Project structure

```
public/
  Daniyal Ahmad Resume.pdf   Resume linked from the download button
  daniyal_pic.png            Profile photo
src/
  App.js                     Page layout, sections, and all site content
  ProjectLogos.js            SVG logos shown on the project cards
docs/
  logo.svg                   Logo used in this README
```

## Running locally

You need [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/daniyalahmad45/my-portfolio.git
cd my-portfolio
npm install
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000) and reloads when you save a change.

To build a production version, run `npm run build`. The output goes to the `build/` folder.

## Updating content

Most of the content lives in data objects near the top of `src/App.js`:

- **Profile and links:** `profileData`
- **Projects:** `projects` (each one can set a `Logo` from `src/ProjectLogos.js`)
- **Skills:** `skills`, with icons set in `techIcons`

To update the resume, replace `public/Daniyal Ahmad Resume.pdf` with a new file of the same name.

Pushing to `main` redeploys the site on Vercel.

## Contact

- GitHub: [@daniyalahmad45](https://github.com/daniyalahmad45)
- LinkedIn: [daniyalahmad-cs](https://linkedin.com/in/daniyalahmad-cs/)
- Email: [daniyal.ahhmad45@gmail.com](mailto:daniyal.ahhmad45@gmail.com)
