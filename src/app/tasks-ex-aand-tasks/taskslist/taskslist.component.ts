import { Component, OnInit } from '@angular/core';
import { Tasks, TasksExcution } from 'src/app/shared/tasks-excution.model';
import { TasksService } from 'src/app/shared/tasks.service';
import { TeachersService } from 'src/app/shared/teachers.service';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {

  constructor(private service:TasksService) { }
  ModelTitle:string='';
  ActiveAddEditComp:boolean= false;
  Tasks:Tasks;
  TasksList: Tasks[];
  TaskExction:TasksExcution;
  TaskExctions:TasksExcution[];
  statustask:string;

  ngOnInit(): void {
 
   this.service.GetAllTask().subscribe((data) =>  { 
    this.TasksList = data
   });

   this.service.GetAllTaskExecution().subscribe((data) =>  { 
    this.TaskExctions = data;
   });
  }



  AddTask(){
    this.ModelTitle = "Add Tasks";
    this.ActiveAddEditComp =  true;
    this.Tasks = {
      id :"",
      name:'',
      actionType :"",
      tableName:""
    }
  }
  
  TaskExcution(item:any) {
    console.log(item);
     this.service.ExcuteTask(item).subscribe(res => {
         alert("Task Excute");
         window.location.reload();
     })
 }

}
