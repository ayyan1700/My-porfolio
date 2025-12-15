# 🚀 Advanced Developer Portfolio

A modern, fully animated single-page developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed to impress recruiters, hiring managers, and potential clients with smooth animations, glassmorphism effects, and a professional dark theme.

## ✨ Features

### 🎨 Design & Styling
- **Dark Mode Aesthetics**: Professional dark theme with accent colors (cyan, purple, blue)
- **Glassmorphism Effects**: Transparent blur effects on navbar and cards
- **Animated Gradients**: Dynamic linear gradients with smooth animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Typography**: Inter and Poppins fonts for clean, readable interface

### 🌟 Animation Features
- **Smooth Transitions**: All interactions feature smooth, fast transitions
- **Framer Motion**: Advanced animations including stagger effects, scroll triggers, and 3D transforms
- **Scroll Animations**: Sections fade and slide in as users scroll
- **Hero Section**: Typing text effect, floating animations on profile image
- **Interactive Elements**: Hover effects on skills, projects, and social links
- **Particle Effects**: Animated gradient blobs in hero section

### 📱 Sections

1. **Navbar**
   - Fixed/sticky navigation with glassmorphism effect
   - Smooth scroll navigation
   - Mobile-responsive hamburger menu

2. **Hero Section**
   - Typing animation for headline
   - Animated profile image with glowing border
   - Floating tech stack badges
   - Call-to-action buttons
   - Scroll indicator with animation

3. **About Section**
   - Two-column layout with text content
   - Animated statistics cards
   - Personality traits display

4. **Skills Section**
   - Organized by categories (Frontend, Backend, Database, Tools/DevOps)
   - Animated progress bars
   - Emoji icons for visual appeal
   - Additional proficiency list

5. **Projects Section**
   - Grid layout with staggered animations
   - Project cards with image, description, and technologies
   - Live demo and GitHub links
   - 3D hover effects with image zoom

6. **Testimonials Section**
   - Carousel/slider with smooth transitions
   - Star ratings
   - Testimonial author information
   - Previous/next navigation

7. **Contact Section**
   - Contact form with animated inputs
   - Success message feedback
   - Contact information cards
   - Social media links with hover effects
   - Availability badges

8. **Footer**
   - Quick navigation back to top
   - Copyright and links

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Scroll Detection**: React Intersection Observer
- **Node Version**: Recommended 16+

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

Additional packages (already installed):
- `framer-motion` - Advanced animations
- `react-intersection-observer` - Scroll detection
- `lucide-react` - Icon library
- `react-icons` - Additional icons

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with animations
│   ├── About.jsx           # About section with stats
│   ├── Skills.jsx          # Skills with progress bars
│   ├── Projects.jsx        # Projects grid with cards
│   ├── Testimonials.jsx    # Testimonials carousel
│   ├── Contact.jsx         # Contact form and info
│   └── Footer.jsx          # Footer section
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── index.css               # Global styles and Tailwind directives
└── main.jsx                # React entry point

tailwind.config.js          # Tailwind configuration
postcss.config.js           # PostCSS configuration
vite.config.js              # Vite configuration
```

## 🎨 Customization Guide

### Color Scheme
Edit the CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --accent: #06b6d4;
  --accent-purple: #a855f7;
  --accent-blue: #3b82f6;
}
```

Or update colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#06b6d4',
      'accent-purple': '#a855f7',
      'accent-blue': '#3b82f6',
    },
  },
}
```

### Personal Information
Update content in each component:
- **Hero**: Change headline, subtext, and CTA text in `Hero.jsx`
- **About**: Edit background story in `About.jsx`
- **Skills**: Modify skill categories and levels in `Skills.jsx`
- **Projects**: Update project cards in `Projects.jsx`
- **Contact**: Edit contact info and social links in `Contact.jsx`

### Images
Replace placeholder images with your own:
- Profile image in `Hero.jsx` (line with `images.unsplash.com`)
- Project images in `Projects.jsx`
- Testimonial images in `Testimonials.jsx`

### Animations
Fine-tune animations by modifying Framer Motion props:
- `initial`: Starting state
- `animate`: Animation target state
- `transition`: Animation duration and easing
- `whileHover`: Hover state
- `whileTap`: Tap/click state

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

Then build and deploy the `dist` folder.

## 📝 Component Props

### useInView Hook
Used in About, Skills, Projects, Testimonials, Contact sections:
```js
const { ref, inView } = useInView({ 
  threshold: 0.3,    // Trigger when 30% visible
  triggerOnce: true  // Only animate once
});
```

## 🔧 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and create a pull request with your improvements!

## 📞 Support

For issues or questions, please open an issue in the repository or contact directly.

---

**Happy coding! 🎉**

Made with ❤️ using React, Tailwind CSS, and Framer Motion

