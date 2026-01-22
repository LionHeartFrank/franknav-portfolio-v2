# Frank Nav Portfolio v2

A modern, performant portfolio website showcasing UX/UI design work and fullstack development skills. Built with the latest web technologies and optimized for international audiences.

## 🛠 Built With

### Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) - React framework with SSR/SSG
- [React](https://react.dev/) - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React-i18next](https://react.i18next.com/) - Internationalization for English and Spanish

**Backend/CMS**
- [Payload CMS](https://payloadcms.com/) - Headless CMS for content management
- [PostgreSQL](https://www.postgresql.org/) - Database (via Vercel Postgres)

**Deployment & Hosting**
- [Vercel](https://vercel.com/) - Hosting platform optimized for Next.js
- [GitHub](https://github.com/) - Version control

### Key Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Server-side rendering for optimal performance
- 📝 Content management through Payload CMS admin panel
- 🌍 Internationalization support (English & Spanish) via React-i18next
- 🔍 SEO optimized with metadata and sitemap generation
- 📱 Mobile-first, accessible design
- 🌐 Custom domain with SSL (franknav.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account
- Vercel account

### Installation

1. Clone the repository
```bash
git clone https://github.com/LionHeartFrank/franknav-portfolio-v2.git
cd franknav-portfolio-v2
Install dependencies

bash
npm install
Create .env.local file in root directory with:

text
DATABASE_URI=your_database_connection_string
PAYLOAD_SECRET=your_secret_key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
Run development server

bash
npm run dev
Open http://localhost:3000 in your browser

Access Payload admin panel at http://localhost:3000/admin

📂 Project Structure
text
franknav-portfolio-v2/
├── app/              # Next.js app directory
├── components/       # React components
├── payload/          # Payload CMS configuration
├── public/           # Static assets
│   └── locales/      # i18n translation files
├── styles/           # Global styles
└── README.md
🌍 Internationalization
This project supports English and Spanish languages using React-i18next:

Language switching functionality in navigation

All content is translatable through JSON locale files

SEO-friendly URL structure for both languages

Automatic language detection based on user browser preferences

🎯 Project Goals
Update to Modern Tech Stack - Migrate from vanilla HTML/CSS/JS to React-based architecture

Enhance User Experience - Improve performance, accessibility, and visual design

Skill Development - Build proficiency in Next.js, TypeScript, Payload CMS, Tailwind CSS, and modern deployment workflows

Reach Global Audience - Provide bilingual experience for English and Spanish-speaking visitors

📝 Development Status
Current Phase: Setup & Configuration (Week 1)

Completed Tasks
 Create repository

 Initialize README with tech stack documentation

 Add copyright protection

In Progress
 Deploy Payload Website Starter template to Vercel

 Configure environment variables and database

 Set up custom domain (franknav.com)

 Configure local development environment

 Install and configure React-i18next

Upcoming Phases
Phase 2: UX Research & Content Migration (Week 2)

Phase 3: Design System & Customization (Weeks 3-4)

Phase 4: Development & Features (Week 5)

Phase 5: Testing & Launch (Week 6)

🔗 Links
Live Site: franknav.com

Old Site Repo: github.com/LionHeartFrank/franknav.com

Design Process: [Notion Workspace - Coming Soon]

👤 Author
Frank Navarrete

UX/UI Designer & Junior FullStack Developer

Portfolio: franknav.com

GitHub: @LionHeartFrank

Location: Labranza, Araucanía, Chile

📄 License
Copyright © 2026 Frank Navarrete. All rights reserved.

This project and its contents are proprietary and confidential. Unauthorized copying, distribution, or use of this code or design is strictly prohibited.

Built with ❤️ as part of continuous learning in fullstack development
