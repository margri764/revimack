import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currentMonthYear'
  })
  export class CurrentMonthYearPipe implements PipeTransform {
    transform(value: any): string {
      const currentDate = new Date();
      const month = currentDate.toLocaleString('default', { month: 'long' });
      const year = currentDate.getFullYear();
      return `${month} ${year}`;
    }
  }
  