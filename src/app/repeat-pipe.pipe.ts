import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatPipe'
})
export class RepeatPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(word: string, frequency: number): string {
    let cnt = 1;
    let strResult= word;
    while (cnt < frequency) {
        strResult = strResult + ' ' + word;
        cnt = cnt + 1;
    }
          return strResult;
    }

}
