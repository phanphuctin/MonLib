# MonLibrary - AI Coding Agent Instructions

## Project Overview
MonLibrary is an Angular 19 library management system using PrimeNG UI components with a modern standalone component architecture. The app follows a feature-based structure with shared components for layout.

## Architecture Patterns

### Component Structure
- **Standalone Components**: All components use `standalone: true` and explicit imports
- **Layout Pattern**: Fixed header + sidebar + main content using flexbox (`app.component.html`)
- **Feature Organization**: Components grouped in `src/app/features/` by domain (books, dashboard)
- **Shared Components**: Reusable UI in `src/app/shared/` (header, sidebar, main-content, footer)

### Service Layer
- **Core Services**: Business logic in `src/app/core/` (e.g., `book.service.ts`)
- **RxJS Patterns**: Use `BehaviorSubject` for state management, return `Observable<T>` from service methods
- **Dependency Injection**: Use `inject()` function over constructor injection (see `books.component.ts`)

### PrimeNG Integration
- **Theme Configuration**: Aura theme configured in `app.config.ts` with `providePrimeNG()`
- **Component Imports**: Import PrimeNG modules directly in component imports array
- **Standard Components**: TableModule, ButtonModule, CardModule, BadgeModule, DialogModule
- **Icons**: Use PrimeIcons (`pi pi-*`) for consistent iconography

## Development Workflows

### Component Generation
```bash
ng generate component features/[feature-name] --standalone
ng generate component shared/[component-name] --standalone
```

### Development Server
- Run: `npm start` or `ng serve`
- Default port: `http://localhost:4200`
- Auto-reload enabled

### Testing
- Unit tests: `npm test` (Karma + Jasmine)
- Test files: `*.component.spec.ts` alongside components

## Code Conventions

### TypeScript Patterns
- **Interfaces**: Define in service files (e.g., `Book` interface in `book.service.ts`)
- **Type Safety**: Use strict typing for service methods and component properties
- **Observable Subscriptions**: Handle in `ngOnInit()`, consider unsubscription patterns

### Styling
- **SCSS**: All components use `.scss` files
- **Component Scoping**: Styles are component-scoped by default
- **Layout**: Use flexbox patterns for responsive design

### Routing
- **Route Configuration**: Define in `app.routes.ts` with feature-based routes
- **Navigation**: Sidebar component (`sidebar.component.ts`) contains navigation items with icons and routes
- **Default Route**: Redirects to `/dashboard`

## Key Files to Reference
- `src/app/app.config.ts` - Application configuration and providers
- `src/app/core/book.service.ts` - Service layer patterns and RxJS usage
- `src/app/features/books/books.component.ts` - Complex component with filtering/table patterns
- `src/app/shared/sidebar/sidebar.component.ts` - Navigation and routing patterns
- `src/instruction/books.md` - Feature requirements and UI specifications

## Future Features
The routing configuration shows planned features (commented out): members, loans, reservations, overdue items, settings, and help pages.