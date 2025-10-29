# 🚀 Vercel Deployment Guide

Your new AI/ML Portfolio is now ready to deploy! Follow these simple steps:

## ✅ What's Done:

1. ✅ **Backup Created**: Your old portfolio is safely backed up at:
   - https://github.com/CatalinaOlivares/portfolio-backup

2. ✅ **New Portfolio Uploaded**: Your new Next.js portfolio is at:
   - https://github.com/CatalinaOlivares/portfolio-ia

## 🌐 Deploy to Vercel (5 minutes):

### Step 1: Sign in to Vercel
1. Go to **https://vercel.com**
2. Click "Sign Up" or "Log In"
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project
1. Click **"Add New..." → "Project"**
2. Find and select **"portfolio-ia"** from the list
3. Click **"Import"**

### Step 3: Configure Project (Auto-detected ✅)
Vercel will automatically detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Just click "Deploy"!** 🎉

### Step 4: Wait for Deployment (1-2 minutes)
Vercel will:
- Install dependencies
- Build your Next.js app
- Deploy to production
- Give you a live URL like: `https://portfolio-ia-xxxxx.vercel.app`

## 🔗 Optional: Custom Domain Setup

### To use catalinaolivares.github.io or your own domain:

#### Option A: Use Vercel Domain (Easiest)
Your site will be live at:
```
https://portfolio-ia-catalinaolivares.vercel.app
```

#### Option B: Custom Domain (catalinaolivares.com)
1. Go to your Vercel project dashboard
2. Click **"Settings" → "Domains"**
3. Add your custom domain
4. Follow Vercel's DNS instructions

#### Option C: GitHub Pages Redirect (Keep the URL)
If you want to keep `catalinaolivares.github.io`, you can:

1. In your old repository (`catalinaolivares.github.io`):
   - Delete all files EXCEPT `.git/`
   - Create a single `index.html`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta http-equiv="refresh" content="0; url=https://your-vercel-url.vercel.app">
       <title>Redirecting...</title>
   </head>
   <body>
       <p>Redirecting to new portfolio...</p>
   </body>
   </html>
   ```

2. Or better: In Vercel settings, add `catalinaolivares.github.io` as a domain

## 📊 What You Get with Vercel:

- ✅ **Automatic SSL** (HTTPS)
- ✅ **Global CDN** (Fast worldwide)
- ✅ **Automatic deployments** (Push to GitHub = Auto-deploy)
- ✅ **Preview deployments** (Every PR gets a preview URL)
- ✅ **Analytics** (Free tier included)
- ✅ **Zero configuration** (Just works!)

## 🎨 Your Portfolio Features:

- 🚀 Next.js 16 with React 19
- 💫 Smooth animations with Framer Motion
- 🎯 Interactive project modals
- 📱 Fully responsive design
- 🌙 Dark theme with Neural Aesthetics
- 🎨 Draggable project cards
- 📊 7 professional projects showcased
- 🔧 RAG, MCP, Reinforcement Learning projects

## 🔄 Future Updates:

To update your portfolio:
1. Make changes locally
2. Commit: `git add . && git commit -m "Update portfolio"`
3. Push: `git push`
4. **Vercel automatically deploys!** 🎉

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Your repo: https://github.com/CatalinaOlivares/portfolio-ia

---

**Ready?** Go to https://vercel.com and click "Sign Up" to start! 🚀
