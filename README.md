# Fallstack 2025

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
4. Run `pnpm migrate` to apply the migrations.
5. Generate the Prisma Client with `pnpm generate`

## Running locally

To start the local server use

```bash
pnpm dev
```

> 💡 Use our docker compose file to create the MySQL database locally.

```bash
docker compose up -d
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

## Wipe DB

To wipe the database run

```bash
pnpm wipe
```

## Contributing to the project

In order to contribute to the project, you should look into the board provided in the team's ClickUp. All the information's related to branches naming and code styling is in there.
