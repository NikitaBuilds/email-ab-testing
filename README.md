# Email A/B Testing Analytics Dashboard

A modern dashboard for managing and analyzing email marketing A/B tests, built with Next.js 14, Tailwind CSS, and shadcn/ui components.

![Dashboard Preview]
(Add a screenshot of your dashboard here)

## Features

- 📊 Real-time campaign performance metrics
- 🔄 A/B test management and analysis
- 📈 Interactive data visualizations
- 📧 Email campaign tracking
- 📱 Fully responsive design
- 🎨 Dark/Light mode support
- 🔍 Advanced filtering and sorting

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Recharts](https://recharts.org/) - Data Visualization
- [date-fns](https://date-fns.org/) - Date Manipulation
- [Lucide Icons](https://lucide.dev/) - Icons

## Prerequisites

Make sure you have the following installed:

- Node.js 18.17 or later
- npm or yarn or pnpm

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/email-ab-testing-dashboard.git
cd email-ab-testing-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Dashboard routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── dashboard/        # Dashboard-specific components
│   └── shared/          # Shared components
├── lib/
│   └── utils.ts         # Utility functions
├── types/
│   └── index.ts         # TypeScript types
└── styles/
    └── globals.css      # Global styles
```

## Key Components

- `StatsGrid`: Displays key performance metrics
- `CampaignPerformance`: Interactive campaign analytics chart
- `RecentTests`: Latest A/B test results table
- `TopSubjectLines`: Best performing email subjects

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## Deployment

The project can be deployed on [Vercel](https://vercel.com/) with zero configuration:

```bash
npm run build
vercel deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support

For support, email your-email@example.com or open an issue in the repository.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Vercel](https://vercel.com/) for the excellent deployment platform
- [Next.js](https://nextjs.org/) team for the awesome framework

---

Made with ❤️ by [Your Name]
