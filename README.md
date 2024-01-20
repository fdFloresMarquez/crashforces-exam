# Crash Forces App
This project was made with `Next.js`, `Typescript`, `Taildind.Css` for styling with Shadcn/ui component library. 
For the forms I decided to use `React-hook-form`, `Zod` for validations, and `Zustand` to persist the state trough multiple pages (the multi-step form).

Simulated an api call in `./src/api.ts` when importing the json to show how i would use it in a real situation.

You can find all the reusable components in `./src/components`

I tried to use type-safety always.

## Decisions made

* Made a nav-bar just to ilustrate with fake routes
* Separated the form 2 json in to 2 parts
    * Accident Info
    * Collision Info that is a multi-step form with validations with a final result with parties involved
* Json-2-form separated in to 2 parts as well with a loading state, simulating the api call
    * General information
    * Who was involved
* I discarded Report pages 4,5 because it showed the same information. 
* Some information in the json was not used, like impactList for example.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
