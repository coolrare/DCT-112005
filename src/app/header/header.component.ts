import { CalculatorService } from './../calculator.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPipe } from '../demo.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DemoPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  calculatorService = inject(CalculatorService);

  title = 'The Will Will Web Demo';
  url = 'http://blog.miniasp.com/';
  data = { name: 'Mike' };
  isHighlight = false;
  h3Color = 'red';
  displayHeader = true;

  toggleHighlight() {
    this.displayHeader = !this.displayHeader;
    this.isHighlight = !this.isHighlight;
    this.h3Color = this.h3Color === 'red' ? 'black' : 'red';
  }
}
