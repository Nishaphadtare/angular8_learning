import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignpipe'
})
export class AssignpipePipe implements PipeTransform {

  transform(val: number): number {
    return val.toString().length;
  }

}
