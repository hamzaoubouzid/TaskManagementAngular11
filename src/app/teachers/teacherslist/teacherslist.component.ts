import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/shared/teachers.model';
import { TeachersService } from 'src/app/shared/teachers.service';
@Component({
  selector: 'app-teacherslist',
  templateUrl: './teacherslist.component.html',
  styleUrls: ['./teacherslist.component.css']
})
export class TeacherslistComponent implements OnInit {

  constructor(private service:TeachersService) { }
  ModelTitle:string='';
  ActiveAddEditComp:boolean= false;
  Teacher:Teachers;
  Teachers: Teachers[];

  ngOnInit(): void {
    this.service.GetAllTeachers().subscribe((data) =>  { 
      this.Teachers = data
   });
  }

  DeleteTeachers(item:any) {
    console.log(item.id);
     this.service.DeleteTeachers(item.id).subscribe(res => {
         alert("Bien Suppremier");
         window.location.reload();
     })
 }

 AddTeacher(){
   this.ModelTitle = "Add Teachers";
   this.ActiveAddEditComp =  true;

   this.Teacher = {
     id :"",
     name : "",
     birthDate :new Date(),
     mainSubjectTeaching:''
   }
   
 }

 UpDatetTeacher(item:any)
 {
   this.ModelTitle = "Edit Teachers";
   this.ActiveAddEditComp =  true;
   this.Teacher = item;
 }
}
