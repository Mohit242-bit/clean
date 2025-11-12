# Deployment Guide for Cleean Website

This guide covers everything you need to deploy the Sqeakycleaning services website to production.

## 📋 Pre-Deployment Checklist

- [x] All dependencies installed (`npm install`)
- [x] Development build tested locally (`npm run dev`)
- [x] Production build successful (`npm run build`)
- [x] All pages working (Home, Services, About)
- [x] Animations smooth and responsive
- [x] Contact information updated
- [x] Images loading properly
- [x] Mobile responsiveness verified

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Vite)

**Why Vercel?** Optimized for Vite, instant deployment, serverless functions, analytics.

#### Step 1: Prepare Repository
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial Cleean website commit"

# Push to GitHub
git push origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

**Environment Variables** (if needed):
- No environment variables required for this static site
- If you add backend APIs later, add them in Vercel project settings

**Custom Domain:**
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records at your domain registrar

### Option 2: Netlify

#### Step 1: Build Locally
```bash
npm run build
```

#### Step 2: Deploy
**Option A - CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir dist
```

**Option B - Web UI:**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages

#### Step 1: Update vite.config.js
```javascript
export default {
  base: '/repository-name/', // Replace with your repo name
  // ... rest of config
}
```

#### Step 2: Deploy Script
Add to package.json:
```json
"deploy": "npm run build && gh-pages -d dist"
```

#### Step 3: Deploy
```bash
npm install gh-pages --save-dev
npm run deploy
```

Enable GitHub Pages in repository Settings → Pages → Source → gh-pages branch.

### Option 4: Traditional Web Hosting

#### Step 1: Build the Project
```bash
npm run build
```

#### Step 2: Upload Files
- Upload all files from `dist/` folder to your hosting server
- Use FTP, SSH, or hosting provider's file manager

#### Step 3: Configure Server
**For Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx:**
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  root /var/www/cleean/dist;
  index index.html;
  
  location / {
    try_files $uri /index.html;
  }
}
```

### Option 5: AWS S3 + CloudFront

#### Step 1: Create S3 Bucket
```bash
aws s3 mb s3://cleean-website
```

#### Step 2: Build & Upload
```bash
npm run build
aws s3 sync dist/ s3://cleean-website --delete
```

#### Step 3: Create CloudFront Distribution
- Use S3 as origin
- Set default root object to `index.html`
- Set error page to `/index.html`

## 🔐 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel, Netlify)
- [ ] Security headers configured
- [ ] Contact form validation working
- [ ] No sensitive data in client-side code
- [ ] API endpoints secured (if added later)
- [ ] CDN caching optimized

## 📊 Post-Deployment Verification

### Test All Pages
- [ ] Home page loads and renders correctly
- [ ] Services page displays all services
- [ ] About page shows company info
- [ ] Navigation works between pages

### Test Functionality
- [ ] Buttons clickable and functional
- [ ] Forms submittable (if added)
- [ ] Links working correctly
- [ ] Mobile menu opens/closes

### Performance Check
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] Animations smooth (60fps)
- [ ] No console errors

### Analytics Setup
Add to `src/main.jsx` if using Google Analytics:
```jsx
// Google Analytics
import('https://www.googletagmanager.com/gtag/js').then(() => {
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', 'YOUR_TRACKING_ID')
})
```

## 📈 Performance Optimization

### Current Build Size
- CSS: 16.23 KB (3.61 KB gzip)
- JavaScript: 286.60 KB (92.07 KB gzip)
- Total: ~100 KB gzipped

### Optimization Opportunities
1. **Image Optimization**
   - Use WebP format
   - Lazy load below-fold images
   - Compress images

2. **Code Splitting**
   - Lazy load routes with React.lazy()
   - Split vendor bundle

3. **Caching**
   - Configure HTTP caching headers
   - Use service worker for offline support

## 🔄 Continuous Deployment

### Automatic Deployment on Push
Most platforms auto-deploy when you push to main branch:

```bash
# Make changes locally
git add .
git commit -m "Update services section"
git push origin main

# Deployment starts automatically
# Check deployment status on platform dashboard
```

## 📞 Support & Monitoring

### Uptime Monitoring
- Set up alerts for downtime
- Monitor with: UptimeRobot, Statuspage, etc.

### Error Tracking
- Use Sentry for error monitoring
- Set up alerts for crashes

### Analytics
- Google Analytics for user behavior
- Track page views, user flow, conversions

## 🎯 Domain Setup

### Purchase Domain
1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. Point nameservers to your hosting provider

### SSL Certificate
- Automatic with Vercel/Netlify
- Required for HTTPS

### Email Setup (Optional)
- Forward emails to existing account
- Or set up business email with the domain

## 🚨 Troubleshooting

### "Not found" error on page refresh
**Solution:** Configure server to serve `index.html` for all routes

### Images not loading
**Solution:** Check image URLs, verify CORS if using CDN

### Animations lagging
**Solution:** 
- Disable animations on mobile: `prefers-reduced-motion`
- Reduce animation complexity
- Use GPU acceleration

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## 🎓 Next Steps

### Add Features
1. **Contact Form**: Integrate with email service (Formspree, SendGrid)
2. **Booking System**: Add calendar booking
3. **Admin Dashboard**: Manage services and bookings
4. **Blog Section**: Share cleaning tips

### Enhance Performance
1. Add service worker for offline support
2. Implement image lazy loading
3. Set up CDN for assets
4. Add API for dynamic content

### Marketing
1. Set up Google Business Profile
2. Add schema markup for SEO
3. Integrate Google Analytics
4. Set up email campaigns

## 📞 Quick Contact

For hosting support:
- **Vercel Support**: support@vercel.com
- **Netlify Support**: support@netlify.com
- **AWS Support**: aws.amazon.com/support

---

**Deployment Status:**
- ✅ Development: Ready
- ✅ Production Build: Ready
- ⏳ Hosting: Choose from options above
- ⏳ Domain: Configure custom domain
- ⏳ Monitoring: Set up analytics
