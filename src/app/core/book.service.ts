import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  status: 'Available' | 'Borrowed';
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '9780743273565',
      category: 'Fiction',
      status: 'Available',
    },
    {
      id: '2',
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      isbn: '9780553380163',
      category: 'Science',
      status: 'Borrowed',
    },
    {
      id: '3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      isbn: '9780062316097',
      category: 'History',
      status: 'Available',
    },
  ];

  private booksSubject = new BehaviorSubject<Book[]>([...this.books]);
  private nextId = 4;

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    const newBook: Book = { ...book, id: String(this.nextId++) };
    this.books.push(newBook);
    this.booksSubject.next([...this.books]);
    return of(newBook);
  }

  updateBook(updatedBook: Book): Observable<Book> {
    const idx = this.books.findIndex(b => b.id === updatedBook.id);
    if (idx > -1) {
      this.books[idx] = { ...updatedBook };
      this.booksSubject.next([...this.books]);
      return of(updatedBook);
    }
    throw new Error('Book not found');
  }

  deleteBook(bookId: string): Observable<boolean> {
    const idx = this.books.findIndex(b => b.id === bookId);
    if (idx > -1) {
      this.books.splice(idx, 1);
      this.booksSubject.next([...this.books]);
      return of(true);
    }
    return of(false);
  }
} 