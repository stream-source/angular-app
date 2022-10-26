import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //使用服务对象
  timer: TimerService;
  constructor(timer: TimerService) { 
    this.timer = timer;
  }

  // registry() {
  //   this.timer.start();
  //   console.log('开始注册用户~')
  //   console.log('注册用户结束~')
  //   this.timer.end();
  //   this.timer.countTime('注册用户');
  // }

  login() {
    this.timer.start();
    console.log('开始登录用户~')
    console.log('登录用户结束~')
    this.timer.end();
    this.timer.countTime('登录用户');
  }
  ngOnInit(): void {
  }

}
