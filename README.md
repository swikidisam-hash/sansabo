# SANSABO

SANSABO is a production-oriented medical platform concept and MVP frontend built with React + TypeScript.

## Overview

This repository contains a modern landing dashboard and operational overview for the SANSABO healthcare ecosystem. It includes:
- medical emergency and SOS-oriented UX
- multilingual experience and patient-first layout
- healthcare service cards and operational metrics
- PWA manifest and service worker support
- architecture and security messaging aligned with the specification

## Quick start

```bash
npm install
npm run dev -- --host
```

The app is available at `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview -- --host
```

## Recommended stack for full rollout

- Frontend: React + TypeScript + Vite
- Backend: Supabase + PostgreSQL + Auth + Realtime
- Mobile: React Native / Expo for Android and iOS
- Security: RLS, MFA, consent tracking, audit logging
- Infra: CI/CD, CDN, monitoring, environment separation

## Key security and compliance notes

- No API keys or secrets are embedded in the frontend.
- The current interface uses mocked data and is intended as a UI MVP and architecture proof, not a production medical operations layer.
- Any real emergency, patient, prescription, billing, or provider workflow must be backed by auditable backend logic and legal compliance review.

## Repository ownership

The product remains under the ownership and governance of the legal owner of SANSABO. Source, infrastructure, cloud accounts, and payment contracts should be controlled by the project owner, not by a single technical vendor.
