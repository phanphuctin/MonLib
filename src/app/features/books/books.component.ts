import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book, BookService } from '../../core/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  private bookService = inject(BookService);

  books: Book[] = [];
  filteredBooks: Book[] = [];
  categories: string[] = ['Fiction', 'Non-fiction', 'Science', 'History'];
  categoryOptions = [
    { label: 'All', value: null },
    ...['Fiction', 'Non-fiction', 'Science', 'History'].map(c => ({ label: c, value: c }))
  ];
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Available', value: 'Available' },
    { label: 'Borrowed', value: 'Borrowed' }
  ];
  selectedCategory: string | null = null;
  selectedStatus: string | null = null;
  globalFilter: string = '';

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.applyFilters();
    });
  }

  onGlobalFilter(event: any) {
    this.globalFilter = event.target.value;
    this.applyFilters();
  }

  onCategoryChange(category: string | null) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onStatusChange(status: string | null) {
    this.selectedStatus = status;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredBooks = this.books.filter(book => {
      const matchesCategory = this.selectedCategory ? book.category === this.selectedCategory : true;
      const matchesStatus = this.selectedStatus ? book.status === this.selectedStatus : true;
      const matchesGlobal = this.globalFilter
        ? [book.title, book.author, book.isbn, book.category, book.status].some(field =>
            field.toLowerCase().includes(this.globalFilter.toLowerCase())
          )
        : true;
      return matchesCategory && matchesStatus && matchesGlobal;
    });
  }

  getBadgeClass(status: string) {
    return {
      'p-badge-success': status === 'Available',
      'p-badge-warning': status === 'Borrowed'
    };
  }

  onEdit(book: Book) {
    // TODO: Open edit dialog
    alert('Edit: ' + book.title);
  }

  onDelete(book: Book) {
    // TODO: Open delete confirmation
    alert('Delete: ' + book.title);
  }
}
