import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputText') inputText?: ElementRef;
  // httpClient = inject(HttpClient);
  calculatorService = inject(CalculatorService);

  title = environment.api;
  counter = 0;
  keyword = 'test';

  articles: Article[] = [];

  ngOnInit(): void {
    // this.httpClient
    //   .get<Article[]>('http://localhost:4200/assets/articles.json')
    this.calculatorService.getArticles()
      .subscribe((data) => {
        this.articles = data;
        console.log(data);
      });
  }

  search(event: MouseEvent) {
    this.calculatorService.temp = this.keyword;
    console.log(this.calculatorService.add(100, 200));
    console.log(this.inputText?.nativeElement as HTMLInputElement);
    console.log(event.clientY);
    console.log('search');
    this.counter++;
  }

  inputKeyup(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === 'Enter') {
      console.log((event.target as HTMLInputElement).value);
    }
  }

  searchByEnter(event: Event) {
    const newEvent = event as KeyboardEvent;
    console.log('search by enter', newEvent.altKey);
  }
}
