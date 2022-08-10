import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoValue:string = '';
  list:Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  
  }

  addItem(){
    if(this.todoValue !== ''){
      const newItem: Todo ={
        id: Date.now(),
        value: this.todoValue,
        isDone:false
      }
      this.list.push(newItem)
    }
    this.todoValue = '';
  }
  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }

}
