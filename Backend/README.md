# Backend

This project uses Prisma v7+ and requires either an adapter package (e.g. `@prisma/adapter-planetscale`) or an `accelerate` URL (a `prisma://` or `prisma+...` URL) to initialize the Prisma client.

Quick start

- Copy `.env.example` to `.env` and set either `PRISMA_ACCELERATE_URL` or `DATABASE_URL`.

If you use Planetscale, install the adapter (already in `package.json`):

```bash
npm install @prisma/adapter-planetscale
```

Then ensure your `.env` contains your connection string. The server will fail to start if neither an adapter nor an accelerate URL is configured.
