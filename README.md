# Zentraffix Agency

A modern agency website built with Next.js 15, React 18, Tailwind CSS, and Supabase.

## Deployment to Cloudflare Pages via GitHub

This project is configured for automatic deployment to Cloudflare Pages whenever you push to the `main` branch.

### Prerequisites

1. A GitHub repository with this code
2. A Cloudflare account
3. A Cloudflare Pages project connected to your GitHub repository

### Setup Instructions

#### Step 1: Create Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Account Settings → API Tokens
3. Create a new token with these permissions:
   - `Account` → `Cloudflare Pages` → `Edit`
4. Copy the token

#### Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add these secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token from Step 1
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID (found in Dash → Account Home)

#### Step 3: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Pages
3. Click "Create a project" → "Connect to Git"
4. Authorize GitHub and select this repository
5. Configure build settings:
   - **Framework**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Click "Save and Deploy"

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The `out` directory contains the static export ready for deployment.

### Environment Variables

Create a `.env` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

- `/app` - Next.js app directory
- `/components` - Reusable React components
- `/components/ui` - shadcn/ui components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions

## Technologies

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: Supabase
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form, Zod

## Deployment Status

Automatic deployments are triggered on push to `main` branch via GitHub Actions workflow.
