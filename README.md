# FinVista – Personal Finance Management Platform

<div align="center">

![FinVista Logo](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/logo.png)

**A modern, AI-powered personal finance management platform built with Next.js**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**FinVista** is a comprehensive personal finance management platform that empowers users to take complete control of their financial health. Built with modern web technologies, FinVista offers an intuitive interface for tracking expenses, managing multiple accounts, setting budgets, and gaining valuable insights through AI-powered analytics.

### Key Highlights

- 🎨 **Beautiful Dark Theme UI** - Modern, responsive design with smooth animations
- 🤖 **AI-Powered Insights** - Get intelligent recommendations and spending pattern analysis
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🔒 **Secure Authentication** - Powered by Clerk for enterprise-grade security
- 📊 **Real-time Analytics** - Interactive charts and visualizations
- 🧾 **Smart Receipt Scanner** - OCR-powered automatic transaction extraction

![Landing Page](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/landing-page.png)

---

## ✨ Features

### 🎯 Dashboard & Analytics

- **Comprehensive Overview**
  - Real-time budget progress visualization
  - Income vs. expense breakdown
  - Account balance summaries
  - Transaction statistics and trends

- **Interactive Charts**
  - Spending patterns by category
  - Monthly/yearly financial trends
  - Account-wise transaction distribution
  - Visual budget tracking

![Dashboard](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/dashboard.png)

### 🏦 Account Management

- **Multi-Account Support**
  - Create unlimited bank or credit accounts
  - Set default account for quick access
  - Account-specific transaction tracking
  - Balance management and updates

- **Account Operations**
  - Add new accounts with initial balance
  - Edit account details
  - Delete accounts (with transaction cascade)
  - Toggle default account status

![Account Management](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/account-management.png)

### 💸 Transaction Management

- **Transaction Tracking**
  - Add income and expense transactions
  - Categorize transactions automatically
  - Edit and delete transactions
  - Bulk transaction operations

- **Advanced Features**
  - Recurring transaction support (Daily, Weekly, Monthly, Yearly)
  - Receipt image upload with OCR extraction
  - Transaction search and filtering
  - Sortable transaction tables with pagination
  - Transaction status tracking (Pending, Completed, Failed)

![Transaction Management](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/transaction-management.png)

### 📸 Smart Receipt Scanner

- **OCR Technology**
  - Upload receipt images
  - Automatic data extraction (amount, date, merchant)
  - Pre-fill transaction forms
  - Support for multiple image formats

![Receipt Scanner](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/receipt-scanner.png)

### 📊 Budget Management

- **Budget Planning**
  - Set monthly budgets per account
  - Real-time budget progress tracking
  - Budget alerts and notifications
  - Visual budget indicators

![Budget Tracking](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/budget-tracking.png)

### 🔔 Automated Notifications

- **Email Reports**
  - Monthly financial summaries
  - Budget alert notifications
  - Spending insights and recommendations
  - Customizable report frequency

### 🎨 User Interface

- **Modern Design**
  - Dark theme with colorful accents
  - Smooth animations and transitions
  - Hover effects and interactive elements
  - Mobile-first responsive design

- **User Experience**
  - Intuitive navigation
  - Fast page loads
  - Real-time updates
  - Accessible components

![UI Showcase](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/ui-showcase.png)

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.2.3 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.0+ | Type safety |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **Shadcn UI** | Latest | Component library |
| **Recharts** | 2.14.1 | Chart visualization |
| **Lucide React** | 0.462.0 | Icon library |
| **React Hook Form** | 7.53.2 | Form management |
| **Zod** | 3.23.8 | Schema validation |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js Server Actions** | - | Server-side logic |
| **Prisma** | 7.2.0 | ORM and database toolkit |
| **PostgreSQL** | - | Primary database |
| **Clerk** | 6.6.0 | Authentication & user management |
| **Inngest** | 3.27.4 | Background jobs & workflows |
| **Resend** | 4.8.0 | Email service |
| **Google Generative AI** | 0.21.0 | AI-powered insights |

### Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |
| **Turbopack** | Fast bundler (dev mode) |
| **ArcJet** | Rate limiting & security |

---

## 📁 Project Structure

```
FinVista/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                  # Protected routes
│   │   ├── dashboard/           # Dashboard page
│   │   ├── account/             # Account management
│   │   │   ├── [id]/           # Account detail page
│   │   │   └── _components/    # Account components
│   │   └── transaction/        # Transaction management
│   │       ├── create/         # Create/edit transaction
│   │       └── _components/    # Transaction components
│   ├── api/                     # API routes
│   │   └── inngest/            # Inngest webhook
│   ├── layout.js               # Root layout
│   ├── page.js                 # Landing page
│   ├── globals.css             # Global styles
│   └── not-found.jsx           # 404 page
├── actions/                     # Server actions
│   ├── account.js              # Account operations
│   ├── transaction.js          # Transaction operations
│   ├── dashboard.js            # Dashboard data
│   ├── budget.js               # Budget operations
│   └── send-email.js           # Email utilities
├── components/                  # Reusable components
│   ├── ui/                     # Shadcn UI components
│   ├── header.jsx              # Navigation header
│   ├── hero.jsx                # Landing hero section
│   └── create-account-drawer.jsx
├── lib/                        # Utility libraries
│   ├── prisma.js               # Prisma client
│   ├── inngest/                # Inngest functions
│   │   ├── client.js
│   │   └── function.js
│   └── utils.js                # Helper functions
├── data/                       # Static data
│   ├── categories.js           # Transaction categories
│   └── landing.js             # Landing page data
├── emails/                    # Email templates
│   └── template.jsx
├── hooks/                      # Custom React hooks
│   └── use-fetch.js
├── prisma/                     # Database
│   ├── schema.prisma           # Database schema
│   ├── migrations/             # Database migrations
│   └── config.ts               # Prisma config
├── public/                     # Static assets
│   ├── screenshots/            # Screenshots (add your images here)
│   ├── banner1.jpg
│   ├── banner2.jpg
│   ├── banner3.jpg
│   └── logo.png
├── middleware.js               # Next.js middleware
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── package.json
└── README.md
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 18.0.0
- **npm** or **pnpm** or **yarn**
- **PostgreSQL** database (or use Supabase)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/chauhanavi21/FinVista.git
cd FinVista
```

### Step 2: Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Step 3: Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/finvista"
DIRECT_URL="postgresql://user:password@localhost:5432/finvista"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Inngest (Optional - for background jobs)
INNGEST_EVENT_KEY="..."
INNGEST_SIGNING_KEY="..."

# Resend (Optional - for emails)
RESEND_API_KEY="re_..."

# Google Generative AI (Optional - for AI insights)
GOOGLE_GENERATIVE_AI_API_KEY="..."

# ArcJet (Optional - for rate limiting)
ARCJET_KEY="ajkey_..."

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Step 4: Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### Step 5: Run the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Usage Guide

### Getting Started

1. **Sign Up / Sign In**
   - Click "Get Started" on the landing page
   - Sign up using Clerk authentication
   - Verify your email address

2. **Create Your First Account**
   - Navigate to Dashboard
   - Click "Create Account" or use the drawer
   - Enter account name, type, and initial balance
   - Set as default if it's your first account

3. **Add Transactions**
   - Click "Add Transaction" button
   - Fill in transaction details:
     - Type (Income/Expense)
     - Amount
     - Category
     - Date
     - Description
   - Optionally upload a receipt for OCR extraction
   - Save the transaction

4. **Set Up Budget**
   - Go to Dashboard
   - Set your monthly budget amount
   - Track progress in real-time

### Key Features Usage

#### Account Management

![Account Detail](https://raw.githubusercontent.com/chauhanavi21/FinVista/main/public/screenshots/account-detail.png)

- **View Account Details**: Click on any account card to see detailed view
- **Set Default Account**: Toggle the switch on account card
- **Delete Account**: Click "Delete Account" button (requires at least one account)

#### Transaction Management

- **Bulk Operations**: Select multiple transactions and delete them at once
- **Filtering**: Use search, type filter, and recurring filter
- **Sorting**: Click column headers to sort
- **Pagination**: Navigate through pages of transactions

#### Receipt Scanner

1. Click "Add Transaction"
2. Click "Upload Receipt" button
3. Select an image file
4. Wait for OCR processing
5. Review and edit extracted data
6. Save the transaction

---

## 🔧 Configuration

### Database Configuration

The project uses Prisma 7 with PostgreSQL. Connection URLs are configured in `prisma/config.ts`:

```typescript
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
});
```

### Clerk Authentication

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy the publishable key and secret key
4. Add them to your `.env.local` file

### Email Configuration (Optional)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`
4. Configure email templates in `emails/template.jsx`

---

## 🧪 Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Email development (if using React Email)
npm run email
```

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Use Server Actions for mutations
- Keep components small and focused

---

## 📸 Screenshots

Add your screenshots to the `public/screenshots/` folder and update the links above. Recommended screenshots:

- `landing-page.png` - Landing page with hero section
- `dashboard.png` - Main dashboard view
- `account-management.png` - Account list and management
- `account-detail.png` - Individual account detail page
- `transaction-management.png` - Transaction list and filters
- `receipt-scanner.png` - Receipt upload and OCR
- `budget-tracking.png` - Budget progress visualization
- `ui-showcase.png` - UI components showcase

### Adding Screenshots

1. Take screenshots of your application
2. Save them in `public/screenshots/` folder
3. Name them descriptively (e.g., `dashboard.png`)
4. The README will automatically reference them via GitHub raw links

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Write clear commit messages
- Test your changes thoroughly
- Update README if adding new features
- Follow the existing code structure
- Add TypeScript types where applicable

---

## 🐛 Known Issues

- [ ] Add known issues here
- [ ] Or remove this section if none

---

## 🗺️ Roadmap

- [ ] Multi-currency support
- [ ] Export transactions to CSV/PDF
- [ ] Mobile app (React Native)
- [ ] Bank account integration
- [ ] Investment tracking
- [ ] Financial goals and planning
- [ ] Collaborative budgets (family/shared)

---

## 📝 License

This project is currently unlicensed. Add an open-source license if you plan to distribute or extend this project.

Common license options:
- MIT License
- Apache 2.0
- GNU GPL v3

---

## 👨‍💻 Author

**Avi Chauhan**

- GitHub: [@chauhanavi21](https://github.com/chauhanavi21)
- Website: [chauhanavi.com](https://chauhanavi.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful component library
- [Clerk](https://clerk.com/) - Authentication made simple
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

## 📞 Support

If you have any questions or need help:

- Open an issue on [GitHub](https://github.com/chauhanavi21/FinVista/issues)
- Check the [Documentation](#-documentation)
- Contact: [Your Email/Contact Info]

---

<div align="center">

**Made with ❤️ by the FinVista Team**

⭐ Star this repo if you find it helpful!

</div>
