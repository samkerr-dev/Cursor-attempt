# Hipages Clone

A modern, responsive clone of the hipages.com.au website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design matching the original hipages website
- **Interactive Components**: Functional search, navigation, and form elements
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessible**: WCAG compliant with proper focus management and semantic HTML

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons
- **Lucide React** - Additional icon library

## Components

### Core Components
- **Header** - Navigation with mobile menu support
- **Hero** - Main landing section with search functionality
- **HowItWorks** - 3-step process explanation
- **TradieSection** - Information for tradespeople
- **Testimonials** - Customer reviews and recommendations
- **Articles** - Blog posts and cost guides
- **Categories** - Popular trades by Australian cities
- **Partners** - Brand partnerships display
- **Footer** - Comprehensive footer with all links

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── HowItWorks.tsx
    ├── TradieSection.tsx
    ├── Testimonials.tsx
    ├── Articles.tsx
    ├── Categories.tsx
    ├── Partners.tsx
    └── Footer.tsx
```

## Key Features Implemented

### Homepage Sections
- ✅ Navigation header with dropdown menus
- ✅ Hero section with search functionality
- ✅ "How hipages works" 3-step process
- ✅ Tradie registration and features section
- ✅ Customer testimonials and reviews
- ✅ Articles and cost guides preview
- ✅ Popular categories by city
- ✅ Partner brand showcase
- ✅ Comprehensive footer

### Design Features
- ✅ Orange color scheme matching hipages branding
- ✅ Responsive grid layouts
- ✅ Hover effects and transitions
- ✅ Professional typography
- ✅ Proper spacing and visual hierarchy
- ✅ Mobile-first responsive design

### Interactive Elements
- ✅ Mobile hamburger menu
- ✅ Search input functionality
- ✅ Clickable buttons and links
- ✅ Form elements with proper styling
- ✅ Hover states and transitions

## Customization

The design can be easily customized by:
- Modifying colors in `tailwind.config.js`
- Updating component content in individual files
- Adding new sections by creating additional components
- Styling adjustments in `globals.css`

## Deployment

This project can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker containers

## License

This project is for educational purposes only. The original hipages design and branding belong to hipages Group Holdings Ltd.
