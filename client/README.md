# User roles table

<video src="https://github.com/user-attachments/assets/6003abb1-c26c-43d0-a0f1-8d5c452402b3" width="450"></video>

Core technologies:

- tanstack/react-query
- tanstack/react-table
- CSS modules

## Getting started

Run the project:

```bash
cd client && npm install

// see some of the UI work and different props in action:

npm run storybook

// run the application

npm run dev

```

## Structure

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

  **Note**: Struggled with this quite a bit --> https://github.com/radix-ui/themes/issues/155

## Next steps

With more time I would have

- better keyboard navigability/focus management
- implemented the "Add User/Role" feature
- implemented "Edit User" feature
- better error handling for server errors
- better "interstitial" loading states, e.g., change a role and see a transient loader while new role is being populated
- more visual design and better UX for skeleton loader on the table
- built a proper `Input`
- introduced dark mode
- built some better feeling layout animations with Framer
- gotten a better mental model of how invalidation works with react-query, I haven't worked with that library very much yet
- written unit and a11y tests with vitest
