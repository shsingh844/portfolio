# Shivani Singh - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](https://my-portfolio-url.onrender.com)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-success)](https://my-portfolio-url.onrender.com)
[![Secure](https://img.shields.io/badge/Analytics-Secure-blue)](https://github.com/shsingh844/portfolio)

> Modern, responsive portfolio website showcasing AI/ML engineering expertise, full-stack development skills, and innovative project work with production-grade security.

## About
A **Full Stack Developer** with 3+ years of experience building production applications and scalable infrastructure. Currently pursuing a Doctorate in Business Administration with a focus on Business Intelligence & Data Analytics.

**Available for full-time opportunities in AI/ML engineering and full-stack development roles.**

## Features

### **Modern Design**
- Glassmorphism UI with smooth animations
- Responsive design optimized for all devices
- Interactive navigation with smooth transitions
- Hardware-accelerated animations for optimal performance

### **SEO Optimized**
- Complete meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card integration
- Semantic HTML structure
- Fast loading with optimized assets

### **Secure Analytics**
- **Production-grade security** - No secrets in code
- Google Analytics 4 integration with environment variables
- Custom event tracking for user interactions
- Portfolio engagement metrics
- Contact and project interaction tracking

### **Performance Optimized**
- Critical CSS loading strategy
- Font preloading with fallbacks
- Hardware acceleration enabled
- Optimized animations and transitions

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with modern features (Grid, Flexbox, Backdrop Filters)
- **Analytics**: Google Analytics 4 (securely configured)
- **Build System**: Node.js with environment variable injection
- **Deployment**: Render with automated builds
- **Version Control**: Git & GitHub

## Project Structure

```
portfolio/
├── index-template.html     # Source template (tracked in git)
├── index.html              # Generated file (ignored by git)
├── build.js                # Build script for environment variables
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Dependency lock file
├── .gitignore             # Secure git configuration
├── resume/
│   └── my_resume.pdf # Downloadable resume
├── assets/
│   ├── images/             # Portfolio images
│   └── icons/              # Custom icons
└── README.md               # This file
```

## Quick Start (Development)

### **Prerequisites**
- Node.js (any recent version)
- Git

### **Local Development**
1. **Clone the repository**
   ```bash
   git clone https://github.com/shsingh844/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build for development**
   ```bash
   # Without analytics (development mode)
   npm run build
   
   # With analytics (testing)
   GA_MEASUREMENT_ID=your-ga-id npm run build
   ```

4. **View locally**
   ```bash
   # Open index.html in browser or use local server
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

## Production Deployment

### **Render (Recommended)**
1. **Fork this repository**
2. **Connect to Render**
   - Create new Static Site
   - Connect your GitHub repository
3. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.`
4. **Add Environment Variable**
   - **Key**: `GA_MEASUREMENT_ID`
   - **Value**: Your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`)
5. **Deploy** - Automatic deployment on every push!

### **Other Platforms**
- **Netlify**: Same build command, add environment variable in dashboard
- **Vercel**: Configure build settings and environment variables
- **GitHub Pages**: Requires workflow modification for build step

## Security Features

This portfolio implements **production-grade security**:

- ✅ **No secrets in code** - Analytics ID stored as environment variable
- ✅ **Generated builds** - Source template separate from deployed file
- ✅ **Secure git** - `.gitignore` prevents committing sensitive files
- ✅ **Environment-based config** - Different settings for dev/prod

### **How it works:**
1. **`index-template.html`** contains placeholder `{{GA_MEASUREMENT_ID}}`
2. **Build script** replaces placeholder with environment variable
3. **Generated `index.html`** has real analytics ID
4. **Git tracks template only** - no secrets in repository

## Customization

### **For Your Own Portfolio:**
1. **Fork the repository**
2. **Update personal information** in `index-template.html`
3. **Replace project details** and links
4. **Modify color scheme** in CSS variables
5. **Add your resume** to `/resume/` folder
6. **Configure analytics** with your GA4 Measurement ID
7. **Deploy** with environment variable configuration

### **Key Files to Modify:**
- `index-template.html` - All content and styling
- `package.json` - Project metadata
- `README.md` - Documentation

## Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## Key Sections

### **About**
- Professional summary and career objectives
- Work authorization status (US CPT & UK visa sponsorship)
- Key strengths in AI/ML and full-stack development

### **Experience**
- Interactive timeline of professional experience
- Detailed role descriptions with quantified achievements
- From startup environments to enterprise companies

### **Projects**
- Showcase of notable AI/ML and full-stack projects
- Live demo links with tracking
- Technology stack highlights

### **Skills**
- Comprehensive technical skill matrix
- AI/ML technologies (LLM integration, Agent Systems)
- Full-stack development tools and frameworks
- Data analytics and cloud technologies

### **Education & Research**
- Academic background and ongoing doctoral research
- Research interests in AI ethics and financial technology
- Publications and academic achievements

## Analytics & Tracking

The portfolio includes comprehensive analytics to track:
- Page views and user sessions
- Section navigation patterns
- Contact interaction rates
- Resume download metrics
- Project demo engagement

**Privacy-conscious implementation:**
- Analytics only loads in production
- Graceful degradation when disabled
- User-friendly status indicators

## SEO Features

- **Meta descriptions** optimized for AI Engineer keywords
- **Schema markup** ready for rich snippets
- **Social sharing** optimized with Open Graph tags
- **Mobile-first** indexing ready
- **Core Web Vitals** optimized for performance

## Development Notes

### **Build System**
```bash
# Development build (no analytics)
npm run build

# Production build (with analytics)
GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build

# File watching (for development)
# Add to package.json if needed
```

### **Environment Variables**
- `GA_MEASUREMENT_ID` - Google Analytics 4 Measurement ID
- Automatically handled by hosting platforms
- Fallback to development mode if not set

### **Browser Support**
- Modern browsers (ES6+)
- CSS Grid and Flexbox support
- Backdrop filter support (graceful degradation)

## Connect

- 💼 [LinkedIn](https://linkedin.com/in/shivani-singh13)
- 💻 [GitHub](https://github.com/shsingh844)
- 📧 [Email](mailto:shsingh844@gmail.com)
- 🌐 [Portfolio](https://my-portfolio-url.onrender.com)

---

> **Open to Opportunities:** AI/ML engineering and full-stack development positions
> - 🇺🇸 **US**: Remote work and Bay Area on-site roles (CPT authorized)
> - 🇬🇧 **UK**: London-based positions with skilled worker visa sponsorship (required)

---

**If you found this portfolio template helpful, please consider giving it a star!**