# ExamRankAI 🎯
**India's #1 AI-powered Exam Preparation Platform**

Bihar Board • UPSC • BPSC • SSC CGL • Railway NTPC • Banking PO

---

## 🚀 Quick Start (3 commands)

```bash
npm install
npm start
# Open http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
# Deploy the /build folder to any static host
```

---

## 📁 Project Structure

```
examrank-ai/
├── public/index.html          ← SEO + Open Graph meta tags
├── src/
│   ├── components/
│   │   ├── layout/            ← Navbar (sticky, mobile), Footer, Layout
│   │   ├── common/            ← Button, Card, Container, SectionHeading
│   │   └── home/              ← Hero, Features, ExamsCovered, Testimonials, Pricing
│   ├── pages/                 ← 8 full pages
│   ├── utils/
│   │   ├── constants.js       ← All data (exams, questions, plans, blog)
│   │   └── animations.js      ← Framer Motion variants
│   ├── index.css              ← Tailwind + utility classes
│   └── App.js                 ← React Router v6 setup
├── tailwind.config.js
└── package.json
```

---

## 🎨 Tech Stack

| Tool              | Purpose                       |
|-------------------|-------------------------------|
| React 18          | UI framework                  |
| React Router v6   | Client-side routing           |
| Framer Motion     | Animations                    |
| Tailwind CSS v3   | Styling                       |
| React Icons       | Icon library                  |
| Inter + Poppins   | Typography (Google Fonts)     |

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag /build folder to netlify.com/drop
```

---

## 🔑 Connect Real AI (Optional)

In `src/pages/AIGenerator.jsx`, replace the `setTimeout` mock:

```js
const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_ANTHROPIC_KEY,
  },
  body: JSON.stringify({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 800,
    messages: [{
      role: "user",
      content: `Generate 5 ${difficulty} MCQ questions for ${exam} - ${subject}`
    }]
  }),
});
```

---

## 💰 Monetization (Ready)

| Plan    | Price    | Features                              |
|---------|----------|---------------------------------------|
| Free    | ₹0       | 5 AI Qs/day, 2 mock tests/month       |
| Pro     | ₹299/mo  | Unlimited everything + analytics      |
| Premium | ₹799/mo  | Pro + 1:1 mentorship + reports        |

Integrate **Razorpay** (recommended for India) for payments.

---

## 📞 Support

support@examrankai.in | +91 98765 43210
