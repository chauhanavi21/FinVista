# FinVista – Personal Finance Platform

## Overview

**FinVista** is a modern personal finance management platform built on **Next.js 13**.
It helps users track budgets, manage multiple bank accounts, add transactions, and monitor spending trends.

The application features a responsive dashboard, dynamic charts, and CRUD forms for accounts and transactions.
It uses **Clerk** for authentication, **Supabase / Prisma** for data storage, and **Shadcn UI + Tailwind CSS**
for its interface.

An optional **receipt scanner** allows users to upload receipts and automatically extract transaction data via OCR.

---

## Features

### 🎯 Dashboard
- Budget progress visualization
- Overview cards for balances, income, expenses, and accounts
- Accounts grid with default-account toggle
- Transaction overview charts and tables

### 🏦 Account Management
- Add, edit, and delete bank or credit accounts
- Set a default account used for summaries and budgets

### 💸 Transaction Management
- Create and edit transactions
- Category-based income and expense tracking
- Receipt image upload with OCR extraction
- Sortable and filterable transaction list

### ✅ Authentication & Security
- Clerk-based authentication
- Protected routes for authenticated users only

### 🌐 Global Layout & Design
- Responsive layout with Tailwind CSS and Shadcn UI
- Dark mode support
- Global header and footer

---

## Technology Stack

| Layer | Technologies |
|------|-------------|
| Frontend | Next.js 13, React, TypeScript |
| Backend | Next.js Server Actions |
| Database | Supabase (PostgreSQL) / Prisma |
| Authentication | Clerk |
| UI | Tailwind CSS, Shadcn UI |
| Charts & Icons | Chart.js, Lucide Icons |

---

## Project Structure

```
FinVista/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/
│   │   ├── dashboard/
│   │   ├── account/
│   │   └── transaction/
│   ├── layout.js
│   └── page.js
├── actions/
├── components/
├── lib/
├── prisma/ or supabase/
└── README.md
```

---

## Installation

### Prerequisites
- Node.js ≥ 18
- pnpm or npm
- Supabase project or PostgreSQL + Prisma
- Clerk project

### Setup

```bash
git clone https://github.com/chauhanavi21/FinVista.git
cd FinVista
npm install
npm run dev
```

---

## Usage
- Sign in using Clerk
- Manage accounts and budgets from the dashboard
- Add transactions and upload receipts for OCR processing

---

## Contributing
Pull requests are welcome. Please follow the existing code style and add tests where appropriate.

---

## License
No license is included. Add an open-source license if you plan to distribute or extend this project.
