import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true, // key for standalone mode
})
export class CapitalizePipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;

  // transform(value: string): string {
  //   if (!value) return '';
  //   return value.charAt(0).toUpperCase() + value.slice(1);
  // }
  transform(value: string): string {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
