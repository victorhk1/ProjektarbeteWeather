import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAdd'
})
export class DateAddPipe implements PipeTransform {


  transform(value: string | Date): string {
    // Sets string date
    let oldDate = new Date(value);

    // add one extra hour to the existing date
    oldDate.setHours(oldDate.getHours() + 1); 
    
    // Sets and takes in the format, takes another argument and makes use of a formats to shape the "convertation". Makes the time go 1 hour ahead
    let onlyDate = (oldDate.getFullYear()+'-'+ ('0' + (oldDate.getMonth() + 1)).slice(-2) + '-' + ('0' + oldDate.getDate()).slice(-2));
    // formats the time an hour ahead
    let onlyTime =  ('0' + oldDate.getHours()).slice(-2) + ":" + ('0' + oldDate.getMinutes()).slice(-2) + ":" + ('0' + oldDate.getSeconds()).slice(-2);
    // returns the data + the time
    return onlyDate + ' & ' + onlyTime
  }

  


}