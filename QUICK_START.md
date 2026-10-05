# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Open in Browser

Navigate to the portfolio folder and double-click `index.html` to open it in your default browser.

**OR** (recommended for best experience):

```bash
# Windows PowerShell
python -m http.server 8000

# Mac/Linux
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Step 2: Test the Features

- 🌙 Click the theme icon to toggle dark/light mode
- 📱 Resize your browser to test mobile responsiveness
- ☰ Test the hamburger menu on mobile
- 🔗 Click navigation links to scroll smoothly
- ⬆️ Scroll to the bottom to see the "Back to Top" button

### Step 3: Customize Your Content

Edit `js/data.js` and update:

```javascript
personal: {
  firstName: "Your Name",
  fullName: "Your Full Name",
  email: "your@email.com",
  phone: "+91-XXXXXXXXXX",
  linkedin: "https://linkedin.com/in/yourprofile"
}
```

### Step 4: Update Your Experience

Add/remove entries in the `experience` array:

```javascript
experience: [
  {
    company: "Your Company",
    role: "Your Role",
    duration: "Start - End",
    // ... rest of fields
  }
]
```

### Step 5: Add Your Resume

1. Save your resume PDF to `assets/resume/resume.pdf`
2. Or update the path in `personal.resumeFile`

### Step 6: Customize Colors (Optional)

Edit `css/style.css` and change these colors:

```css
:root {
  --accent-primary: #00d9ff;      /* Main color (cyan) */
  --accent-secondary: #7c3aed;    /* Secondary color (purple) */
  --accent-tertiary: #10b981;     /* Tertiary color (green) */
}
```

### Step 7: Deploy (Optional)

**GitHub Pages:**
1. Push to GitHub
2. Enable GitHub Pages in Settings
3. Your site is live at `github.com/yourusername/portfolio`

**Netlify:**
1. Drag & drop the portfolio folder to Netlify.com
2. Your site is live in seconds

**Vercel:**
1. Connect your GitHub repo
2. Auto-deploys on every push

## 📋 Content Checklist

Before sharing your portfolio:

- [ ] Update personal information (name, email, LinkedIn)
- [ ] Update professional summary
- [ ] Add all work experience
- [ ] Update skills section
- [ ] Add your projects
- [ ] Update education
- [ ] Add your resume PDF
- [ ] Customize colors (optional)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Share with recruiters!

## 🎨 Easy Customizations

### Change Primary Color (Accent)

Find in `css/style.css`:
```css
--accent-primary: #00d9ff;  /* Change this hex color */
```

### Change Font

In `index.html`, update:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

### Hide Resume Download Button

Remove from `js/data.js`:
```javascript
resumeFile: "./assets/resume/resume.pdf"  // Remove this line
```

## 🎯 Pro Tips

1. **Use a local server**: Better performance and no file access issues
2. **Test mobile first**: Use DevTools to preview mobile layouts
3. **Keep data.js simple**: Only update data, don't modify HTML structure
4. **Use meaningful dates**: Format as "Month Year - Present" or "Month Year - Month Year"
5. **Add achievements**: Highlight your biggest wins
6. **Keep skills current**: Remove outdated technologies
7. **Update learning section**: Show you're growing professionally

## 🐛 Troubleshooting

### Styles not loading?
- Clear browser cache (Ctrl+Shift+Delete)
- Check DevTools Console for CSS errors
- Ensure CSS files are in the correct folders

### Images not showing?
- Ensure images are in `assets/images/` folder
- Update paths in HTML/CSS
- Use relative paths like `./assets/images/image.jpg`

### Animations laggy on mobile?
- This is normal for older devices
- Animations respect `prefers-reduced-motion` setting
- CSS animations are optimized but depend on device

### Theme not saving?
- Browser might have localStorage disabled
- Check browser Privacy settings
- Try a different browser

## 📧 Next Steps

1. **Update all content** in `js/data.js`
2. **Add your resume** to `assets/resume/`
3. **Test thoroughly** on mobile and desktop
4. **Deploy** to GitHub Pages, Netlify, or Vercel
5. **Share** with recruiters and on LinkedIn

## 🔗 Useful Resources

- [GSAP Documentation](https://gsap.com/docs/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility](https://www.w3.org/WAI/ARIA/apg/)
- [SEO Best Practices](https://developers.google.com/search/docs)

---

**Your portfolio is ready! Now make it yours. Good luck! 🚀**
