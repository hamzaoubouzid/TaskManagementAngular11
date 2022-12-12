import { Injectable } from '@angular/core';
import { Students } from './students.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly StudentsApiUrl = "https://localhost:7188/api/Students/";

  constructor(private http:HttpClient) { }

  GetAllStudents(){
    return this.http.get<Students[]>(this.StudentsApiUrl + 'GetAllStudents')
  }

  AddStudents(data:Students){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Students>(this.StudentsApiUrl + 'AddStudients', data, httpOptions);
  }

  UpDateStudients(data:Students){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.StudentsApiUrl +'UpDateStudients',data,httpOptions)
  }

  DeleteStudients(data:any){
    return this.http.delete(this.StudentsApiUrl +'DeleteStudients/'+data)
  }
  
}
