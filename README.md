# Tour Guide - Travel Booking Website

A modern travel booking website built with Next.js, React, and Tailwind CSS, designed to match the provided Figma design.

## Features

- 🏠 **Homepage** with hero section, search functionality, and featured destinations
- 🗺️ **Destinations Page** with filtering and search capabilities  
- 🎫 **Tour Detail Pages** with booking functionality and reviews
- 👤 **User Profile** with personal information and booking history
- 📱 **Responsive Design** that works on all devices
- 🎨 **Modern UI** with teal/turquoise and yellow color scheme

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd tour-guide-travel-app
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
tour-guide-travel-app/
├── app/                    # Next.js 13+ app directory
│   ├── destinations/       # Destinations listing page
│   ├── tours/             # Tour detail pages
│   ├── profile/           # User profile page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
├── public/              # Static assets
│   └── images/          # Image assets
└── ...config files
\`\`\`

## Key Pages

- **Homepage** (`/`) - Hero section with search, featured destinations, and tours
- **Destinations** (`/destinations`) - Filterable list of travel destinations  
- **Tour Details** (`/tours/[id]`) - Detailed tour information with booking
- **Profile** (`/profile`) - User account management

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

## Design System

The design follows the Figma specifications with:
- **Primary Colors**: Teal (#14B8A6), Yellow (#FCD34D)
- **Typography**: Inter font family
- **Components**: Cards, buttons, badges with consistent styling
- **Layout**: Responsive grid system

## Deployment

The app can be deployed to Vercel, Netlify, or any platform that supports Next.js.

\`\`\`bash
npm run build
npm start
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
