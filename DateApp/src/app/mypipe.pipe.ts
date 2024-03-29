import { Pipe, PipeTransform } from '@angular/core';
import { getLocaleWeekEndRange } from '@angular/common';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any,gender:string): any {
   
    if( gender.toLowerCase() == 'male')
    return "Mr " + value;

    else
    {
        return "Mrs " +value;
    }
  }

}
