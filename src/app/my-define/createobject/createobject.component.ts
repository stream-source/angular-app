import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-createobject',
  templateUrl: './createobject.component.html',
  styleUrls: ['./createobject.component.css']
})
export class CreateobjectComponent implements OnInit {

  

  ngOnInit(): void {

  }

  //组件，声明对象依赖，服务使用者
  log: LogService;
  constructor(log : LogService) { 
    this.log = log;
  }

  doAdd(){
    console.log("添加商品...")
    // let username = "admin";
    // let time = new Date().getTime();
    let action = "添加了商品";
    //手动创建对象方式
    // new LogService().doLog(action);
    // console.log(`管理员:${username},时间:${time},动作:${action}`)
    //依赖注入
    this.log.doLog(action);
  }

  doDelete() {
    console.log("删除商品...")
    // let username = "admin2";
    // let time = new Date().getTime();
    let action = "删除了商品";
    // console.log(`管理员:${username},时间:${time},动作:${action}`)
    this.log.doLog(action);
  }
}
