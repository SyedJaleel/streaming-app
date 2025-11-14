# Vercel Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (name it `streamflix-dashboard` or any name you prefer)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 3: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
6. **IMPORTANT**: Add Environment Variable:
   - Click "Environment Variables"
   - Add: `TMDB_API_KEY` = `0912d25fbc98699a3d82cd99658dea26`
   - Make sure it's available for Production, Preview, and Development
7. Click "Deploy"

### Option B: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. When prompted:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? `streamflix-dashboard` (or any name)
   - Directory? `./`
   - Override settings? **No**

5. Add environment variable:
   ```bash
   vercel env add TMDB_API_KEY
   ```
   - When prompted, enter: `0912d25fbc98699a3d82cd99658dea26`
   - Select: Production, Preview, Development

6. Redeploy with environment variable:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Deployment

1. After deployment, Vercel will provide you with a URL like: `https://your-project.vercel.app`
2. Visit the URL to verify everything works
3. Test the search functionality
4. Check that movies load correctly

## Troubleshooting

### Build Fails
- Make sure `TMDB_API_KEY` is set in Vercel environment variables
- Check build logs in Vercel dashboard

### API Errors
- Verify the API key is correct
- Check that environment variable is set for all environments (Production, Preview, Development)

### Images Not Loading
- Next.js Image optimization should work automatically
- Check that `next.config.ts` has the correct image domain configuration

## Post-Deployment

1. Update `AI_Report.md` with:
   - Your Vercel live URL
   - Your GitHub repository link

2. Your application is now live! 🎉

