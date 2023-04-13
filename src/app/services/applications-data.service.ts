import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApplicationsDataService {
  url="http://localhost:9090/apps"
  constructor(private http:HttpClient) { }
  getApplications()
  {
    return this.http.get(this.url);
  }
  saveApplication(data: any) {
    return this.http.post(this.url, data);
  }
  deleteApplication(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
