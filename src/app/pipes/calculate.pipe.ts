import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'calculate' })
export class CalculatePipe implements PipeTransform {
  transform(text: string): any {
    let splitted = text.match(/[^\d()]+|[\d.]+/g) || [];
    let sum = +splitted[0];
    for(let i = 1; i < splitted.length; i+=2) {
        if(splitted[i].length == 1) {
            switch(splitted[i]) {
                case '-': {
                    sum -= Number(splitted[i+1])
                    break;
                } case '+': {
                    sum += Number(splitted[i+1])
                    break;
                }
            }
        } else{
            sum = NaN;
        }
    }
    return isNaN(Number(sum)) ? text : sum;
  }
}

