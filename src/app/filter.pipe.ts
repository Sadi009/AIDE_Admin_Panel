import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(names: any, search: any): any {
    if (!names || !search) {
      return names;
    }
    return names.filter(names =>
      names.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
