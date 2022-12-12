import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/shared/students.model';
import { StudentsService } from 'src/app/shared/students.service';
import { Guid } from 'guid-ts';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
 
  students: Students[];
  student :Students;
  ModelTitle:string='';
  ActiveAddEditComp:boolean = false;
  constructor(private service:StudentsService) { }
  

  ngOnInit(): void {
      this.service.GetAllStudents().subscribe((data) =>  { 
        this.students = data
     });
  }

  DeleteStudients(item:any) {
     console.log(item.id);
      this.service.DeleteStudients(item.id).subscribe(res => {
          alert("Bien Suppremier");
          window.location.reload();
      })
  }

  Addstudents(){
    this.ModelTitle = "Add Student";
    this.ActiveAddEditComp =  true;
    this.student = {
      id :"",
      name : "",
      birthDate :new Date(),
      yearOfStudy :0
    }
  }

  UpDatetudents(item:any)
  {
    this.ModelTitle = "Edit Student";
    this.ActiveAddEditComp =  true;
    this.student = item;
  }
}
