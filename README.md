# 🦂 Nayan | 3D WebGL Developer Portfolio

A premium, high-performance developer portfolio engineered with React, Three.js, and GSAP. Designed with a dark, cybernetic "Scorpio" aesthetic, featuring fluid WebGL backgrounds, interactive 3D elements, and glassmorphic UI components.

![Portfolio Preview](./public/preview.png) *(Note: Add a screenshot of your site to the public folder and name it preview.png)*

**🔗 [Live Deployment](https://your-vercel-link-here.vercel.app/)**

---

## ⚡ System Architecture & Features

- **WebGL 3D Environment:** Interactive Three.js canvases including a slithering "CyberSpine" and responsive fluid particle backgrounds.
- **Advanced Scroll Physics:** Staggered reveals, pinning, and matrix-style cascading animations powered by GSAP ScrollTrigger.
- **Glassmorphic UI:** Custom Tailwind CSS configuration for frosted glass overlays, glowing neon scrollbars, and dynamic hover states.
- **Interactive Project Matrix:** Full-screen data overlays for detailed project case studies and embedded demo videos.
- **Secure Transmission:** Fully functional, serverless contact form routed directly to Gmail via EmailJS with `.env` credential protection.

---

## 🛠 Tech Stack

- **Frontend Framework:** React.js (Vite)
- **3D Rendering:** Three.js / @react-three/fiber / @react-three/drei
- **Animation Engine:** GSAP (GreenSock)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React & React Icons
- **Serverless Integration:** EmailJS

---

## 🚀 Initialization Protocol (Local Setup)

To run this architecture locally, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/nayan-portfolio-3d.git](https://github.com/YOUR_USERNAME/nayan-portfolio-3d.git)
cd nayan-portfolio-3d

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file in the root directory and add your EmailJS credentials:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

4. Boot the Development Server
npm run dev

📂 Directory Structure
src/
├── components/         # Reusable UI (Navbar, ProjectModal, CustomCursor)
├── components-3d/      # Three.js WebGL elements (CyberSpine)
├── views/              # Main layout sections (Hero, About, Projects, Skills, Contact)
├── App.jsx             # Component assembly & routing
└── index.css           # Global CSS, Tailwind configurations, custom scrollbar

Thank you!
