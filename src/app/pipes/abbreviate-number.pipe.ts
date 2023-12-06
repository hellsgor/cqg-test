import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber',
})
export class AbbreviateNumberPipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === 0) return value.toString();
    if (!value || isNaN(value)) return '';

    if (value < 1000) {
      return value.toString();
    } else if (value < 1000000) {
      return Math.floor(value / 1000) + 'K';
    } else {
      return Math.floor(value / 1000000) + 'M';
    }
  }
}
