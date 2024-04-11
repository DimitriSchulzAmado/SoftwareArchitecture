import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/models/i-book';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit{

  books : IBook[] = [];

  constructor( private service: BookService ) { } // BookService injection in the constructor

  // Initialize the books array
  ngOnInit(): void {
    this.service.findAll().subscribe( {
      next: (data) => this.books = data,
      error: (err) => console.log(err)
    });
  }
}
