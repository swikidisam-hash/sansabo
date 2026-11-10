# SANSABO deployment plan

## Prerequisites
- Node.js 20+
- npm or pnpm
- Supabase project
- Cloud hosting provider with production environment
- Payment provider credentials for Mobile Money/cards where applicable

## Environment variables
Use `.env.example` as a baseline and configure real secrets in the production environment.

## Local development
```bash
npm install
cp .env.example .env
npm run dev -- --host
```

## Production build
```bash
npm run build
npm run preview -- --host
```

## Deployment checklist
- Confirm environment variables and secrets
- Validate production database migrations and RLS policies
- Test authentication and role permissions
- Validate emergency workflow if connected to real backend
- Confirm monitoring, backups, and incident response
- Review compliance and consent flows before go-live
