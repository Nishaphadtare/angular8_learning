import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assfilterpipe'
})
export class AssfilterpipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if(gender === "Female")
    {
      return "Miss." + name;
    }
    else if(gender === "Male")
    {
      return "Mr." + name;
    }
    else
    return name;
  }

}
