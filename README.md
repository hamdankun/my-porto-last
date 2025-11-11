# Hamdan Hanafi - Portfolio

A modern, responsive portfolio website showcasing my experience as a Senior Software Engineer with 10+ years of expertise in full-stack development.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Optimized for SEO with Next.js server components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Modern dark UI with blue accent colors
- **Smooth Animations** - Scroll-triggered animations using Intersection Observer API
- **Project Carousel** - Interactive 6-item slider (3 columns × 2 rows)
- **Component Architecture** - Modular, reusable components
- **Performance Optimized** - Fast load times and optimized image handling

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Icons**: lucide-react
- **Package Manager**: pnpm
- **TypeScript**: Fully typed components

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About Me** - 3-card section highlighting key skills
3. **Skills & Expertise** - 5 categories of technical skills
4. **Experience** - 4 previous roles with detailed descriptions
5. **Projects** - Interactive carousel showcasing 6 projects per view
6. **Contact** - Email and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-porto

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
app/
├── page.tsx                    # Main server component
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles and animations
└── components/
    ├── Navigation.tsx          # Fixed navigation with smooth scroll
    ├── Hero.tsx               # Hero section with CTA
    ├── ScrollObserver.tsx     # Intersection Observer for animations
    ├── AboutMeWithAnimation.tsx # About section with scroll animation
    ├── SkillsWithAnimation.tsx  # Skills section with scroll animation
    ├── Experience.tsx          # Experience timeline
    ├── ProjectsWithCarousel.tsx # Interactive project carousel
    └── Contact.tsx             # Contact and footer section
public/
└── me.jpeg                     # Profile image
```

## 🎨 Customization

### Update Personal Information

Edit the following files:

- `app/components/Hero.tsx` - Name, bio, and links
- `app/components/Experience.tsx` - Work history
- `app/page.tsx` - Projects data

### Styling

- Colors: Modify Tailwind classes (blue-400, slate-950, etc.)
- Animations: Edit `app/globals.css` for animation timings
- Fonts: Update in `app/layout.tsx`

## 🔍 SEO Features

- Server-side rendering for better SEO
- Semantic HTML structure
- Meta tags (configured in layout.tsx)
- Mobile-responsive design
- Fast page load times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
pnpm build
# Deploy using Vercel CLI or connect GitHub repository to Vercel
```

### Other Platforms

- Netlify
- GitHub Pages
- AWS Amplify
- DigitalOcean

## 📧 Contact

- **Email**: hamdanhanafi90@gmail.com
- **Phone**: +62-813-9457-4122
- **LinkedIn**: [Hamdan Hanafi](https://www.linkedin.com/in/hamdan-hanafi-316a31117)
- **GitHub**: [hamdankun](https://github.com/hamdankun)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [lucide-react](https://lucide.dev)
- Deployed with [Vercel](https://vercel.com)
