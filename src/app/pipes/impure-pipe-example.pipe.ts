import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipeExample',
  pure: false   // ❌ Marked as IMPURE
})
export class ImpurePipeExamplePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
