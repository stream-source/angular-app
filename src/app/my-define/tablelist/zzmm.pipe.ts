import { Pipe, PipeTransform } from '@angular/core';

/**
 * 政治面貌管道
 */
@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe implements PipeTransform {

  transform(zzmm : number) {
    if(zzmm ==10) {
      return '党员';
    } else if (zzmm == 20){
      return '团员'
    } else if (zzmm == 30) {
      return '群众'
    } else {
      return ''
    }
  }

}
