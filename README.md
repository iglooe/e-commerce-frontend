# E-Commerce Frontend

This is the front-end for the [Admin Dashboard](https://github.com/iglooe/e-commerce-template) which provides an interface for seller workflows. Built with everything new in Next.js 13.

<!-- [![E-Commerce-template](./public/images/screenshot/landing-page-screenshot.png)](https://skateshop.sadmn.com/) -->

> **Warning**
> This project is still in development and is not ready for production use.
>
> It uses new technologies (server actions, prisma ORM) which are subject to change and may break your application.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [Prisma](https://www.prisma.io/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Payments infrastructure:** [Stripe](https://stripe.com)

## Features implemented

- [x] Validation with **Zod**
- [x] Storefront with products, categories
- [x] Checkout with **Stripe Checkout**

## Running Locally

1. Clone the repository

```bash
git clone git@github.com:iglooe/e-commerce-frontend.git
```

2. Install dependencies using npm

```bash
npm install
```

3. Copy the `.env.example` to `.env` and update the variables.

```bash
cp .env.example .env
```

4. Start the development server (port: 3001)

```bash
npm run dev
```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy), [Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/) and [Heroku](https://elements.heroku.com/buildpacks/mars/heroku-nextjs) for more information.
