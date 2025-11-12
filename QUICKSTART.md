# Quick Start Guide - Cleean Website

Get the Cleean website up and running in 5 minutes!

## 🎯 For First-Time Setup

### 1. Clone/Download Project
```bash
cd your-projects-folder
# If using git:
git clone https://github.com/yourusername/cleean.git
cd cleean
```

### 2. Install Dependencies (One Time)
```bash
npm install
```
⏱️ This takes 2-3 minutes the first time

### 3. Start Development Server
```bash
npm run dev
```

🎉 **You're Done!** Open http://localhost:3000 in your browser

## 📝 Making Changes

### Edit Content
Find files in `src/` folder:
- **Homepage content**: `src/pages/Home.jsx`
- **Services**: `src/components/Services.jsx`
- **About page**: `src/pages/About.jsx`
- **Navigation**: `src/components/Navbar.jsx`
- **Footer**: `src/components/Footer.jsx`

### Live Reload
Changes save automatically - just refresh browser or wait for auto-reload!

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` and update the green color:
```javascript
primary: {
  500: '#yourcolorhere' // Change this hex code
}
```

### Update Images
In components, find image URLs and replace:
```jsx
<img src="https://images.unsplash.com/photo-xxx" alt="description" />
```

### Edit Text
Simply update text in JSX files:
```jsx
<h1>Your Heading Here</h1>
<p>Your paragraph text here</p>
```

## 🔗 Add New Page

### 1. Create File
New file: `src/pages/MyPage.jsx`
```jsx
export default function MyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <h1 className="text-4xl font-bold">My Page</h1>
    </div>
  )
}
```

### 2. Add Route
Edit `src/App.jsx`:
```jsx
import MyPage from './pages/MyPage'

// Inside Routes:
<Route path="/mypage" element={<MyPage />} />
```

### 3. Add Navigation Link
Edit `src/components/Navbar.jsx`:
```jsx
<Link to="/mypage" className="link-hover">My Page</Link>
```

## 🚀 Deploy to Production

### Build Once
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! Your site is live

### Or Deploy to Netlify
1. Go to netlify.com
2. Click "Add new site"
3. Select your GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy"

See `DEPLOYMENT.md` for more options.

## 🛠️ Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for code issues
npm run lint
```

## 🐛 Common Issues & Solutions

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Dependencies Installation Failed
```bash
# Try deleting and reinstalling:
rm -rf node_modules package-lock.json
npm install
```

### Changes Not Appearing
- Press Ctrl+Shift+R (hard refresh)
- Or restart dev server: Ctrl+C, then `npm run dev`

### Images Not Loading
- Check internet connection (Unsplash needs internet)
- Use different image URL from Unsplash

## 📁 Project Structure Overview

```
cleaning/
├── src/
│   ├── components/     ← Reusable UI components
│   ├── pages/         ← Full pages (Home, Services, About)
│   ├── App.jsx        ← Main app with routing
│   ├── main.jsx       ← Entry point
│   └── index.css      ← Styles
├── index.html         ← HTML template
├── package.json       ← Dependencies
├── tailwind.config.js ← Style configuration
└── README.md         ← Full documentation
```

## ✨ Features Included

- ✅ Professional green color scheme
- ✅ Smooth animations with Framer Motion
- ✅ Mobile responsive design
- ✅ 3 main pages (Home, Services, About)
- ✅ Real images from Unsplash
- ✅ Icon library (Lucide React)
- ✅ Fast loading with Vite

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [See Full README](./README.md)
- [See Deployment Guide](./DEPLOYMENT.md)

## 💬 Need Help?

Check the comments in code files - they explain complex parts!

Happy coding! 🚀
