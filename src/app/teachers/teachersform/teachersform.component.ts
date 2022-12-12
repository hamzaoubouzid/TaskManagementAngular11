import { Component,Input, OnInit } from '@angular/core';
import { Teachers } from 'src/app/shared/teachers.model';
import { TeachersService } from 'src/app/shared/teachers.service';
import { Guid } from 'guid-ts';



@Component({
  selector: 'app-teachersform',
  templateUrl: './teachersform.component.html',
  styleUrls: ['./teachersform.component.css']
})
export class TeachersformComponent implements OnInit {

  constructor(private service:TeachersService ) { }

  @Input() Teacher:any
  Teachers :Teachers;
  ngOnInit(): void {
  }

  OnClickUpDateTeacher(data:any){
    this.service.UpDateTeachers(data).subscribe(res => {
      if(res){
           var ModelClose = document.getElementById("closemodel");
           ModelClose?.click();
           alert("Bien Modifier");
           location.reload();
      }
      else{
        alert("Error ");
      }
    });
  }

  onClickSubmit(data:any) {

    this.Teachers = {
      id:Guid.newGuid().toString(),
      name:data.name,
      birthDate:data.birthDate,
      mainSubjectTeaching :data.mainSubjectTeaching
    }
    console.log(this.Teachers);

    this.service.AddTeachers(this.Teachers).subscribe(res => {
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
