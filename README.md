# User roles table

<video src="https://github.com/user-attachments/assets/654e0e56-885f-47c0-a6b3-9a1dd767acb7" width="450"></video>

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
- [x] Add support for deleting a user via the "more" icon button dropdown menu x

  **Note**: Got hung up on this and ran into trouble with cache, react-query, server-client mismatch. The mutation works but if run from the dialog in the row action in the table, freezes the UI. :( You can uncomment the button in `UsersTable` and run the direct mutation.

TODO:

- [ ] Add support for viewing all roles in the "Roles" tab x
- [ ] Add support for renaming a role in the "Roles" tab x
- [ ] [Bonus] Add pagination to the user table x

## Next steps

With more time I would have

- finished the TODO's
- introduced dark mode
- built some layout animations with Framer
- gotten invalidation to work with react-query, I haven't worked with that library very much yet
- written unit and a11y tests with vitest
