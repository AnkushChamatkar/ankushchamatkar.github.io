# Ankush Diwakar - Senior Test Engineer Portfolio

A premium, modern, animated personal portfolio website for a Senior Test Engineer. Built with vanilla HTML, CSS, and JavaScript using GSAP for smooth animations.

## 🚀 Features

- ✨ **Premium Design**: Modern, professional UI with smooth animations
- 🎯 **Data-Driven Architecture**: All content managed in a single `data.js` file
- 🌓 **Dark/Light Mode**: Automatic theme switching with localStorage persistence
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized**: No unnecessary dependencies, lightweight animations
- ♿ **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- 🎬 **Smooth Animations**: GSAP + ScrollTrigger for scroll-based animations
- 📊 **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Core styles and design system
│   ├── animations.css     # Animation keyframes and effects
│   └── responsive.css     # Mobile-first responsive design
├── js/
│   ├── data.js            # Portfolio data configuration
│   ├── main.js            # Core application logic
│   ├── theme.js           # Dark/light mode management
│   └── animations.js      # GSAP animation setup
├── assets/
│   ├── images/            # Image assets
│   ├── icons/             # Icon files
│   └── resume/
│       └── resume.pdf     # Your resume PDF
└── README.md              # This file
```

## 🎯 Quick Start

### 1. Running Locally

Simply open the portfolio in your browser:

```bash
# Navigate to the project directory
cd portfolio

# Open index.html in your browser
# Option 1: Double-click index.html
# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

### 2. Updating Personal Information

All content is managed in `js/data.js`. Edit this single file to update:

```javascript
const portfolioData = {
  personal: {
    firstName: "Ankush",
    fullName: "Ankush Diwakar Chamatkar",
    title: "Senior Test Engineer",
    // ... other fields
  },
  // ... other sections
};
```

## 📝 Customization Guide

### Adding Experience

In `js/data.js`, add a new object to the `experience` array:

```javascript
experience: [
  {
    id: 1,
    company: "Your Company",
    role: "Your Role",
    duration: "Start Date - End Date",
    location: "City, Country",
    type: "Full-time",
    description: "Brief description of your role",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ],
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["Tech1", "Tech2"]
  }
]
```

### Adding Skills

Update the `skills` object in `data.js`:

```javascript
skills: {
  automation: {
    title: "Test Automation",
    level: "Advanced",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories as needed
}
```

### Adding Projects

Add to the `projects` array:

```javascript
projects: [
  {
    id: 1,
    name: "Project Name",
    domain: "Domain",
    client: "Client Name",
    description: "Project description",
    testingApproach: ["Type 1", "Type 2"],
    automationApproach: ["Approach 1", "Approach 2"],
    responsibilities: ["Responsibility 1"],
    technologies: ["Tech1", "Tech2"],
    results: "Project results/outcomes"
  }
]
```

### Updating Current Learning

Modify the `learning` array to update your learning status:

```javascript
learning: [
  {
    id: 1,
    name: "Playwright",
    status: "Currently Learning",  // or "Professional Experience"
    experience: null,               // null for learning, "2+ Years" for professional
    technologies: ["TypeScript", "JavaScript"],
    description: "Description of what you're learning",
    keyPoints: [],                 // Add achievements when professional
    startDate: "2024",
    icon: "automation"
  }
]
```

### Adding Education

Add to the `education` array:

```javascript
education: [
  {
    id: 1,
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "University Name",
    location: "City, Country",
    year: "2020",
    duration: "Start Date - End Date"
  }
]
```

### Updating Resume PDF

1. Replace the PDF file at `assets/resume/resume.pdf` with your updated resume
2. Ensure it has the same filename, or update the path in `personal.resumeFile` in `data.js`

## 🎨 Customization: Colors & Design

### Change Color Scheme

Edit the CSS variables in `css/style.css`:

```css
:root {
  /* Dark Mode Colors */
  --bg-primary: #0a0e27;
  --bg-secondary: #111b3d;
  --accent-primary: #00d9ff;      /* Primary accent (cyan) */
  --accent-secondary: #7c3aed;    /* Secondary accent (purple) */
  --accent-tertiary: #10b981;     /* Tertiary accent (green) */
  /* ... update other colors */
}

[data-theme="light"] {
  /* Light Mode Colors */
  --bg-primary: #ffffff;
  --accent-primary: #0891b2;
  /* ... light mode colors */
}
```

### Change Fonts

Update the font imports in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_NAME:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

Then update the CSS:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

## 🎬 Animation Customization

### Disable/Modify Animations

Edit `js/animations.js` to modify animation timing and effects:

```javascript
gsap.from(element, {
  opacity: 0,
  y: 30,                    // Change distance
  duration: 0.8,            // Change timing
  scrollTrigger: {
    trigger: '.selector',
    start: 'top 60%',       // Adjust trigger point
  }
});
```

### Reduce Motion Preference

Animations automatically respect `prefers-reduced-motion` media query for accessibility.

## 📱 Responsive Breakpoints

The portfolio is optimized for:

- **Mobile**: 320px - 425px
- **Tablet**: 425px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: 1024px+

Edit `css/responsive.css` to customize breakpoints.

## 🌓 Dark/Light Mode

- Automatically detects system preference
- Users can manually toggle with the theme button
- Preference is saved to localStorage
- No additional setup required

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Reduced motion support
- Screen reader friendly

## 📊 SEO Optimization

The portfolio includes:

- Meta descriptions
- Open Graph tags
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Structured data ready

## 🚀 Deployment

### Deploy to GitHub Pages

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

2. Enable GitHub Pages in repository settings:
   - Settings → Pages → Source: main branch

Your portfolio will be available at: `https://yourusername.github.io/portfolio/`

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. Deploy!

### Deploy to Vercel

1. Import your GitHub repository to Vercel
2. Vercel auto-detects the configuration
3. Click Deploy

## 🔧 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: All modern versions

## 📦 Dependencies

External libraries (loaded via CDN):

- **GSAP 3.12.2**: Animation library
- **ScrollTrigger**: GSAP scroll animation plugin
- **Google Fonts**: Typography
- **Font Awesome** (optional): Icons

No build tools or npm dependencies required!

## 🎓 Updating Playwright Experience

When you gain professional experience with Playwright, update `js/data.js`:

**From:**
```javascript
{
  name: "Playwright",
  status: "Currently Learning",
  experience: null,
  technologies: ["TypeScript", "JavaScript"],
  description: "Expanding modern browser automation capabilities...",
  keyPoints: []
}
```

**To:**
```javascript
{
  name: "Playwright",
  status: "Professional Experience",
  experience: "2+ Years",
  technologies: ["TypeScript", "JavaScript"],
  description: "Experienced in modern browser automation with Playwright...",
  keyPoints: [
    "Developed scalable Playwright automation framework",
    "Implemented Page Object Model patterns",
    "Integrated automation with CI/CD pipelines",
    "Implemented cross-browser testing strategies"
  ]
}
```

The UI will automatically update to reflect your new professional status!

## 🐛 Troubleshooting

### Animations Not Working
- Ensure GSAP libraries are loading (check browser console)
- Check browser support (modern browsers only)
- Clear browser cache and refresh

### Styling Issues
- Clear browser cache
- Check that CSS files are loading (DevTools → Network tab)
- Verify no CSS file is blocked

### Theme Not Saving
- Check if localStorage is enabled in browser
- Clear browser data and try again
- Some browsers may have stricter policies

## 📞 Support & Updates

To update the portfolio:

1. Edit `js/data.js` for content changes
2. Edit `css/style.css` for design changes
3. Edit `js/animations.js` for animation changes
4. Push changes to your repository
5. Deployment happens automatically (if using GitHub Pages/Netlify)

## 📄 License

This portfolio template is open for personal use. Feel free to modify and customize it as needed.

## 🎯 Next Steps

1. ✅ Update all personal information in `data.js`
2. ✅ Add your resume PDF to `assets/resume/`
3. ✅ Customize colors to match your brand
4. ✅ Test on different devices and browsers
5. ✅ Deploy to your hosting platform
6. ✅ Share with recruiters and hiring managers

---

**Built with ❤️ for quality engineers. Happy coding!**
