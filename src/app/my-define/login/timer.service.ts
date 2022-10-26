import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'//单例服务对象，注册在主模块中，所有组件共用该服务对象
// })
@Injectable()//创建多例的，组件各自引用服务对象，不受影响
export class TimerService {

  constructor() { 
    console.log('构造一个timer计时器');
  }

  startTime = 0;
  endTime = 0;

  start() {
    this.startTime = new Date().getTime();
  }

  end() {
    this.endTime = new Date().getTime();
  }

  countTime(action:string) {
    console.log(action + '操作共耗时：' + (this.endTime-this.startTime))

  }
}
