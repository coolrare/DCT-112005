import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})
export class DemoPipe implements PipeTransform {

  transform(value: string): string {
    return value + '!!';
  }

}
