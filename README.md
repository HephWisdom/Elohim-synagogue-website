# Elohim Synagogue Website

A modern, responsive website for Elohim Synagogue built with React, Vite, and Tailwind CSS. Features a complete digital presence including worship services, theology school, events, gallery, sermons, blog, and contact information.

## 🚀 Features

### Core Pages
- **Home** - Hero section with welcome message, daily scripture, about preview, and services overview
- **About** - Mission, vision, founding story, and interactive timeline
- **Services** - Weekly service schedule, location map, and testimonials
- **School of Theology** - Program overview, admissions, and application system
- **Events** - Upcoming events with RSVP functionality and calendar integration
- **Sermons** - Video library with search, filters, and sermon series
- **Gallery** - Photo gallery with masonry grid and category filters
- **Blog** - Articles, devotionals, testimonies, and newsletter signup
- **Contact** - Contact form, office hours, and location information

### Technical Features
- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and modern patterns
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🧭 **React Router** - Client-side routing
- 🎯 **Lucide React** - Beautiful, customizable icons
- 🌈 **Glassmorphism** - Modern UI effects with backdrop blur

### Design System
- **Primary Colors**: White (#ffffff), Blue (#1E3A8A, #3B82F6)
- **Accent Colors**: Red (#DC2626), Gold Yellow (#FFD700)
- **Typography**: Inter font family
- **Components**: Reusable glass cards, buttons, and form elements

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elohim-synagogue-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation with dropdown menus
│   ├── Footer.jsx       # Footer with links and contact info
│   └── Hero.jsx         # Hero section component
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About us page
│   ├── Services.jsx     # Services and schedule
│   ├── SchoolOverview.jsx # Theology school overview
│   ├── Programs.jsx     # School programs
│   ├── Apply.jsx        # Application form
│   ├── Events.jsx       # Events and calendar
│   ├── Sermons.jsx      # Sermon library
│   ├── Gallery.jsx      # Photo gallery
│   ├── Blog.jsx         # Blog and articles
│   └── Contact.jsx      # Contact information
├── assets/              # Static assets
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Styling

The project uses a custom design system built on Tailwind CSS:

### Custom CSS Classes
- `.glass-card` - Glassmorphism cards with backdrop blur
- `.gradient-text` - Gold to blue gradient text
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-padding` - Consistent section spacing

### Color Palette
```css
primary: {
  blue: '#1E3A8A',
  'blue-light': '#3B82F6',
},
accent: {
  red: '#DC2626',
  gold: '#FFD700',
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt gracefully across devices with:
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🎭 Animations

Framer Motion powers smooth animations throughout the site:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Interactive elements

## 📄 Pages Overview

### Home Page
- Hero section with call-to-action buttons
- Daily scripture quote
- About us preview with mission/vision
- Services preview cards
- School of Theology highlight section

### About Page
- Mission, vision, and values
- Founding story with statistics
- Animated timeline of church history
- Leadership quotes

### Services Page
- Weekly service schedule cards
- Location map integration
- Member testimonials
- Service features and times

### School of Theology
- **Overview**: Mission, core values, academic excellence
- **Programs**: Detailed program descriptions with pricing
- **Apply**: Multi-step application form with validation

### Events Page
- Event categories and filtering
- Featured events with RSVP
- Calendar integration options
- Event timeline

### Sermons Page
- Video library with thumbnails
- Search and filter functionality
- Sermon series organization
- Download options

### Gallery Page
- Masonry grid layout
- Category filtering
- Image modal viewer
- Photo statistics

### Blog Page
- Article categories
- Featured posts
- Newsletter signup
- Social engagement metrics

### Contact Page
- Contact form with validation
- Office hours and location
- Interactive map placeholder
- Social media links

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Customizing Styles
1. Update `tailwind.config.js` for theme changes
2. Modify `src/index.css` for global styles
3. Use Tailwind classes for component styling

## 🚀 Deployment

The project can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vite** - For lightning-fast development

---

Built with ❤️ for the Elohim Synagogue community.