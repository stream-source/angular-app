import { Component } from "@angular/core";

/**
 * 组件= 模板 + 脚本 + 样式
 * 模板、脚本组件内有且仅允许定义一个；
 * 样式可以存在多个
 * @Component标识其为组件
 */

//装饰器（），用于指定class类的用途
@Component({
    //定义模板，引用同级组件app-twoComponet
    template: '<h2>自定义组件one</h2><app-twoComponet></app-twoComponet>',
    //定义选择器
    selector: 'cOne'
})
//export 定义组件导出，外部可以引用该组件
export class ComponentOne {
    //定义脚本

}