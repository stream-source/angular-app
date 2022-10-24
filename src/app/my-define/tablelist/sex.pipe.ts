import { Pipe } from "@angular/core";

@Pipe({
    name: 'sex'
})
export class SexPipe{
    //定义管道中转换固定方法
    // transform(sex:String) {
    //     if(sex=='f'){
    //         return '女';
    //     } else if(sex=='m') {
    //         return '男';
    //     } else {
    //         return '未知';
    //     }

    // }

    transform(sex:String, lang='zh') {
        if (lang == 'zh'){
            if(sex=='f'){
                return '女';
            } else if(sex=='m') {
                return '男';
            } else {
                return '未知';
            }
         } else if (lang =='en') {
            if(sex=='f'){
                return 'female';
            } else if(sex=='m') {
                return 'male';
            } else {
                return 'unknown';
            }
         } else {
            return '未识别语言';
         }

    }
}