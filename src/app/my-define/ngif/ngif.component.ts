import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  isPay = true;

  age = 2;

  constructor() { }

  ngOnInit(): void {
  }

  hasMore = true;

  //加载更多
  loadMore() {
    this.hasMore = false;
  }

}
