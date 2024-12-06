# User roles table

<video src="https://github.com/user-attachments/assets/8b351757-0450-4a26-800b-dcbd978b0c33" width="450"></video>

## Getting started

To run the project, clone it locally. Then follow the steps below.

### Set up local env

Rename the `.env` example file in the `client` directory from `.env.EXAMPLE` to `env.local`.

### Install dependencies and run the project

```bash

cd client && npm install
cd server && npm install

// in a fresh terminal, start server
cd server && npm run api

// run the application
cd client && npm run dev

// storybook:
cd client && npm run storybook

```

## Project structure

```bash
.
├── README.md
├── app
│   ├── components
│   │   ├── Avatar
│   │   ├── Button // <-- light recreation of WorkDS button
│   │   ├── DataTable // <-- consumes Table
│   │   ├── DeleteUserDialog // <-- composes Dialog
│   │   ├── Dialog
│   │   ├── DropdownMenu
│   │   ├── ErrorBoundary
│   │   ├── Label
│   │   ├── Provider
│   │   ├── RolesTable // <-- consumes DataTable
│   │   ├── Table
│   │   ├── TableSkeleton
│   │   ├── Tabs
│   │   ├── UsersTable // <-- consumes DataTable
│   │   ├── VisuallyHidden
│   │   └── index.ts
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── query-keys.ts
│   └── types
│       └── shared.ts
├── lib
│   └── fonts.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── fonts
├── styles
│   └── globals.css
└── tsconfig.json
```

## Tasks

- [x] Setup the "Users" and "Roles" tab structure ✔️
- [x] Add the users table ✔️
- [x] Add support for filtering the users table via the "Search" input field ✔️
- [x] Add support for deleting a user via the "more" icon button dropdown menu ✔️

- [x] Add support for viewing all roles in the "Roles" tab ✔️
- [x] Add support for renaming a role in the "Roles" tab ✔️
- [x] [Bonus] Add pagination to the user table ✔️

  **Note**: Struggled with this --> https://github.com/radix-ui/themes/issues/155

## Next steps

With more time I would like to

- improve keyboard navigability/focus management between dialog and dropdown
- implement the "Add User/Role" feature
- implement "Edit User" feature
- craft better error handling for server errors
- craft better "interstitial" loading states, e.g., change a role and see a transient loader while new role is being populated
- more visual design and better UX for skeleton loader on the table
- build a proper `Input` component
- introduce dark mode
- build some better feeling layout animations with Framer
- have a better mental model of how invalidation works with react-query, I haven't worked with that library very much yet
- write unit and a11y tests with vitest
