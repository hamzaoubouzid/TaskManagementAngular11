import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentsComponent } from './students/students.component';
import { StudentsformComponent } from './students/studentsform/studentsform.component';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { StudentsService } from './shared/students.service';

import { TeachersComponent } from './teachers/teachers.component';
import { TeacherslistComponent } from './teachers/teacherslist/teacherslist.component';
import { TeachersService } from './shared/teachers.service';
import { TeachersformComponent } from './teachers/teachersform/teachersform.component';

import { TasksExAandTasksComponent } from './tasks-ex-aand-tasks/tasks-ex-aand-tasks.component';
import { TaskslistComponent } from './tasks-ex-aand-tasks/taskslist/taskslist.component';
import { TasksService } from './shared/tasks.service';
import { TasksformComponent } from './tasks-ex-aand-tasks/tasksform/tasksform.component';

@NgModule({
  declarations: [
    AppComponent,
    
    StudentsComponent,
    StudentsformComponent,
    StudentslistComponent,

    TeachersComponent,
    TeacherslistComponent,
    TeachersformComponent,

    TasksExAandTasksComponent,
    TaskslistComponent,
    TasksformComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent,
             TeachersService,
             TasksService]
})
export class AppModule { }
