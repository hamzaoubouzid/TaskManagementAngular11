import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { TaskslistComponent } from './tasks-ex-aand-tasks/taskslist/taskslist.component';
import { TeacherslistComponent } from './teachers/teacherslist/teacherslist.component';

const routes: Routes = [
  { path: "Students", component: StudentslistComponent,},
  { path: "Teacher", component: TeacherslistComponent,},
  { path: "Task", component: TaskslistComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
