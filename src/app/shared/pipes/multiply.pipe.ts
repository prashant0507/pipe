import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let argsMultiply = 1;
    argsMultiply = args.reduce((total, args: any) => {
      return total * args;
    })
    return value * argsMultiply;
  }

}
