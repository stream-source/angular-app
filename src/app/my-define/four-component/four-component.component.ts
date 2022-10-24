import { Component } from '@angular/core';

@Component({
  selector: 'app-four-component',
  templateUrl: './four-component.component.html',
  styleUrls: ['./four-component.component.css']
})
export class FourComponentComponent {

  //类中定义变量，model模型数据
  username = '张三';
  age = 25;
  title = '属性绑定';
  

}
