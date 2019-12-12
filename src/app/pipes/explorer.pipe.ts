import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explorer'
})
export class ExplorerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
