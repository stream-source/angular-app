import { Component, OnInit } from '@angular/core';
import { TimerService } from '../login/timer.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  providers:[TimerService]
})
export class RegistryComponent implements OnInit {

  //使用服务对象
  timer: TimerService;
  constructor(timer: TimerService) { 
    this.timer = timer;
  }

  registry() {
    this.timer.start();
    console.log('开始注册用户~')
    console.log('注册用户结束~')
    this.timer.end();
    this.timer.countTime('注册用户');
  }

  ngOnInit(): void {
  }

}
