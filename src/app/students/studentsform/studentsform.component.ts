import { Component, Input, OnInit } from '@angular/core';
import { Students } from 'src/app/shared/students.model';
import { StudentsService } from 'src/app/shared/students.service';
import { Guid } from 'guid-ts';

@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.css']
})
export class StudentsformComponent implements OnInit {

  constructor(public service:StudentsService) { }

  
  @Input() student:any
  students :Students;
  ngOnInit(): void {
     
  }


  onClickSubmit(data:any) {
    this.students = {
      id:Guid.newGuid().toString(),
      name:data.name,
      birthDate:data.birthDate,
      yearOfStudy :data.yearOfStudy
    }

    this.service.AddStudents(this.students).subscribe(res => {
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


 OnClickUpDateStudent(data:any){
  this.service.UpDateStudients(data).subscribe(res => {
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
}

 
