import { Todo } from './../main-todo';
import { MaintodoService } from './../services/maintodo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.scss']
})
export class MainTodoComponent implements OnInit {
  public title:string = '';
  public description:string = '';

  constructor(
    private TodoService: MaintodoService,
  ) { }

  ngOnInit(): void {
  }
  AddData(){
    const mainTodo: Todo ={
      title: this.title,
      description: this.description,
    }
    this.TodoService.AddTodo(mainTodo)
    .subscribe({
      next: data =>{
        console.log(data);
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

}
