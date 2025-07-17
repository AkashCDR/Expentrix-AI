
# Expentrix - AI-Powered Expense Splitting App

Expentrix is a full-stack web application built with **React 19**, **Next.js 15**, **Convex**, **Prisma**, **Clerk Authentication**, **Inngest**, **Tailwind CSS**, and **Shadcn UI**. It simplifies tracking, splitting, and settling shared expenses with friends, roommates, or groups, enhanced by AI-powered features for fairness and efficiency. From splitting chai bills to planning group trips, Expentrix provides a seamless experience with real-time updates, smart settlements, and automated reminders.

This project is an excellent addition to your portfolio, showcasing skills in modern full-stack development, authentication, real-time data, and UI/UX design.

## Features

- **Group Expenses**: Create groups for roommates, trips, or events to organize expenses.
- **Smart Settlements**: Minimize payments with an algorithm that optimizes debt settlement.
- **Expense Analytics**: Track spending patterns and gain insights into shared costs.
- **Payment Reminders**: Automated reminders for pending debts via Inngest.
- **Multiple Split Types**: Split expenses equally, by percentage, or exact amounts.
- **Real-time Updates**: Instantly see new expenses and repayments using Convex.
- **AI-Powered Tracking**: Leverage AI (via Gemini API) for smart expense categorization and fairness suggestions.

## Tech Stack

- **Frontend**: React 19, Next.js 15, Tailwind CSS, Shadcn UI
- **Backend**: Convex (real-time database and backend), Prisma (ORM)
- **Authentication**: Clerk
- **Task Automation**: Inngest (for reminders and scheduled tasks)
- **AI Integration**: Gemini API (for expense categorization and insights)
- **Email Notifications**: Resend API
- **Deployment**: Vercel (recommended for Next.js)

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (v18 or later)
- npm or Yarn
- Convex CLI (`npm install -g convex`)
- Accounts for:
  - [Clerk](https://clerk.com/) (for authentication)
  - [Convex](https://www.convex.dev/) (for backend and database)
  - [Resend](https://resend.com/) (for email notifications)
  - [Inngest](https://www.inngest.com/) (for task automation)
  - [Google Cloud](https://cloud.google.com/) (for Gemini API)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/expentrix.git
   cd expentrix
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:

<xaiArtifact artifact_id="139dd513-421f-4cf1-9b8b-257f4a06066c" artifact_version_id="116ad9bd-29dd-40c5-9d97-495c5a7d2471" title=".env" contentType="text/plain">

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

RESEND_API_KEY=

GEMINI_API_KEY=
