# 🧠 NeuroPortal™ – Secure Gateway for the People

> **Built by NeuroXcelAI** — for creators, students, dreamers, and anyone who deserves digital privacy without a price tag.

---

## 🔐 Why NeuroPortal Exists
One night while I was cleaning the kitchen, my Amazon Prime documentary paused. Then Alexa randomly started playing music. Back and forth it went — documentary, music, documentary — until I realized: **something was wrong.**

Turns out, my computer had auto-connected to local public WiFi. And I had been **hacked**.

I’m a student — like many, without the funds for enterprise-level cybersecurity. But I’m also a builder. And when I couldn’t find protection I could trust… I built my own.

---

## 🌐 What is NeuroPortal?
**NeuroPortal** is a free, secure, no-signup-required browser gateway:
- Paste any URL → Browse it privately
- No trackers, no history, no email lists
- Just protection — plain and simple

### ✅ Use it to:
- Access your accounts safely from public WiFi
- Protect your files while studying, researching, or writing
- Avoid being tracked, profiled, or exposed

> “It’s the browser I needed… so I built it and gave it away.”

---

## 🛠️ How It Works
- Built using **React** and **TailwindCSS**
- Encrypted proxy routing (via CroxyProxy iframe)
- Routed using `react-router-dom`: `/browse`, `/security`, `/`
- SPA behavior handled by `vercel.json` for Vercel deployments
- No backend required — runs entirely in the browser

---

## 📁 File Structure
```bash
/neuroportal
├── /public
│   └── favicon.ico
├── /src
│   ├── App.jsx
│   ├── components
│   │   ├── NeuroPortal.jsx
│   │   └── SecurityStatement.jsx
│   └── index.js
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## 🔭 Roadmap
- [x] Launch MVP with basic secure proxy browser
- [x] Add /security route with security philosophy component
- [x] Add SPA routing with Vercel support
- [ ] Deploy to Vercel + connect to subdomain `browse.neuroxcel.ai`
- [ ] Add dark/light mode toggle
- [ ] Build navigation header with links to `/browse` and `/security`
- [ ] Generate and apply logo with DALL·E + NeuroSentinel badge
- [ ] Add favicon + stylized CTA buttons
- [ ] Launch on Product Hunt and LinkedIn

---

## 🧠 Philosophy
> At NeuroXcelAI, security isn’t wallpaper — it’s the concrete foundation the entire building is constructed on. Our product lines evolved from within that foundation.

We don’t sell data. We don’t track clicks. We don’t put people in boxes. NeuroPortal adapts to the rhythms of its user, not the other way around. 

This tool was built as protection first. And it will always serve that mission.

---

## 🛡️ License
MIT License — free to use, remix, extend. Just credit the original.

---

> “Built from a moment of vulnerability. Shared with the world in strength.”

— Jason, NeuroXcelAI Founder
