# Elohim Synagogue Website

A modern, responsive website for Elohim Synagogue built with React, Vite, and Tailwind CSS.

## 🌟 Features

### Pages & Sections
- **Home Page**: Hero section with welcoming message, daily scripture, service times, and CTAs
- **About Us**: Mission, vision, values, church history, leadership profiles, and beliefs
- **Services**: Weekly service schedule, location with map placeholder, and member testimonials
- **Theology School**: Complete education section with programs, admissions, and application form
- **Gallery**: Photo gallery with categorized church events and activities
- **Events**: Upcoming events with RSVP functionality and calendar integration
- **Sermons**: Audio/video sermons with search, filtering, and categorization
- **Blog**: Devotionals, theological insights, testimonies with newsletter signup
- **Contact**: Contact form, church information, social media links, and interactive map

### Design & Technology
- **Framework**: React 18 with Vite for fast development
- **Styling**: Tailwind CSS with custom color scheme
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for seamless navigation
- **Responsive**: Mobile-first design approach

## 🎨 Color Scheme

- **Primary Colors**: 
  - White (#ffffff)
  - Blue (#1E3A8A, #3B82F6)
- **Accent Colors**:
  - Red (#DC2626)
  - Gold Yellow (#FFD700)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd elohim-synagogue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with dropdown
│   └── Footer.jsx          # Footer with links and contact info
├── pages/
│   ├── Home.jsx           # Landing page
│   ├── About.jsx          # About us page
│   ├── Services.jsx       # Services and schedule
│   ├── TheologySchool.jsx # School overview
│   ├── Programs.jsx       # Academic programs
│   ├── Apply.jsx          # Application form
│   ├── Gallery.jsx        # Photo gallery
│   ├── Events.jsx         # Events and calendar
│   ├── Sermons.jsx        # Sermons and media
│   ├── Blog.jsx           # Blog and reflections
│   └── Contact.jsx        # Contact information and form
├── App.jsx                # Main app component with routing
├── index.css             # Global styles and Tailwind imports
└── main.jsx              # App entry point
```

## 🎯 Key Features

### Navigation
- Sticky header with responsive navigation
- Dropdown menu for Theology School section
- Mobile-friendly hamburger menu
- Active page highlighting

### Forms
- Contact form with subject categorization
- Theology school application form
- Newsletter subscription
- Form validation and success messages

### Content Management
- Dynamic content structure for easy updates
- Categorized sermons with filtering
- Event management with registration
- Blog post categorization

### User Experience
- Smooth scrolling navigation
- Hover effects and transitions
- Loading states and animations
- Accessible design patterns

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.jsx`
3. Update navigation in `Header.jsx`

### Modifying Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    white: '#ffffff',
    blue: '#1E3A8A',
    'blue-light': '#3B82F6',
  },
  accent: {
    red: '#DC2626',
    gold: '#FFD700',
  },
}
```

### Adding Content
Most content is stored as JavaScript objects within components for easy modification. Update the data arrays in each page component to reflect your church's specific information.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop computers (1024px and up)
- Large screens (1280px and up)

## 🔗 Integration Opportunities

The website is prepared for integration with:
- Google Maps API for interactive maps
- YouTube API for sermon videos
- Calendar services for event management
- Email services for form submissions
- Social media APIs for content feeds

## 📞 Support

For questions about this website template, please contact:
- Email: info@elohimsynagogue.org
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the Elohim Synagogue community
