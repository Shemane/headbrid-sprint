# ⚡ Headbrid Digital – 24-Hour Lead Sprint Platform

> A fast, modern web platform for **Headbrid Digital Marketing Services** — Johannesburg's boutique SME agency since 2011. This app powers the full 24-hour lead sprint workflow, from client intake to live lead dashboard.

---

## 🚀 Features

- **Home Page** — Value proposition, stats, and agency overview
- **Lead Sprint Intake Form** — Captures business brief, offer, target audience, budget & platform preference
- **Live Lead Dashboard** — Real-time lead table with Hot/Warm/New status filters and KPI cards
- **How It Works** — Step-by-step sprint process (Intake → Setup → Launch → Handover)
- Fully responsive, dark-themed UI built with React

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| CSS-in-JS (inline styles) | Styling |
| [Vercel](https://vercel.com) | Deployment |

---

## 📁 Project Structure

```
headbrid-sprint/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── App.jsx             # Main application component
│   └── main.jsx            # React DOM render entry
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node)

### Install & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/headbrid-sprint.git
cd headbrid-sprint

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

---

## 🌍 Deployment (Vercel)

This project is optimised for one-click deployment on Vercel.

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Your app will be live at `https://headbrid-sprint.vercel.app`

To use a custom domain (e.g. `sprint.headbrid.co.za`), add it under **Settings → Domains** in your Vercel dashboard.

---

## 🔗 Embedding in Your Website

Once deployed, embed the platform into any HTML page:

```html
<iframe
  src="https://headbrid-sprint.vercel.app"
  width="100%"
  height="900px"
  style="border: none; border-radius: 12px;"
  title="Headbrid Lead Sprint"
></iframe>
```

Or link directly from your navigation:

```html
<a href="https://headbrid-sprint.vercel.app" target="_blank">
  Start Your Lead Sprint
</a>
```

---

## 📋 Sprint Process Overview

| Phase | Duration | What Happens |
|-------|----------|-------------|
| **Intake** | 1–2 hrs | Client submits brief via form; campaign manager assigned |
| **Setup** | 2–6 hrs | Landing page, ad creatives & Meta/Google campaigns built |
| **Launch** | Live | Campaigns go live; real-time optimisation begins |
| **Handover** | End of day | Leads delivered via dashboard + email/WhatsApp alerts |

---

## 🤝 About Headbrid

**Headbrid Digital Marketing Services** is a Johannesburg-based boutique agency specialising in affordable digital marketing for SMEs across Gauteng. Founded in 2011, Headbrid has served 500+ small businesses with SEO, paid ads, and performance campaigns — with no retainers and no fluff.

- 📍 Johannesburg, Gauteng, South Africa
- info@ headbridmarketing.co.za
- 🌐 www.headbridmarketing.co.za
---
## 📄 License

This project is proprietary and owned by **Headbrid Digital Marketing Services**.  
Unauthorised copying, distribution, or modification is not permitted.
