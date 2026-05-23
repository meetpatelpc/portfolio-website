# portfolio-website — React

A clean, modern single-page portfolio built with **React** and **Vite** for entry-level job seekers.

## Tech stack

- React 19
- Vite 6
- Plain CSS (no extra UI library)

## Project structure

```
src/
├── components/     Header, Hero, About, Skills, Projects, Education, Contact, Footer
├── data/           portfolioData.js — edit your info here
├── hooks/          useScrollHeader, useFadeIn
├── App.jsx
├── main.jsx
└── index.css
```

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Upload the `dist` folder to GitHub Pages, Netlify, or Vercel.

## Customize

Edit **`src/data/portfolioData.js`** — name, email, skills, projects, education, and social links.

**Sync from your Word resume:**

```bash
npm run extract-resume
```

Reads `C:\My work\Job\Resume\Meet_Patel_Resume_Updated.docx` and saves text to `resume_content.txt`. Update `portfolioData.js` with exact college names, dates, and projects from that file.

**Resume PDF download:** Export your `.docx` as PDF to `public/resume/Meet_Patel_Resume.pdf`.

**Profile photo:** Place your image in `public/images/` (e.g. `myphoto.jpg`) and set `photo: "/images/myphoto.jpg"` in `portfolioData.js`. If the image fails to load, your initials are shown instead.

Change the accent color in **`src/index.css`**: `--accent: #6ee7b7`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
"# portfolio-website" 
"# personal-portfolio" 
