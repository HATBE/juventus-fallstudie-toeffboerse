import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swissNumberFormat',
  standalone: true,
})
export class SwissNumberFormatPipe implements PipeTransform {
  transform(
    value: number | string,
    showDecimals: boolean = true,
    useDotDash: boolean = false
  ): string {
    if (value == null || isNaN(Number(value))) {
      return '';
    }

    const num = Number(value);
    const isWholeNumber = Number.isInteger(num);

    const fractionDigits = showDecimals ? 2 : 0;
    const fixed = num.toFixed(fractionDigits);
    const [intPart, decPart] = fixed.split('.');

    const swissInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    if (!showDecimals) {
      if (useDotDash && isWholeNumber) {
        return `${swissInt}.–`;
      } else {
        return swissInt;
      }
    }

    return `${swissInt},${decPart}`;
  }
}
