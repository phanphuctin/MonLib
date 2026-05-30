# 📚 Prompt: Create Books Management UI with Angular + PrimeNG

Build an Angular component for managing a list of books in a library system using **PrimeNG**. The UI should support listing, searching, filtering, and editing book information.

---

## 1. 📘 Book List Display

- Use **PrimeNG DataTable** to show a paginated, sortable, and filterable list of books.
- Each row should include the following columns:
  - **Title**
  - **Author**
  - **ISBN**
  - **Category**
  - **Status** (Available / Borrowed) — display as a colored **badge**
- Add action buttons for each row:
  - ✏️ **Edit** — opens a dialog
  - 🗑️ **Delete** — opens a confirmation dialog

---

## 2. ➕ Add / Edit Book Dialog

- Use **PrimeNG Dialog** with **Reactive Forms** to handle book creation and updates.
- Form fields:
  - `title`: required, text input
  - `author`: required, text input
  - `isbn`: required, 13-digit numeric input
  - `category`: dropdown (Fiction, Non-fiction, Science, History, etc.)
  - `status`: dropdown (Available / Borrowed)
- Add validation messages to show when inputs are invalid.

---

## 3. 🔍 Filtering & Search

- Add **global search** (top-right of the DataTable).
- Add a **dropdown filter by category**.
- Add a **status toggle filter** (Available / Borrowed).

---

## 4. 🧹 Empty State & Loading State

- Show a friendly empty state when no books are found.
- Show a **PrimeNG ProgressSpinner** when loading data.

---

## 5. 🛠️ Book Service (Mock or API-ready)

Create a `BookService` with the following methods:
- `getBooks()`: fetch all books
- `addBook(book)`: create a new book
- `updateBook(book)`: update existing book
- `deleteBook(bookId)`: remove a book

Use `HttpClient` for actual APIs or mock with `Observable<Book[]>`.

---

## 6. 💬 UI Feedback

Use **PrimeNG Toasts** to notify the user:
- ✅ Book created successfully
- ✏️ Book updated
- 🗑️ Book deleted
- ❌ Errors (with clear message)
---

---

## ✅ Additional Notes

- Use `ngOnInit()` to fetch and render book data.
- Use `FormBuilder` to create the reactive form group.
- For mock data, use `uuid` or incrementing IDs.
- Style with **PrimeNG Icons**, **Card**, and **Spacing Utilities**.

---