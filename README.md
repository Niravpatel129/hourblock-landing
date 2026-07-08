# HourBlock Landing Page

Marketing and download site for HourBlock, a desktop productivity app positioned around getting tasks completed instead of just tracking another to-do list.

The site is built with Next.js and includes animated landing-page sections, product media, download calls-to-action for macOS and Windows, Firebase analytics, and Meta tracking hooks for page-view and download events.

## Features

- Hero section with animated product messaging
- Product carousel with hosted images and videos
- Download buttons for macOS and Windows builds
- Feature, feedback, FAQ, and footer sections
- Mouse-following visual effects with Framer Motion
- Firebase Analytics setup
- Meta Pixel and Conversions API event wiring

## Tech stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Firebase Analytics
- Swiper
- React Icons
- React Hot Toast

## Project structure

```text
src/
  app/
    components/     # Landing page UI sections
    page.js         # Main landing page composition and tracking hooks
  utils/
    config.js       # Download URLs for Mac and Windows builds
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site at:

```text
http://localhost:3000
```

## Available scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Run the production build
npm run lint     # Run Next.js linting
```

## Configuration notes

Download links are managed in:

```text
src/utils/config.js
```

Meta tracking expects this environment variable when download/page-view events are enabled:

```bash
NEXT_PUBLIC_FACEBOOK_TOKEN=your_token_here
```

Before deploying, verify that analytics IDs, tracking tokens, Firebase config, and download URLs are correct for the target environment.

## Status

This repository is focused on the public landing page and download experience for HourBlock. The actual desktop app builds are linked from the release URLs in the site configuration.
