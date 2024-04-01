import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FranchiseEnquiryService {
  url = `${environment.API_URL}/v1/franchise-enquiry`;
  constructor(private http:HttpClient) { }

  franchiseEnquiryPagination(studentData:any){
    return this.http.post(`${this.url}/franchise-enquiry-pagination`,studentData);
  }
  addFranchiseEnquiry(studentData:any){
    return this.http.post(`${this.url}`,studentData);
  }
  deleteFranchiseEnquiry(id:String){
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
