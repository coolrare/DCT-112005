import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  httpClient = inject(HttpClient);

  temp = 'abc';

  constructor() {}

  getArticles() {
    return this.httpClient
      .get<Article[]>('http://localhost:4200/assets/articles.json')
  }

  add(a: number, b: number) {
    return a + b;
  }
}
