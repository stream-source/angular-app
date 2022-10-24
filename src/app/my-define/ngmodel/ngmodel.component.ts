import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  username="张三";
  doUsernameChange() {
    console.log(this.username)
  }


  //密码
  password = "";
  message = "密码长度在6~12位之间"
  doPasswordChange() {
    console.log(this.password)
    if (this.password.length < 6) {
      this.message = "密码太短了";
    } else if (this.password.length >12) {
      this.message = "密码太长了";
    } else {
      this.message = "密码合法";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
