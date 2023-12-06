import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluralize' })
export class PluralizePipe implements PipeTransform {
  public transform(
    value: number | null | undefined,
    words: [string, string, string],
    prependNum: boolean = false
  ): string {
    if (value == null) {
      return '';
    }
    return this.pluralize(value, words, prependNum);
  }

  private pluralize(
    value: number,
    endings: string[],
    prependNum: boolean = false
  ): string {
    let sEnding: string;
    let i: number;

    const num: number = value % 100;
    if (num >= 11 && num <= 19) {
      sEnding = endings[2];
    } else {
      i = num % 10;
      switch (i) {
        case 1:
          sEnding = endings[0];
          break;
        case 2:
        case 3:
        case 4:
          sEnding = endings[1];
          break;
        default:
          sEnding = endings[2];
      }
    }
    return prependNum ? `${value} ${sEnding}` : sEnding;
  }
}
