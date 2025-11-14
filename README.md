# Fallstack 2023

## Hello there! 👋

Welcome to the Fall Stack event's GitHub repository. Here you'll find everything you need to contribute with your amazing code and ideas!

This is a Núcleo de Estudantes de Informática project, made by students from ISEP.

## Description

Fall Stack is a tech event that happens every year with the intention of presenting tech companies to students that are looking for an internship.

This is also a great place for networking and really getting to know the market.

The event takes place in ISEP (Instituto Superior de Engenharia do Porto) in the 28th and 29th of November.

## Tech stack

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. Clone the repository
2. Install dependencies with `pnpm i`
3. Set up the environment variables `cp .env.example .env`
   - Provide Supabase envs: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_URL`, `SUPABASE_KEY` (service role).
   - In Supabase Storage, create two buckets:
     - `avatars` (public)
     - `cvs` (private)
   - If migrating from the previous Firebase storage, old uploads continue to work; new uploads use Supabase.
   - For immediate signup sessions (required by the existing signup flow), disable email confirmation in your Supabase Auth settings or adjust the flow to wait for confirmation.
4. Run `pnpm prisma db push` (or `pnpm generate` then `prisma migrate`) to sync schema.
5. Generate the Prisma Client with `pnpm generate`

## Running locally

To start the local server use

```bash
pnpm dev
```

> 💡 Use our docker compose to run Postgres locally for Prisma.

```bash
docker compose up -d db
```

## Sync database schema

To apply your Prisma schema changes, sync the database schema with the following command:

```bash
pnpm prisma db push
```

## Seeding

To run the seeding script run

```bash
pnpm seed
```

## Supabase Setup

- Create a Supabase project and set the following env vars from your project settings:
  - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
  - `SUPABASE_URL`, `SUPABASE_KEY` (service role)
- Create storage buckets:
  - `avatars` (public)
  - `cvs` (private)
- Disable email confirmation for immediate sign-in after signup, or adjust the flow.

## Wipe DB

To wipe the database run

```bash
pnpm wipe
```

## Contributing to the project

In order to contribute to the project, you should look into the board provided in the team's ClickUp. All the information's related to branches naming and code styling is in there.
