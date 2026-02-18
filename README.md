# Shivani Singh — Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](https://shivani-singh-portfolio.onrender.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-success)](https://shivani-singh-portfolio.onrender.com/)

> Personal portfolio website for a Full Stack / AI engineer, with smart location-based content, Google Analytics, and a secure build pipeline.

---

## About

A **Full Stack Developer** with 3+ years of experience building production AI applications and scalable infrastructure. Currently pursuing a Doctorate in Business Administration with a focus on Business Intelligence & Data Analytics.

**Open to full-time opportunities in India and the UK.**

---

## Features

### Smart Location Detection
The portfolio automatically detects whether a visitor is based in India or elsewhere and adapts the content accordingly — no manual switching needed.

| Signal used | Priority |
|---|---|
| `?region=` URL parameter | Highest (useful for testing) |
| Browser timezone (`Asia/Kolkata`) | High |
| Browser language (`en-IN`, `hi`) | Medium |
| System locale | Low |

**India visitors see:**
- 🇮🇳 India-optimised resume download
- Indian phone number (`+91 9818155639`)

**All other visitors see:**
- 🇬🇧 UK / international resume download
- US phone number (`+1 571 337 0488`)

### Profile Photo
Profile photo hosted on Cloudinary — keeps the GitHub repository free of binary assets. Falls back gracefully to initials (`SS`) if the image fails to load.

### Google Analytics 4
- Integrated via environment variable — no API keys hardcoded in source
- Tracks page views, section navigation, resume downloads, scroll depth, and time on page
- Analytics only activates in production (when `GA_MEASUREMENT_ID` is set)

### Sections
- **About** — Summary, work authorization status (India / UK / US), key strengths
- **Experience** — Interactive timeline covering Independent Consulting, Mixhalo, Extreme Networks, and academic roles
- **Projects** — Windborne Constellation Tracker (Claude API), Sustainable Fashion Analytics Platform (GPT-4 + LangChain)
- **Skills** — AI/ML, full-stack, data & analytics, DevOps & cloud
- **Education** — DBA (Westcliff), MS Computer Information Systems (Boston University), B.Tech (IGDTUW)
- **Research** — Doctoral research on reputational contagion in banking systems

### Design
- Glassmorphism UI with smooth animations
- Fully responsive — mobile, tablet, and desktop
- Hardware-accelerated animations

---

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Photo hosting:** Cloudinary
- **Analytics:** Google Analytics 4
- **Build:** Node.js (`build.js`) with environment variable injection
- **Deployment:** Render (static site)

---

## Project Structure

```
portfolio/
├── index-template.html     # Source template (tracked in git)
├── index.html              # Generated file (ignored by git)
├── build.js                # Injects GA_MEASUREMENT_ID at build time
├── package.json
├── .gitignore
├── resume/
│   ├── Resume_SSingh_India.pdf
│   └── Resume_SSingh_UK.pdf
└── README.md
```

---

## Local Development

**Prerequisites:** Node.js (any recent version), Git

```bash
# 1. Clone
git clone https://github.com/shsingh844/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Build (without analytics)
npm run build

# 4. Serve locally (required for resume downloads to work)
python3 -m http.server 8000
# or: npx serve .
```

Visit `http://localhost:8000`.

### Testing smart detection locally

```bash
# Simulate India visitor
http://localhost:8000?region=india

# Simulate UK / international visitor
http://localhost:8000?region=uk
```

---

## Production Deployment (Render)

1. Fork this repository
2. Create a new **Static Site** on Render and connect your GitHub repo
3. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.`
4. Add environment variable:
   - **Key:** `GA_MEASUREMENT_ID`
   - **Value:** Your GA4 Measurement ID (e.g. `G-XXXXXXXXXX`)
5. Deploy — smart detection works automatically

The same setup works on Netlify and Vercel with equivalent environment variable configuration.

---

## How the Build Works

`index-template.html` contains the placeholder `{{GA_MEASUREMENT_ID}}`. The build script (`build.js`) replaces it with the real environment variable value and writes the result to `index.html`. Only the template is committed to git — the generated file and any sensitive values stay out of the repository.

---

## Note on Email Display

If your site runs behind Cloudflare, its **Email Address Obfuscation** feature may replace the email address with `[email protected]`. To fix this, go to Cloudflare Dashboard → your domain → **Scrape Shield** → disable **Email Address Obfuscation**.

---

## Connect

- 💼 [LinkedIn](https://linkedin.com/in/shivani-singh13)
- 💻 [GitHub](https://github.com/shsingh844)
- 🌐 [Portfolio](https://shivani-singh-portfolio.onrender.com/)

---

*Open to AI/ML engineering and full-stack development roles — India (immediate) and UK (with visa sponsorship).*