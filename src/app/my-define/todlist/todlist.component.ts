import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todlist',
  templateUrl: './todlist.component.html',
  styleUrls: ['./todlist.component.css']
})
export class TodlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoList = ['开会','评审','开发'];
  // todoList = [];

  deleteTodo(index: number){
    //指定下标处删除元素
    this.todoList.splice(index, 1)
  }
  inputTodo ="";
  addTodo(){
    //添加元素
    this.todoList.push(this.inputTodo)
    this.inputTodo =""
  }

}
