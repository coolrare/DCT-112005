import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'The Will Will Web Demo';
  url = 'http://blog.miniasp.com/';
  data = { name: 'Mike' };
  isHighlight = false;
  h3Color = 'red';

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;
    this.h3Color = this.h3Color === 'red' ? 'black' : 'red';
  }
}
