import { Component } from '@angular/core';

/**
 * 定义组件：模板+脚本+样式
 */
@Component({
  selector: 'app-buy-count',
  templateUrl: './buy-count.component.html',
  styleUrls: ['./buy-count.component.css']
})
export class BuyCountComponent {

  //定义成员变量
 count = 3;
 imgUrl = '16652797845044.png';

 //定义增加方法
 addCount() {
  this.count ++;
 }

 //定义减少方法
 reduceCount() {
  this.count --;
 }



}
