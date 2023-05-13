import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.api;
  counter = 0;

  search(event: MouseEvent) {

    console.log(event.clientY);
    console.log('search');
    this.counter++;
  }

  inputKeyup(event: KeyboardEvent) {
    console.log(event.key);
    if(event.key === 'Enter') {
      console.log((event.target as HTMLInputElement).value);
    }
  }

  searchByEnter(event: Event) {
    const newEvent = event as KeyboardEvent;
    console.log('search by enter', newEvent.altKey);
  }
}
