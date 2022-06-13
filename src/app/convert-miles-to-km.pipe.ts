import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKm',
})
export class ConvertMilesToKmPipe implements PipeTransform {
  transform(value: number, targetedUnits: string): unknown {
    console.log(targetedUnits);
    switch (targetedUnits) {
      case 'km':
        return value * 1.60934;

      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('unsupported unit');
    }
  }
}
