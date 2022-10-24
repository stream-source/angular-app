import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  //样式对象
  styleObj = {
    backgroundColor: '#383',
    color: '#fff',
    borderColor: '#252'


  };

 

  clickButton() {
    this.styleObj.backgroundColor = '#833'
    this.styleObj.borderColor = '#522'
  }


   //使用css样式加载
   styleClass = {
    btn: true,
    'btn-danger': false,
    'btn-success': true
  }

  clickLoad() {
    this.styleClass['btn-danger']= true;
    this.styleClass['btn-success']=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
