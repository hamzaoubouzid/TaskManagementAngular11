import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Teachers } from './teachers.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  readonly TeachersApiUrl = "https://localhost:7188/api/Teachers/";

  constructor(private http:HttpClient) { }

  GetAllTeachers(){
    return this.http.get<Teachers[]>(this.TeachersApiUrl + 'GetAllTeachers')
  }

  AddTeachers(data:Teachers){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Teachers>(this.TeachersApiUrl + 'AddTeachers', data, httpOptions);
  }

  UpDateTeachers(data:Teachers){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.TeachersApiUrl +'UpdateTeachers',data,httpOptions)
  }

  DeleteTeachers(data:any){
    return this.http.delete(this.TeachersApiUrl +'DeleteTeachers/'+data)
  }
}
