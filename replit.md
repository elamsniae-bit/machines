# Overview

This is a modern heavy equipment rental and sales marketplace built with Next.js 16, React 19, MongoDB, and NextAuth.js. The platform features a professional, responsive design with comprehensive admin and user dashboards, multi-language support, and a complete e-commerce workflow for both buying and renting equipment.

## Key Features

- **Professional Landing Page**: Modern UI with hero section, testimonials, category browsing, and industry knowledge blog
- **Product Catalog**: Browse, search, and filter heavy equipment with BUY and RENT options
- **Authentication System**: Secure login for both administrators and customers using NextAuth.js
- **Admin Dashboard**: Full CRUD operations for products, categories, users, and orders with real-time analytics
- **User Dashboard**: Customer portal for viewing orders and managing account
- **Multi-language Support**: International marketplace with language selector (English, Spanish, French, German, Chinese, Arabic)
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **MongoDB Database**: Scalable NoSQL database with Mongoose ODM

# User Preferences

- Preferred communication style: Simple, everyday language
- Color scheme: Orange (#f97316), Black (#000000), White (#ffffff)
- Design style: Professional, sharp, and modern (not AI-generated looking)

# Recent Changes (October 25, 2025)

## Complete Platform Rebuild

### Technology Stack Migration
- **Frontend**: Next.js 16 with React 19 and TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js v5 (Auth.js)
- **Internationalization**: next-intl for multi-language support
- **Icons**: React Icons library

### Database Architecture
- Migrated from PHP/SQLite to Next.js/MongoDB
- Created Mongoose schemas for Product, User, Order, and Category models
- Implemented connection pooling for optimal performance
- Added seed script for initial data population

### Authentication & Authorization
- Implemented NextAuth.js with credentials provider
- Role-based access control (admin/user roles)
- Protected routes with middleware
- Secure password hashing with bcryptjs
- Session management with JWT

### User Interface Redesign
- Professional landing page matching uploaded design references
- Sticky header with language selector
- Modern product cards with BUY/RENT buttons
- Testimonials and trust indicators
- Blog-style industry knowledge section
- Responsive footer with social links

### Admin Features
- Secure admin login at `/login`
- Access admin dashboard via `/admin` URL (no navbar button)
- Full CRUD operations for:
  - Products (add, edit, delete, manage inventory)
  - Categories (create, edit, delete)
  - Orders (view, update status)
  - Analytics dashboard with statistics

### Customer Features
- User registration and login
- Personal dashboard at `/dashboard`
- Order history and tracking
- Profile management
- Buy or rent equipment options

# System Architecture

## Frontend Architecture

### Pages
- `/` - Landing page with hero, categories, testimonials, and blog sections
- `/products` - Product catalog with search and filtering
- `/products/[id]` - Individual product details
- `/login` - Authentication page
- `/admin` - Protected admin dashboard
- `/dashboard` - Protected user dashboard
- `/checkout` - Order checkout flow (with buy/rent selection)

### Components
- `Header.tsx` - Sticky navigation with language selector
- `Footer.tsx` - Site footer with links and social media
- `AdminDashboard.tsx` - Admin panel interface
- `UserDashboard.tsx` - Customer portal interface

### Styling
- Tailwind CSS 4 for utility-first styling
- Custom orange/black/white color scheme
- Responsive breakpoints for mobile, tablet, and desktop
- Hover states and transitions for interactive elements

## Backend Architecture

### API Routes
- `/api/auth/[...nextauth]` - Authentication endpoints
- `/api/products` - Product CRUD operations (GET, POST)
- `/api/products/[id]` - Individual product operations (GET, PUT, DELETE)
- `/api/categories` - Category management (GET, POST)
- `/api/orders` - Order management (GET, POST)

### Database Models

**Product Model**
- name, brand, category, price, rentalPrice
- model, condition, year, image, images
- description, weight, specifications
- available, featured (boolean flags)
- timestamps (createdAt, updatedAt)

**User Model**
- name, email, password (hashed)
- phone, role (admin/user), address
- timestamps

**Category Model**
- name, slug, description, image
- timestamps

**Order Model**
- user (reference to User)
- items (array of products with type: buy/rent)
- totalAmount, status, paymentMethod, paymentStatus
- shippingAddress (embedded object)
- timestamps

### Authentication Flow
1. User submits credentials to `/api/auth/[...nextauth]`
2. NextAuth validates against MongoDB User collection
3. JWT token generated with user ID and role
4. Middleware protects routes based on authentication status
5. Admin routes check for 'admin' role in JWT

## Data Layer

### MongoDB Connection
- Connection pooling with mongoose
- Environment variable: `MONGODB_URI`
- Automatic reconnection on failure
- Cached connection for serverless optimization

### Database Seeding
- Script: `scripts/seed.ts`
- Run with: `npm run seed`
- Populates initial:
  - Categories from lib/data.json
  - Products with pricing and rental options
  - Default admin user (admin@heavyquips.com / admin123)

## Environment Variables

Required environment variables:

```
MONGODB_URI=<your-mongodb-connection-string>
AUTH_SECRET=<random-secret-key-for-jwt>
NEXTAUTH_URL=http://localhost:5000
```

## Design Patterns

### Server Components
- Pages use React Server Components by default
- Data fetching on the server for better performance
- Reduced client-side JavaScript

### Client Components
- Interactive components marked with 'use client'
- State management with React hooks
- Form handling and user interactions

### API Security
- Protected routes check authentication status
- Admin operations verify admin role
- Input validation on all endpoints
- Password hashing with bcrypt (10 rounds)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactive elements

# Development Setup

## Prerequisites
- Node.js 20+
- MongoDB (local or Atlas cloud)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your MongoDB connection string and secrets
```

3. Seed the database:
```bash
npm run seed
```

4. Run development server:
```bash
npm run dev
```

5. Access the application:
- Frontend: http://localhost:5000
- Admin login: http://localhost:5000/login
- Admin dashboard: http://localhost:5000/admin

## Default Credentials

**Admin Account**
- Email: admin@heavyquips.com
- Password: admin123

## Deployment

The application is configured for Replit deployment with autoscale mode:
- Runs Next.js server on port 5000
- Environment variables managed through Replit Secrets
- MongoDB connection via environment variable

# External Dependencies

## NPM Packages

**Core**
- next@16.0.0
- react@19.2.0
- react-dom@19.2.0

**Database**
- mongoose@^8.19.2

**Authentication**
- next-auth@^5.0.0-beta.29
- bcryptjs@^3.0.2

**Internationalization**
- next-intl@^4.4.0

**UI & Icons**
- tailwindcss@^4
- react-icons@^5.5.0

**Development**
- typescript@^5
- tsx@latest (for running TypeScript scripts)

# Product Categories

The marketplace supports the following equipment categories:
- Excavators
- Backhoe Loaders
- Dump Trucks
- Crane Trucks
- Graders
- Compactors

Each category can be managed through the admin dashboard.

# Feature Roadmap

## Completed Features ✅
- Modern Next.js architecture
- MongoDB database integration
- Admin and user authentication
- Professional UI/UX design
- Product catalog with search/filter
- Buy and Rent functionality
- Admin CRUD operations
- User dashboard
- Multi-language selector

## Pending Enhancements
- Checkout flow completion
- Payment integration (bank transfer or crypto)
- Email notifications
- Advanced product search
- Image upload for products
- Order tracking system
- Customer reviews and ratings
- Inventory management alerts
- Analytics and reporting

# Contact Information

- Support Email: support@heavyquips.com
- Phone: +1 (406) 505-9795
- Address: 1249 N Homestead Rd, North Platte, NE 69101
