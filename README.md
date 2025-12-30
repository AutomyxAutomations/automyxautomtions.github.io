# Automyx Automations Portfolio Website

A modern, responsive portfolio website for Automyx Automations, showcasing AI-powered workflow automation services, use cases, and lead generation tools.

## Overview

This repository hosts the source code for the official website of Automyx Automations, an AI automation agency specializing in workflow optimization for startups, SaaS teams, SMEs, and operations-heavy businesses. The site demonstrates how we eliminate repetitive tasks, reduce costs, and enable scalable growth through AI integrations, custom GPTs, and no-code/low-code solutions.

### What It Is
A static, conversion-focused marketing site built with vanilla HTML5, JavaScript, and Tailwind CSS. It includes pages for services, use cases, process explanation, about, and contact/booking.

### Who It's For
- Potential clients seeking automation solutions
- Developers reviewing or contributing to the codebase
- Recruiters evaluating technical skills

### Problem It Solves
Helps businesses discover and engage with Automyx's services by clearly communicating value, building trust, and driving leads through optimized CTAs and user flows.

## Features

- **Modern Responsive UI**: Mobile-first design with clean layouts, premium typography, and subtle animations.
- **Conversion-Focused Layout**: Strong visual hierarchy, clear CTAs, and outcome-driven copy to guide visitors toward booking audits.
- **Performance-Optimized**: Lightweight static site with fast load times via CDN assets and minimal dependencies.
- **SEO-Friendly Structure**: Semantic HTML, meta tags, and structured content for search engine visibility.
- **Accessible Design**: WCAG-compliant elements, keyboard navigation, and screen reader support.

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5
- **Styling**: Tailwind CSS (via CDN)
- **Deployment**: GitHub Pages
- **Other**: Inter font (Google Fonts), minimal custom CSS

## Project Structure

```
automyxautomtions.github.io/
├── index.html              # Home page with hero, services overview, and CTAs
├── services.html           # Detailed services page with problem-solution-outcome format
├── how-it-works.html       # Process explanation (discovery to support)
├── solutions.html          # Use cases (sales, marketing, ops, support)
├── about.html              # Team, approach, and company info
├── contact.html            # Contact form and booking integration
├── scripts.js              # Vanilla JS for nav toggles and smooth scrolling
├── styles.css              # Minimal custom styles (font fallbacks)
└── README.md               # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js and npm for local server (e.g., via `http-server`)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AutomyxAutomations/automyxautomtions.github.io.git
   cd automyxautomtions.github.io
   ```

2. No build step required—files are static.

### Local Development
- Open any `.html` file directly in your browser for preview.
- For a local server (recommended for testing links/scripts):
  ```bash
  npx http-server . -p 8080
  ```
  Then visit `http://localhost:8080/index.html`.

## Scripts / Commands

Since this is a static site, there are no build scripts. Use your browser or a simple server for preview.

- **Preview**: Open `index.html` in browser or run `npx http-server .`
- **No build command**: All assets are served via CDN or inline.

## Deployment

The site is deployed via GitHub Pages on the `main` branch.

1. Push changes to `main`:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
2. GitHub Pages will automatically rebuild and deploy from the root directory.

For custom domains, update repository settings under "Pages."

## Customisation

- **Content**: Edit text, images, and links in the respective `.html` files (e.g., hero copy in `index.html`).
- **Branding**: Update logo, colors, and fonts in `styles.css` or Tailwind config (inline in `<head>`).
- **CTAs**: Modify buttons and forms in `contact.html` or other pages.
- **Assets**: Replace placeholder images (e.g., Unsplash URLs) with your own.
- **Scripts**: Enhance interactivity in `scripts.js` (e.g., add form validation).

## Future Improvements

- **Case Studies**: Add a dedicated page with client testimonials and ROI metrics.
- **CMS Integration**: Migrate to a headless CMS (e.g., Strapi) for dynamic content updates.
- **Analytics**: Integrate Google Analytics or similar for tracking conversions and user behavior.
- **Performance**: Implement lazy loading, image optimization, and service workers for PWA features.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make changes and test locally.
4. Submit a pull request with a clear description of changes.

Follow standard Git practices: write descriptive commits, test across browsers, and ensure accessibility.

## License

This project is licensed under the MIT License. See LICENSE file for details (placeholder—add if needed).