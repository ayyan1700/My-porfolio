# 🎬 Animation System Documentation

## Overview

Your portfolio uses **Framer Motion** for advanced animations and **React Intersection Observer** for scroll-triggered animations. This document explains how animations work and how to customize them.

---

## Animation Types

### 1. **Entry Animations** (Page Load)

Elements animate in when the page first loads.

```js
<motion.div
  initial={{ opacity: 0, x: -50 }}      // Starting state
  animate={{ opacity: 1, x: 0 }}         // Target state
  transition={{ duration: 0.8 }}         // How long it takes
>
  Content
</motion.div>
```

**Used in:** Navbar, Hero section

**Properties:**
- `opacity`: 0 (invisible) → 1 (visible)
- `x`: -50 (50px left) → 0 (original position)
- `y`: -50 (50px up) → 0 (original position)
- `scale`: 0.8 (80% size) → 1 (100% size)
- `rotate`: 0 (no rotation) → 360 (full rotation)

---

### 2. **Scroll Animations** (On Viewport Entry)

Elements animate when they scroll into view using `useInView` hook.

```js
const { ref, inView } = useInView({ 
  threshold: 0.3,      // Trigger at 30% visibility
  triggerOnce: true    // Only animate once
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Used in:** About, Skills, Projects, Testimonials, Contact sections

**Threshold Options:**
- `0` = Animate when ANY part enters viewport
- `0.5` = Animate when 50% of element is visible
- `1` = Animate when 100% of element is visible

---

### 3. **Hover Animations**

Elements animate when you hover over them.

```js
<motion.button
  whileHover={{ scale: 1.05 }}      // Grows 5% on hover
  whileTap={{ scale: 0.95 }}        // Shrinks 5% when clicked
  transition={{ type: 'spring' }}
>
  Click Me
</motion.button>
```

**Used in:** Buttons, cards, social links

**Common Hover Effects:**
- `scale: 1.1` - Grow larger
- `y: -5` - Float upward
- `rotate: 5` - Slight rotation
- `color: '#06b6d4'` - Change color

---

### 4. **Continuous Animations**

Elements animate continuously in a loop.

```js
<motion.div
  animate={{ y: [0, -20, 0] }}            // Move up and down
  transition={{ duration: 4, repeat: Infinity }}
>
  Content
</motion.div>
```

**Used in:** 
- Profile image floating (Hero)
- Scroll indicator bouncing (Hero)
- Gradient shifting (Background)
- Tech badge animations

---

### 5. **Stagger Animations**

Multiple elements animate one after another in sequence.

```js
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,      // 200ms delay between each
      delayChildren: 0.3,         // Initial delay before first
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Used in:** Projects grid, skills cards

---

## Animation Timing

### Transition Types

```js
// Duration (milliseconds)
transition={{ duration: 0.5 }}              // 500ms

// Easing (how animation progresses)
transition={{ ease: 'easeInOut' }}

// Spring physics (bouncy)
transition={{ type: 'spring', stiffness: 300 }}

// Complete definition
transition={{ 
  duration: 0.6, 
  ease: 'easeOut',
  delay: 0.2
}}
```

### Easing Options

- `'easeOut'` - Starts fast, ends slow (default)
- `'easeIn'` - Starts slow, ends fast
- `'easeInOut'` - Smooth acceleration and deceleration
- `'linear'` - Constant speed
- `'circOut'` - Circular easing

### Common Durations

- `0.2` - Quick feedback (button clicks)
- `0.3-0.5` - Smooth transitions (hover effects)
- `0.6-0.8` - Page element loads
- `1-2` - Section transitions
- `3-6` - Continuous loops

---

## Tailwind CSS Animations

### Built-in Tailwind Animations

```jsx
<div className="animate-pulse">Pulsing element</div>
<div className="animate-bounce">Bouncing element</div>
<div className="animate-spin">Spinning element</div>
```

### Custom Tailwind Animations

Defined in `tailwind.config.js`:

```js
animation: {
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease infinite',
  'shimmer': 'shimmer 2s infinite',
  'slide-in': 'slide-in 0.6s ease-out',
  'fade-in': 'fade-in 0.6s ease-out',
  'wobble': 'wobble 0.6s ease-in-out',
}
```

### Keyframes

Defined in `src/index.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes blob {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -50px) scale(1.1); }
}
```

---

## Real-World Examples

### Example 1: Animated Button

```js
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)'
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400 }}
  className="px-8 py-3 bg-accent text-white rounded-lg"
>
  Click Me
</motion.button>
```

### Example 2: Scroll-Triggered Section

```js
export default function MySection() {
  const { ref, inView } = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      Content slides in when scrolled into view
    </motion.section>
  );
}
```

### Example 3: Staggered List

```js
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

<motion.ul
  variants={variants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Example 4: Continuous Loop

```js
<motion.div
  animate={{ 
    rotate: 360,
    scale: [1, 1.1, 1]
  }}
  transition={{ 
    rotate: { duration: 4, repeat: Infinity, linear: true },
    scale: { duration: 2, repeat: Infinity }
  }}
>
  Spinning, pulsing element
</motion.div>
```

---

## Performance Optimization

### GPU Acceleration Properties

These properties are optimized for smooth animations:
- `transform` (translate, rotate, scale)
- `opacity`

**Avoid animating:**
- `width`, `height` (use `scale` instead)
- `top`, `left` (use `x`, `y` instead)
- `color` (might cause layout shifts)

### Example - Good Performance

```js
// ✅ GOOD - Uses GPU acceleration
<motion.div
  animate={{ x: 100, opacity: 0.5, scale: 1.2 }}
/>
```

### Example - Poor Performance

```js
// ❌ AVOID - Causes repaints
<motion.div
  animate={{ left: 100, width: 200, height: 100 }}
/>
```

---

## Browser DevTools

### Debug Animations in Chrome

1. Open DevTools (F12)
2. Go to **Console** tab
3. Enable animation slowdown: **Rendering** → **Animations**

### Check Performance

1. Open **Performance** tab
2. Record a scrolling session
3. Look for dropped frames (FPS meter)
4. Identify expensive animations

---

## Animation Cheat Sheet

### Quick Copy-Paste Animations

**Fade In:**
```js
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

**Slide In from Left:**
```js
initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

**Slide In from Right:**
```js
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

**Scale Up:**
```js
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6 }}
```

**Rotate In:**
```js
initial={{ opacity: 0, rotate: -10 }}
animate={{ opacity: 1, rotate: 0 }}
transition={{ duration: 0.6 }}
```

**Bounce Hover:**
```js
whileHover={{ scale: 1.1, y: -5 }}
whileTap={{ scale: 0.95 }}
```

**Glow Hover:**
```js
whileHover={{ 
  boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' 
}}
```

---

## Common Mistakes & Fixes

### ❌ Mistake 1: Animation Never Triggers

```js
// WRONG - No ref, inView not used
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}  // Only happens on mount
>
  Content
</motion.div>

// RIGHT - Use ref and inView
const { ref, inView } = useInView();
<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : { opacity: 0 }}
>
  Content
</motion.div>
```

### ❌ Mistake 2: Janky Animation

```js
// WRONG - Animating layout properties
animate={{ width: 300, height: 200 }}

// RIGHT - Use scale instead
animate={{ scale: 1.5 }}
```

### ❌ Mistake 3: Too Many Animations

```js
// WRONG - Complex keyframes
animate={{ 
  x: [0, 10, -10, 10, 0],
  y: [0, 10, -10, 10, 0],
  rotate: [0, 360, 0]
}}

// RIGHT - Simpler, cleaner animations
animate={{ 
  y: [0, -10, 0],
  rotate: [0, 360, 0]
}}
```

---

## Next Steps

1. **Experiment** - Try different transitions and easing
2. **Test** - Check performance on different devices
3. **Refine** - Adjust timing based on your design
4. **Optimize** - Use DevTools to identify bottlenecks

Happy animating! 🎬
