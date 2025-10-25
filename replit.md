# Overview

This is a heavy equipment rental and marketplace website built with PHP and SQLite. The site features a custom admin dashboard for managing equipment inventory, categories, and customer orders. Originally built for MySQL/MariaDB, it has been converted to use SQLite3 for compatibility with the Replit environment.

The project includes:
- Public-facing equipment rental/sales website
- Custom admin dashboard for inventory management
- User authentication and authorization system
- Product catalog with categories (Excavators, Dump Trucks, Crane Trucks, Graders, Compactors, Forklifts, Wheel Loaders, Bulldozers, Skid-Steer Loaders, Backhoe Loaders, Chainsaw)
- Image upload functionality for equipment listings
- Order history tracking system

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (October 25, 2025)

## Replit Environment Setup
- Installed PHP 8.3 with SQLite3 support
- Converted MySQL database to SQLite3 (heavyequip.db)
- Modified all mysqli_* function calls to work with SQLite3 object methods
- Configured PHP development server on port 5000
- Set up environment-aware host configuration using REPLIT_DEV_DOMAIN
- Configured deployment with autoscale mode

## Database Migration
- Created SQLite3 database with tables: admin, categories, client, history, products
- Implemented custom DBConnection class extending SQLite3 for compatibility
- Added helper functions (db_num_rows, db_fetch_assoc, db_fetch_array) for result set handling

# System Architecture

## Frontend Architecture

**Public Website**
- Static HTML/CSS with Elementor-style design elements
- Bootstrap 3.3.5 for responsive grid system
- Orange and black color scheme with heavy equipment imagery
- Navigation: Home, About us, Testimonials, FAQs, Products, Contact, Account

**Admin Dashboard**
- Neon admin theme with dark UI
- Located in `/admin` directory
- Material Design Icons (MDI) for interface elements
- Chart.js for analytics visualization
- File upload interface for product images

## Backend Architecture

**PHP Application Structure**
- `/saver/connection.php` - Database connection and helper functions
- `/saver/admin/authorization.php` - Admin authentication
- `/saver/user/` - User authentication and registration
- `/admin/` - Admin panel pages (home, products, categories, approvals)
- `/app/dashboard/` - User dashboard
- `/components/` - Reusable UI components (navigation, sidebars)
- `/process.php` - Form processing logic
- `/products.php` - Product listing page

**Database Layer**
- SQLite3 database (heavyequip.db)
- Custom DBConnection class with mysqli-compatible methods
- Tables: admin, categories, client, history, products
- Session-based authentication system

**File Upload System**
- Product images stored in `/upload/` directory
- Supports JPG, PNG, WEBP formats
- Unique filename generation with timestamp prefixes

## Data Layer

### Database Schema

**admin table**
- id, username, email, password
- Default admin credentials available in database

**categories table**
- id, name
- Pre-populated with equipment categories

**client table**
- id, name, email, password, phone
- Customer account information

**products table**
- id, price, name, brand, categorie, model, productcondition, year, image, des, weight
- Equipment inventory listings

**history table**
- id, product_id, status, quality, rec_name, rec_email, rec_phone, rec_address, postal, user, date
- Tracks rental/purchase history and approvals

## Design Patterns

**Session Management**
- PHP sessions for authentication state
- Session started in connection.php
- Authorization checks on admin pages

**Environment Configuration**
- REPLIT_DEV_DOMAIN environment variable for dynamic host URLs
- Fallback to localhost:5000 for local development

**Database Abstraction**
- DBConnection class extends SQLite3
- Provides mysqli-compatible method names (real_escape_string, insert_id, affected_rows, error)
- Global helper functions for result set iteration

# External Dependencies

## PHP Extensions Required
- SQLite3 (PDO_SQLite, sqlite3)
- GD (for image processing)
- Session support
- MBString
- JSON

## JavaScript Libraries

**Admin Dashboard**
- jQuery 3.7.1
- Bootstrap 3.3.5
- Chart.js 2.9.3 for analytics
- Morris.js for charts
- jVectorMap 1.2.2
- Owl Carousel 2.3.4
- Select2 for dropdowns
- GSAP TweenMax 1.18.0 for animations

**Public Website**
- jQuery with Migrate plugin
- Elementor frontend assets
- MetForm for contact forms
- Cute Alert for notifications

## CSS Frameworks

- Bootstrap 3.3.5
- Material Design Icons (MDI)
- Font Awesome 5.15.3
- Flag Icon CSS
- Neon admin theme
- Elementor styles

# Development Setup

## Running Locally
1. PHP 8.2+ with SQLite3 extension
2. Run: `php -S 0.0.0.0:5000`
3. Access at http://localhost:5000

## Database
- SQLite database: `heavyequip.db` (in project root)
- No external database server required
- Database is file-based and portable

## Admin Access
- URL: `/admin/auth/`
- Default credentials available in database (see admin table)

## File Permissions
- `/upload/` directory must be writable for product image uploads
- Database file must be writable by PHP process

# Deployment

- Configured for Replit Autoscale deployment
- Runs PHP built-in server on port 5000
- SQLite database included in deployment
- No build step required
