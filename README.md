# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and mobile-friendly navigation.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Mobile hamburger menu with smooth transitions
- **Project Filtering**: Filter projects by category on the Projects page
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **Social Media Integration**: Ready-to-use social media links
- **SEO Friendly**: Proper HTML structure and meta tags

## 📁 File Structure

```
My-Website/
├── index.html          # Home page
├── about.html          # About Me page
├── hobbies.html        # Hobbies page
├── projects.html       # Projects page
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Pages Overview

### Home Page (index.html)
- Hero section with introduction
- Feature cards highlighting your skills
- Call-to-action buttons
- Professional layout with your photo placeholder

### About Me Page (about.html)
- Personal story and background
- Skills and technologies section
- Experience and education timeline
- Professional photo placeholder

### Hobbies Page (hobbies.html)
- Showcase of personal interests
- Interactive hobby cards
- Photo galleries and lists
- Personal quote section

### Projects Page (projects.html)
- Portfolio showcase with project cards
- Category filtering (Web, Mobile, Design, Other)
- Project links and technology tags
- Call-to-action for collaboration

## 🛠️ Customization Guide

### 1. Personal Information
Replace all instances of "Your Name" with your actual name:
- Navigation logo
- Page titles
- Hero section
- Footer copyright

### 2. Content Updates
- **About Page**: Update your story, skills, and experience
- **Hobbies Page**: Customize hobbies to match your interests
- **Projects Page**: Replace example projects with your actual work

### 3. Images
Replace image placeholders with your actual photos:
- Hero section profile photo
- About page professional photo
- Project screenshots
- Hobby-related images

### 4. Social Media Links
Update social media links in the footer:
```html
<a href="https://github.com/yourusername" class="social-link">
<a href="https://linkedin.com/in/yourusername" class="social-link">
<a href="https://twitter.com/yourusername" class="social-link">
<a href="mailto:your.email@example.com" class="social-link">
```

### 5. Colors and Styling
The website uses a blue color scheme. To change colors, update these CSS variables:
- Primary color: `#2563eb`
- Secondary color: `#1d4ed8`
- Text color: `#1e293b`
- Light text: `#64748b`

### 6. Adding New Projects
To add a new project to the Projects page:
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <!-- Add your project image here -->
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create account at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site will get a random URL (can be customized)

### Option 3: Custom Domain
1. Purchase a domain from any registrar
2. Use any hosting service (Netlify, Vercel, GitHub Pages)
3. Configure DNS settings to point to your hosting service

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **HTML5**: Semantic markup for better SEO
- **CSS3**: Modern features like Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No external dependencies
- **Font Awesome**: Icons for social media and features
- **Google Fonts**: Inter font family for modern typography

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you need help customizing this website, feel free to:
- Open an issue on GitHub
- Contact me through the website's contact form
- Reach out on social media

---

**Happy coding! 🚀**
