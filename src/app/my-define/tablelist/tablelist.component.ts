import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // empList = [];
  empList = [
    {eid:101,name:"liliang", age:20, salary:12050.90047, birthday:'1994-04-23',zzmm:10,sex:'f'},
    {eid:101,name:"zhang", age:20, salary:1343534.68952, birthday:'1994-04-23',zzmm:20,sex:'m'},
    {eid:101,name:"wu", age:20, salary:10901.43513, birthday:'1994-04-23',zzmm: 0,sex:'m'},
    {eid:101,name:"lisi", age:20, salary:10023, birthday:'1994-04-23',zzmm:30,sex:''}
  ]

  //删除事件
  doDelete(i: number) {
    this.empList.splice(i, 1)
  }
}
