# ❓ Frequently Asked Questions (FAQ)

## General Questions

### Q: Is this portfolio starter kit free to use?
**A:** Yes! This is completely open source and free to use for your portfolio. No attribution required!

### Q: Can I use this for client work?
**A:** Absolutely! You can customize it and use it for clients. Make it your own!

### Q: Do I need React experience to customize this?
**A:** Basic React knowledge helps, but you can customize most things just by changing text, images, and colors. The component structure is clean and well-organized.

---

## Setup & Installation

### Q: What Node version do I need?
**A:** Node 16 or higher. Check your version: `node --version`

### Q: I get "npm: command not found"
**A:** You need to install Node.js from [nodejs.org](https://nodejs.org). It includes npm.

### Q: Installation takes too long
**A:** This is normal - npm packages can be large. First installation typically takes 1-2 minutes. Subsequent installs are faster.

### Q: Can I use Yarn or PNPM instead of npm?
**A:** Yes! Just replace `npm install` with `yarn install` or `pnpm install`. Commands work the same:
- `npm run dev` → `yarn dev` → `pnpm dev`

---

## Customization

### Q: How do I change the site title/tab name?
**A:** Edit `index.html`:
```html
<title>Your Name - Portfolio</title>
```

### Q: How do I add a favicon?
**A:** Replace the image in `public/vite.svg` or add your own:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### Q: Can I add more sections?
**A:** Yes! Create a new component in `src/components/` and import it in `App.jsx`:
```js
import MyNewSection from './components/MyNewSection'

// Add to App:
<MyNewSection />
```

### Q: How do I change the navbar links?
**A:** Edit `src/components/Navbar.jsx` - look for the `navItems` array and update the `href` and `name` values.

### Q: Can I remove a section (like Testimonials)?
**A:** Yes! Just delete the import and the component from `App.jsx`:
```js
// Remove these lines:
import Testimonials from './components/Testimonials'
// And this:
<Testimonials />
```

---

## Styling & Design

### Q: How do I change the accent color?
**A:** Edit `src/index.css` or `tailwind.config.js`:
```css
--accent: #06b6d4;  /* Change this color */
```

### Q: Can I use light mode instead of dark mode?
**A:** Yes, but you'll need to adjust colors. Edit the CSS variables and Tailwind config to use light backgrounds with dark text.

### Q: How do I use a custom font?
**A:** Edit `src/index.css` and add your Google Font:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

* {
  font-family: 'YourFont', sans-serif;
}
```

### Q: The background gradient looks different on my phone
**A:** This is normal! Mobile devices render CSS differently. The gradient animates smoothly across all devices.

### Q: Can I add a background image instead of gradient?
**A:** Yes! Edit `.gradient-bg` in `src/index.css`:
```css
.gradient-bg {
  background-image: url('your-image.jpg');
  background-size: cover;
  background-attachment: fixed;
}
```

---

## Images & Media

### Q: My images don't show up
**A:** Make sure you're using full URLs (including `https://`). You can use:
- Unsplash: `https://images.unsplash.com/...`
- Pexels: `https://images.pexels.com/...`
- Your own hosted images

### Q: Can I use local images from the `public` folder?
**A:** Yes! Place images in `public/` folder and reference them:
```jsx
<img src="/my-image.jpg" alt="Description" />
```

### Q: Images are too slow to load
**A:** Compress them before uploading using tools like:
- TinyPNG: tinypng.com
- Squoosh: squoosh.app
- Or use smaller dimensions

### Q: Can I add a video to the hero section?
**A:** Yes! Replace the image with:
```jsx
<video autoPlay muted loop className="w-full h-full object-cover">
  <source src="/your-video.mp4" type="video/mp4" />
</video>
```

---

## Animations

### Q: Animations are stuttering/laggy
**A:** 
1. Reduce animation complexity
2. Close other browser tabs
3. Check CPU usage
4. Try disabling transparency effects

### Q: Can I make animations slower/faster?
**A:** Edit the `transition` prop in components:
```js
transition={{ duration: 1.5 }}  // Slower (1.5 seconds)
transition={{ duration: 0.3 }}  // Faster (0.3 seconds)
```

### Q: How do I disable all animations?
**A:** Add to `src/index.css`:
```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Q: My animations don't work on Safari
**A:** Framer Motion works on Safari. Make sure you're on Safari 12+. Try:
1. Force refresh (Cmd+Shift+R)
2. Check browser console for errors
3. Update Safari to latest version

---

## Forms & Contact

### Q: How do I make the contact form actually send emails?
**A:** The current form is a placeholder. Add a backend service:

**Using Formspree (easiest):**
```js
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

**Using EmailJS (JavaScript):**
```js
import emailjs from '@emailjs/browser';

emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form);
```

**Using a backend:**
- Create an API endpoint on your server
- Send form data to your API
- API forwards to your email

### Q: How do I validate the form?
**A:** Add validation in the `handleSubmit` function:
```js
if (!formData.name) {
  alert('Name is required');
  return;
}
```

### Q: Can I add a file upload (resume)?
**A:** Yes! Change the form field to:
```jsx
<input type="file" name="resume" accept=".pdf,.doc,.docx" />
```

---

## Performance & Optimization

### Q: My site is slow - how do I speed it up?
**A:** 
1. Optimize images (compress + right size)
2. Use Next.js Image component
3. Lazy load images: `loading="lazy"`
4. Remove unused dependencies
5. Use production build: `npm run build`

### Q: How do I check my site's performance?
**A:** Use Google Lighthouse:
1. Open Chrome DevTools (F12)
2. Click Lighthouse tab
3. Click "Generate report"
4. Aim for 90+ scores

### Q: The site is janky on older devices
**A:** Simplify animations on mobile:
```js
const isLowEndDevice = window.devicePixelRatio < 2;
// Reduce animations if true
```

### Q: How do I reduce bundle size?
**A:** 
1. Remove unused dependencies
2. Use dynamic imports: `React.lazy()`
3. Check: `npm install -g webpack-bundle-analyzer`

---

## Deployment

### Q: Which hosting is best for React?
**A:** Popular options (all free tier available):
- **Vercel** - Easiest, built for Next.js/Vite
- **Netlify** - Great for static sites
- **GitHub Pages** - Free, integrates with GitHub
- **Railway** - Full-stack hosting

### Q: How do I deploy to Vercel?
**A:**
1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repo
5. Click Deploy (done!)

### Q: Can I use a custom domain?
**A:** Yes! Most hosts let you add custom domains:
1. Buy domain from GoDaddy, Namecheap, etc.
2. Point domain to your hosting
3. Update DNS settings
4. Wait 24-48 hours for propagation

### Q: My site works locally but not after deploy
**A:** Check:
1. All paths use forward slashes `/`
2. Environment variables are set
3. API endpoints are absolute URLs
4. Images use correct paths
5. Browser console for errors (F12)

### Q: Can I deploy without Git?
**A:** Yes! Upload files directly via FTP:
1. Run `npm run build`
2. Upload `dist/` folder contents to hosting
3. Set directory index to `index.html`

---

## Troubleshooting

### Q: "Port 5173 is already in use"
**A:** Use a different port:
```bash
npm run dev -- --port 3000
```

### Q: Tailwind classes aren't being applied
**A:** 
1. Check `tailwind.config.js` has correct paths
2. Make sure `src/index.css` imports Tailwind
3. Restart dev server
4. Force refresh browser (Ctrl+Shift+R)

### Q: Getting "react is not defined" error
**A:** Make sure to import React in files using JSX:
```js
import { motion } from 'framer-motion';
```

### Q: Components not showing
**A:**
1. Check component is imported in `App.jsx`
2. Check component file is in `src/components/`
3. Check component exports correctly: `export default ComponentName`
4. Check console for errors (F12)

### Q: Navigation links don't scroll to sections
**A:** Make sure each section has the correct `id`:
```jsx
<section id="about">...</section>

// In navbar:
<a href="#about">About</a>
```

---

## Advanced Questions

### Q: Can I use TypeScript?
**A:** Yes! The template supports it. Rename files from `.jsx` to `.tsx` and add types.

### Q: Can I integrate a backend/API?
**A:** Yes! Use `fetch()` or `axios`:
```js
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

### Q: How do I add analytics?
**A:** Use Google Analytics:
```js
// Add to index.html:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Q: Can I add a blog?
**A:** Yes! Create a blog section or link to external blog platform (Medium, Dev.to, etc.)

### Q: How do I add dark/light mode toggle?
**A:** Use React Context or localStorage:
```js
const [isDark, setIsDark] = useState(true);
<button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
```

---

## Getting Help

### Q: Where can I get help?
**A:** Check these resources:
1. **This documentation** - SETUP_GUIDE.md, ANIMATIONS.md
2. **React Docs** - react.dev
3. **Tailwind Docs** - tailwindcss.com/docs
4. **Framer Motion Docs** - framer.com/motion
5. **Stack Overflow** - stackoverflow.com
6. **GitHub Issues** - Report bugs

### Q: Can I contribute improvements?
**A:** Yes! Fork the repo and submit pull requests. All contributions welcome!

### Q: Is there a community?
**A:** Connect on:
- GitHub Issues/Discussions
- Twitter/X
- Dev communities like Dev.to, Hashnode

---

## Final Tips

✅ **DO:**
- Keep content updated regularly
- Test on real devices
- Get feedback from others
- Add new projects as you build them
- Respond to inquiries quickly

❌ **DON'T:**
- Use low-quality images
- Ignore mobile responsiveness
- Keep broken links
- Use old project screenshots
- Forget to deploy changes

---

**Still have questions?** 
Check the README.md for more info, or review the component code - it's well-commented!

Happy coding! 🚀
