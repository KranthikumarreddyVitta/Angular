import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'get'
})
export class GetPipe implements PipeTransform {
/**
 * Get properties from object. 
 * @param value 
 * @param obj 
 * @returns 
 */
  transform(value: string, obj: any): unknown {
    return value.replace(/\[/g,'.').replace(/\]/g,'').split(".").reduce((obj,next)=> obj ? obj[next] : '',obj)
  }
}
