# AGENT.md

## Project Overview
This project is a personal portfolio website built with Next.js and TypeScript. The goal is to present the owner's profile, skills, projects, education, contact information, and resume in a modern and polished way.

## Project Structure
- app/page.tsx: main page composition
- app/components/: reusable UI sections and components
- app/context/: global providers such as theme management
- app/globals.css: global styles, theme variables, and utility classes
- public/: static assets such as images and resume files

## UI / Design Guidelines
- Keep the design modern, minimal, and professional.
- Prefer a dark-first theme with light mode support.
- Use a premium, clean visual style with soft gradients and subtle glow effects.
- Maintain good spacing, strong typography, and readable content hierarchy.
- Use the existing CSS variables and utility classes from app/globals.css whenever possible.

## Theme Rules
- Default theme is dark.
- Support light mode through the theme toggle.
- Use these core color roles:
  - background: dark navy / light slate
  - foreground: near-white / dark slate
  - primary: indigo-based blue
  - accent: purple-based highlight
  - surface: card/container background
  - text-primary, text-secondary, text-muted: semantic text colors
- Keep contrast accessible and avoid harsh or clashing colors.

## Styling Preferences
- Prefer Tailwind CSS utility classes for layout and spacing.
- Reuse existing global classes such as gradient-text, glow, glass, and gradient-border where appropriate.
- Avoid introducing too many custom styles unless necessary.
- Keep animations subtle and smooth.

## Component Rules
- Build components in a reusable and modular way.
- Keep sections focused and easy to maintain.
- Follow the current structure of the portfolio sections: Hero, About, Skills, Projects, Education, Contact, Footer.
- Preserve the existing portfolio tone: polished, personal, and professional.

## Content Rules
- Content should feel personal and concise.
- Prefer clear English content unless the user explicitly requests Thai.
- If updating sections, keep the wording professional and easy to scan.

## Development Rules
- Prefer simple, maintainable code.
- Keep TypeScript types explicit where useful.
- Avoid unnecessary dependencies.
- When editing UI, ensure the result still works in both dark and light themes.

## Verification
Before finishing work, verify that changes do not break the app by checking the relevant build or lint command when possible.
