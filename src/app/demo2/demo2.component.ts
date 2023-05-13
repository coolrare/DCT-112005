import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      demo2 works!
    </p>
  `,
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

}
