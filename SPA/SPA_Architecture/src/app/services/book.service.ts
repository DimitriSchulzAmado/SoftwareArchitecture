import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './../models/i-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private readonly URI_BOOKS = 'assets/exemplo-de-livros.json';

  constructor( private http: HttpClient ) { } // HttpClient injection in the constructor

  public findAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>( this.URI_BOOKS );
  }
}
