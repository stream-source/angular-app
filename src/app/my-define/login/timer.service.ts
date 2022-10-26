import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
