# NeonMerge: Endless Puzzle - Landing Page

A high-conversion, single-page landing website for the mobile game "NeonMerge: Endless Puzzle" built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- 🎨 Dark Mode / Cyberpunk / Neon aesthetic
- 📱 Fully responsive (Mobile-first design)
- ✨ Smooth animations and glow effects
- 🎯 High-conversion design with clear CTAs
- 📋 Modal popups for Privacy Policy and Terms of Use
- 🎮 Interactive game grid visualization

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Color Palette

- **Background**: `#0f172a` (Dark Slate)
- **Primary**: `#38bdf8` (Neon Cyan)
- **Accent**: `#f472b6` (Magenta)
- **Success**: `#4ade80` (Lime Green)
- **Warning**: `#fbbf24` (Amber)

## Project Structure

```
neonmerge-web/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── Modal.tsx        # Legal document modal
│   └── GameGrid.tsx     # Game grid visualization
├── package.json
├── tailwind.config.js   # Tailwind configuration with custom colors
└── tsconfig.json
```

## Deployment

### GitHub Pages + Hostinger

Bu proje GitHub Pages'e deploy edilecek şekilde yapılandırılmıştır. Detaylı deployment talimatları için [DEPLOY.md](./DEPLOY.md) dosyasına bakın.

**Hızlı Başlangıç:**

1. GitHub'da repository oluşturun ve kodu push edin
2. Repository Settings > Pages > Source: GitHub Actions seçin
3. Hostinger'da DNS ayarlarını yapın (DEPLOY.md'de detaylar var)
4. Custom domain: `www.neonmerge.fun` ayarlayın

**Alternatif Deployment Seçenekleri:**
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

Detaylı bilgi için `DEPLOY.md` dosyasına bakın.
