# Geo-Rolodex Brand

A Next.js application for the Geo-Rolodex brand website with SSR support, hosted on Vercel.

## Features

- Landing page with all sections
- Organization profile pages at `/pr/[slug]`
- Server-side rendering (SSR) for SEO
- Tailwind CSS for styling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with your environment variables:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5400/api/v1
NEXT_PUBLIC_CLIENT_KEY=your-client-key-here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

- `/` - Landing page
- `/pr/[slug]` - Organization profile page (SSR)

## Deployment

This application is configured for deployment on Vercel. Simply connect your repository to Vercel and deploy.

