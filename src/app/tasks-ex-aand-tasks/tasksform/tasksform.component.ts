import { Component,ElementRef,Input,OnInit,ViewChild  } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import { Guid } from 'guid-ts';

@Component({
  selector: 'app-tasksform',
  templateUrl: './tasksform.component.html',
  styleUrls: ['./tasksform.component.css']
})
export class TasksformComponent implements OnInit {

  constructor(private service:TasksService ) { }
  @Input() Tasks:any
  actionType: string;
  tableName: string;
  namection:string;
  tablenamestr:string

  actionnamestring:string;

  ngOnInit(): void {
  }
  


	onSelected(value:string): void {

     
     if(value == 'Delete All Data'){
      this.namection= "Purge des données de la table";
      document.getElementById("name")?.setAttribute('value', this.namection);
     }
    else{
      this.namection= "Initialiser des données de la table";
      document.getElementById("name")?.setAttribute('value', this.namection);
    }
	}
  onSelectedTableName(value:string){
     if(value == 'Students'){
      this.tablenamestr =" Students";
      document.getElementById("name")?.setAttribute('value', this.namection + this.tablenamestr);
     }
    else {
      this.tablenamestr =" Teachers";
      document.getElementById("name")?.setAttribute('value', this.namection + this.tablenamestr);
    }
  }

  onClickSubmit(data:any) {

    this.Tasks = {
      id:Guid.newGuid().toString(),
      name:this.namection + this.tablenamestr,
      tableName:this.tableName,
      actionType :this.actionType
    }
    this.service.AddTasks(this.Tasks).subscribe(res => {
      if(res){
           var ModelClose = document.getElementById("closemodel");
           ModelClose?.click();
           alert("Bien Ajouter");
           location.reload();
      }
      else{
        alert("n'existe pas ");
      }
    });
 }
}
