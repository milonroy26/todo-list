import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Todo } from 'src/app/main-todo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MaintodoService {

  constructor(
    private http: HttpClient,
  ) { }

  AddTodo(todo: Todo): Observable<any>{
    return this.http.post<any>('https://jsengine.herokuapp.com/todo/create', todo)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    )
  }
  
  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }
}
