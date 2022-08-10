import { HttpClientModule } from '@angular/common/http';
import { MaintodoService } from './services/maintodo.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainTodoComponent } from './main-todo/main-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MaintodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
