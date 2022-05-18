import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuote } from './mock-quote';

const baseUrl: string = 'https://localhost:44325/api/quotes/';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {


  constructor(private http: HttpClient) { }

  listQuotes() {
    return this.http.get<IQuote>(baseUrl + 'getQuotes');
  }

  getQuotesByID(id: number) {
    return this.http.get<IQuote>(baseUrl + 'getQuotesByID' + '/' + id);
  }

  createQuotes(quoteObj: any) {
    return this.http.post(baseUrl + 'postquote', quoteObj);
  }
}
