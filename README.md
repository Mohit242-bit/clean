# Cleean - Professional Cleaning Services Website

A modern, professional cleaning services website built with React, Vite, Tailwind CSS, and Framer Motion animations. Perfect for pitching to cleaning service businesses.

## 🎨 Features

- **Modern React Architecture**: Built with React 18.2.0 and Vite 5.0.2 for blazing-fast development
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Professional Green Theme**: Custom color scheme (#2d9d4b) matching modern cleaning service aesthetics
- **Smooth Animations**: Framer Motion animations for professional, polished user experience
- **Component-Based**: Reusable, maintainable React components
- **Multi-Page Navigation**: React Router v6 for seamless client-side routing
- **Icons**: Lucide React professional icon library
- **Real Images**: Integrated Unsplash images for authentic appearance

## 📁 Project Structure

```
cleaning/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx       # Navigation bar with mobile menu
│   │   ├── Footer.jsx       # Footer with contact info
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── Services.jsx     # Service cards grid
│   │   ├── WhyChooseUs.jsx  # Feature comparison section
│   │   ├── Testimonials.jsx # Customer testimonials
│   │   └── CTA.jsx          # Call-to-action section
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── Services.jsx     # Services detail page
│   │   └── About.jsx        # About page
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and Tailwind
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS theme configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite build configuration
└── dist/                    # Production build output (generated)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. **Clone or navigate to the project directory**:
```bash
cd cleaning
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open in browser**:
   - The server will start on `http://localhost:3000`
   - Automatically opens in your browser

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR). Changes are reflected instantly.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Linting
```bash
npm run lint
```
Checks code for styling and formatting issues.

## 🎨 Design System

### Color Palette
- **Primary Green**: #2d9d4b (primary action, hover states)
- **Primary Dark Green**: #22863f (hover state)
- **Primary Accent**: #1d7a3a (secondary accent)
- **Dark Background**: #0f1419 (footer, dark sections)
- **Light Background**: #f5f5f5 (section backgrounds)

### Typography
- **Font Stack**: System fonts (-apple-system, Segoe UI, Roboto)
- **Heading**: Bold weights with large sizes
- **Body**: Regular weight for readability

### Spacing
- **Sections**: 20-32px padding
- **Gaps**: 12 units between grid items
- **Consistent**: Follows Tailwind spacing scale

### Animations
- **Framework**: Framer Motion 10.16.4
- **Duration**: 0.8s for most animations
- **Variants**: Consistent motion patterns across components
- **Triggers**: Scroll-based viewport animations

## 📄 Pages

### Home (`/`)
- Hero section with headline and CTA
- Service overview cards
- Why Choose Us feature comparison
- Customer testimonials
- Final call-to-action

### Services (`/services`)
- Detailed service listings (4 main services)
- Alternating left/right layout
- Service images and descriptions
- Feature checklists
- Booking CTAs for each service

### About (`/about`)
- Company mission and values
- Key statistics
- Company timeline
- Founder quote
- Conversion-focused CTA

## 🔧 Configuration

### Tailwind CSS (tailwind.config.js)
Custom theme extends default Tailwind with:
- Green color palette (50-900 shades)
- Dark color scale for footer
- Custom shadows (soft, md-soft, lg-soft)
- System font stack

### Vite (vite.config.js)
- React plugin enabled
- Dev server on port 3000
- Auto-open in browser
- Production build to `dist/`

### PostCSS (postcss.config.js)
- Tailwind CSS plugin
- Autoprefixer for browser compatibility

## 📱 Responsive Design

- **Mobile**: Single column layout, optimized for touch
- **Tablet**: Two-column grids with adjusted spacing
- **Desktop**: Full multi-column layouts with advanced animations

Breakpoints:
- `md:` - 768px and above
- `lg:` - 1024px and above

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates optimized static files in the `dist/` folder that can be deployed to:
- **Vercel** (recommended for Vite)
- **Netlify**
- **GitHub Pages**
- **Traditional hosting** (any static file host)

### Deployment to Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Vite and configures build settings
4. Deploy with one click

### Environment Variables

Create a `.env` file in the root for environment-specific variables (if needed):
```
VITE_API_URL=https://api.example.com
```

Access in code with: `import.meta.env.VITE_API_URL`

## 🎯 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
primary: {
  500: '#your-color-here'
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Update Content
Edit component files directly:
- Text content in JSX
- Images in image src attributes
- Links in href attributes

### Modify Animations
Edit Framer Motion `variants` objects in component files. Common properties:
- `opacity`: 0 to 1
- `y`: vertical movement (-20 to 20)
- `scale`: zoom effect (0.8 to 1)
- `duration`: animation length in seconds

## 📦 Dependencies

### Core
- **react** (18.2.0) - UI framework
- **react-dom** (18.2.0) - DOM rendering
- **react-router-dom** (6.17.0) - Routing

### Styling & Animation
- **tailwindcss** (3.3.6) - CSS framework
- **framer-motion** (10.16.4) - Animation library
- **lucide-react** (0.292.0) - Icon library

### Build Tools
- **vite** (5.0.2) - Build tool
- **postcss** (8.4.31) - CSS processing
- **autoprefixer** (10.4.16) - Browser prefixes

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Images Not Loading
- Check internet connection (uses Unsplash)
- Verify image URLs are accessible
- Check browser console for CORS errors

### Animations Not Smooth
- Update Framer Motion: `npm update framer-motion`
- Check browser DevTools Performance tab
- Reduce animation complexity if needed

### Build Errors
```bash
npm run build 2>&1 | head -100
```
Check error messages and refer to tool documentation.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## 📈 Performance

Production build includes:
- **CSS**: 16.23 KB (3.61 KB gzip)
- **JavaScript**: 286.60 KB (92.07 KB gzip)
- **Total**: ~100 KB gzipped

Optimizations:
- Code splitting
- CSS purging
- Asset compression
- Lazy component loading (can be added)

## 📄 License

Professional use only - customize for your cleaning business

---

**Built for:** Professional cleaning service pitch presentations
**Tech Stack:** React + Vite + Tailwind + Framer Motion
**Status:** Production-ready ✓
