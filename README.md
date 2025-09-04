# FinVista – AI‑Powered Personal Finance Platform

<div align="center"> <!-- You can replace this with your own banner image --> 
<img src="https://imgur.com/placeholder.png" alt="FinVista Banner" width="600"/> 
</div>

🔗 **Introduction**

FinVista is a full‑stack personal finance platform that leverages AI to help you track income, expenses and budgets effortlessly. Built with Next.js 15 and Prisma, it lets users create multiple accounts, monitor spending patterns, and automate expense categorization via receipt scanning. The system provides real‑time analytics and actionable insights to keep your finances on track across devices.

---

⚙️ **Tech Stack**

- **Next.js 15 / React 19** – fast server‑rendered frontend & API routes  
- **Prisma** – type‑safe ORM for interacting with your database  
- **Clerk** – authentication and user management  
- **ArcJet** – request protection and rate limiting  
- **Inngest** – background jobs and scheduling  
- **Google Gemini** – AI‑powered receipt scanning  
- **Resend** – transactional email delivery  
- **Tailwind CSS & Radix UI** – responsive styling and accessible components  
- **Recharts** – interactive charts and analytics  

---

✨ **Features**

- **Secure Account Management** – register/sign‑in and manage multiple bank accounts with custom starting balances. Default accounts can be set and switched easily.  
- **Budget Planning & Tracking** – set monthly budgets per account, calculate current month expenses automatically and visualize progress with progress bars.  
- **Advanced Analytics** – view aggregated transactions, account balances and spend breakdowns on the dashboard; charts highlight income vs. expenses and category trends.  
- **AI‑Driven Receipt Scanning** – upload a receipt image and FinVista uses generative AI to extract the total, date, merchant, description and category, then adds it as a transaction.  
- **Transactions & Categories** – record income or expenses, edit or delete transactions, set recurring intervals, and categorize expenses using a rich library of default categories.  
- **Email Notifications** – send onboarding or transaction emails with Resend.  
- **Future‑Proof Architecture** – includes seeds for demo data, rate‑limiting via ArcJet, and hooks for integrating background jobs (Inngest) and multi‑currency support.  
- **Responsive Design** – optimized for desktop and mobile with a clean, modern UI.  

---

🚀 **Getting Started**

### Prerequisites
- Node.js 18 or later  
- PostgreSQL (or your preferred relational database) with a corresponding Prisma connection string  
- API keys for Clerk, Google Gemini, Resend and ArcJet  

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/finvista.git
cd finvista

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run the development server
npm run dev
```

### Environment Variables
Create a `.env` file in the project root with the following:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/finvista
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
```

---

📂 **Project Structure**
```
finvista/
 ├─ app/           # Next.js app routes (auth, dashboard, account, transaction)
 ├─ actions/       # Server actions (accounts, budgets, dashboard, transactions, emails)
 ├─ components/    # Reusable UI components and forms
 ├─ data/          # Static data for landing pages and categories
 ├─ lib/           # Helper libraries (Prisma client, ArcJet instance, etc.)
 ├─ prisma/        # Prisma schema and migrations
 └─ public/        # Static assets (icons, images)
```

---

🧪 **Testing**
```bash
npm test
```

---

📈 **Future Improvements**
- Multi‑currency conversion and real‑time FX rates  
- Automatic bill reminders and recurring payments  
- AI‑powered budgeting recommendations and savings goals  
- Mobile companion app  

---

📜 **License**  
This project is released under the MIT License. Feel free to modify and use it for your own applications.
