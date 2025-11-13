# 📊 Finance Tracker  
A modern, full-stack **personal finance management application** built with **Next.js 14**, **Hono**, **Drizzle ORM**, **Neon**, **React Query**, and **Tailwind CSS**.

Track your **income, expenses, categories, accounts**, visualize spending, and import CSV transactions — all within a sleek, fast, and intuitive UI.

---

## 🖼️ App Screenshots

### 🟦 Dashboard  
![Dashboard Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/dashboard.png)

### 📄 Transactions Page  
![Transactions Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/transactions.png)

### ➕ Add Transaction Drawer  
![Add Transaction Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/add-transaction..png)

### 🏦 Accounts Page  
![Accounts Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/accounts.png)

### ➕ Add Account Drawer  
![Add Account Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/add-account.png)

### 🏷 Categories Page  
![Categories Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/categories.png)

### ➕ Add Category Drawer  
![Add Category Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/add-category.png)

### 🔐 Login Page  
![Login Screenshot](https://raw.githubusercontent.com/pulkitxb/Finance-Tracker/main/public/images/login.png)

---

## 🚀 Features

### 🔐 Authentication  
- Secure user auth via **Clerk**  
- Protected backend routes using `clerkMiddleware`

### 📈 Dashboard Overview  
Comprehensive financial snapshot including:  
- 💰 Remaining Balance  
- 📥 Total Income  
- 📤 Total Expenses  
- 📊 % Change vs Previous Period  
- 🗂 Category-wise Spending (Pie Chart)  
- 📆 Daily Activity Trends (Line / Area / Bar Charts)

### 💸 Transactions Module  
- Add / Edit / Delete transactions  
- Bulk delete  
- CSV Import with smart column mapping  
- Select categories & accounts (creatable dropdowns)  
- Date picker  
- Rich table with sorting, filtering, pagination

### 🏦 Accounts Module  
- Create / Edit / Delete accounts  
- Bulk delete  
- View account-wise transactions

### 🏷 Categories Module  
- Create / Edit / Delete categories  
- Bulk delete  
- Visualize category spending

### ⚙️ Backend API (Hono)  
- CRUD for Accounts, Categories, Transactions  
- Summary API providing:  
  - Aggregated income & expenses  
  - Previous period comparison  
  - Category breakdown  
  - Daily analytics

### 🗃 Database (Drizzle + Neon)  
- Postgres schema for Accounts, Categories, Transactions  
- Migrations  
- Seeding scripts  
- Strong relations with Drizzle ORM

### 📦 CSV Import System  
- Auto-map & validate columns  
- Handles negative values like `(120)`, `-120`, `$120.40`, `120,40`  
- Automatically converts to milli-units  

---

## 🛠 Tech Stack

### **Frontend**
- Next.js 14 (App Router)
- React Query (TanStack Query)
- Shadcn UI
- Tailwind CSS
- React Hook Form + Zod  
- Recharts

### **Backend**
- Hono  
- Drizzle ORM  
- Neon Postgres  
- Clerk Auth  

### **Tooling**
- TypeScript  
- ESLint + Prettier  
- Drizzle Migrations  
- React Papaparse (CSV import)

---

## 📂 Project Structure

```
pulkitxb-finance-tracker/
│
├── app/                 # Next.js app router pages
│   ├── (auth)/          # Login / Signup
│   ├── (dashboard)/     # Dashboard modules
│   └── api/             # Hono API routes
│
├── components/          # Reusable UI components
│   └── ui/              # Shadcn UI primitives
│
├── features/            # Business logic modules
│   ├── api/             # React Query API hooks
│   ├── components/      # Feature-specific UI
│   └── hooks/           # Zustand + utilities
│
├── db/
│   ├── drizzle.ts       # DB connection
│   └── schema.ts        # Drizzle schema
│
├── drizzle/             # Migrations
├── providers/           # Context providers
├── scripts/             # Seed + migration scripts
└── lib/                 # Utilities + Hono client
```

---

## 🗄 Database Schema

### **accounts**
| Column   | Type | Notes |
|----------|------|-------|
| id       | text (PK) | |
| name     | text | required |
| userId   | text | required |
| plaidId  | text | optional |

### **categories**
| Column  | Type |
|---------|------|
| id      | text |
| name    | text |
| userId  | text |

### **transactions**
| Column      | Type |
|-------------|-------|
| id          | text |
| payee       | text |
| amount      | integer (milliunits) |
| date        | timestamp |
| notes       | text |
| accountId   | FK → accounts |
| categoryId  | FK → categories |

---

## ▶️ Getting Started

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/pulkitxb/Finance-Tracker.git
cd Finance-Tracker
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Configure Environment**
Create `.env.local`:
```env
DATABASE_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
```

### **4️⃣ Run Migrations**
```bash
npm run db:migrate
```

### **5️⃣ Seed Database (optional)**
```bash
npm run db:seed
```

### **6️⃣ Start Development Server**
```bash
npm run dev
```

---

## 🔄 Useful Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build production |
| `npm run start` | Start production server |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run migrations |
| `npm run db:seed` | Seed data |
| `npm run lint` | Run ESLint |

---

## 🌐 API Endpoints (Hono)

### `/api/accounts`
- `GET /` – list accounts  
- `POST /` – create  
- `GET /:id` – fetch one  
- `PATCH /:id` – update  
- `DELETE /:id` – delete  
- `POST /bulk-delete` – batch delete  

### `/api/categories`
Same as accounts.

### `/api/transactions`
- Filter by date range / account  
- Bulk import  
- Bulk delete  
- Create / edit / delete  

### `/api/summary`
Returns:
- Income, expenses, balance  
- % change from previous period  
- Category spend chart data  
- Daily activity data  

---

## 📥 CSV Import Format

### **Required Columns**
- amount  
- date  
- payee  

### **Supports Formats**
- `(120.50)` → negative  
- `-120`  
- `$120.40`  
- `120,40`  

✔ Removes currency signs  
✔ Handles comma decimals  
✔ Converts to milli-units  

---

## 📘 Learning Highlights  
This project demonstrates:  
- Modern full-stack architecture with App Router  
- API routing & auth with Hono + Clerk  
- ORM-based joins, aggregations, grouping  
- Charting with Recharts  
- Zustand state for UI drawers/modals  
- Type-safe RPC API consumption  
- Clean component architecture  
- CSV parsing & dynamic column mapping  

---

## ⭐ Contribute
Pull requests and feature suggestions are welcome!

---

## 📄 License
MIT License ©️ 2025
