import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FranchiseEnquiryService } from 'src/app/services/franchise-enquiry.service';

@Component({
  selector: 'app-franchise-enquiry',
  templateUrl: './franchise-enquiry.component.html',
  styleUrls: ['./franchise-enquiry.component.css']
})
export class FranchiseEnquiryComponent implements OnInit {
  public baseUrl = environment.API_URL;
  
  showModal:boolean = false;
  deleteById: String = '';
  successMsg: String = '';
  errorMsg: String = '';
  errorCheck: Boolean = false;
  franchiseEnquiryInfo: any = [];
  recordLimit: number = 5;
  filters: any = {};
  number: number = 0;
  paginationValues: Subject<any> = new Subject();
  loader:Boolean=true;
  constructor(private fb: FormBuilder, private franchiseEnquiryService: FranchiseEnquiryService) { }

  ngOnInit(): void {
    let load:any = this.getFranchiseEnquiry({ page: 1 });
    if(load){
      setTimeout(()=>{
        this.loader = false;
      },1000)
    }
  }

  getFranchiseEnquiry($event: any) {
    return new Promise((resolve, reject) => {
      let params: any = {
        filters: {},
        page: $event.page,
        limit: $event.limit ? $event.limit : this.recordLimit
      };
      this.recordLimit = params.limit;
      if (this.filters.searchText) {
        params["filters"]["searchText"] = this.filters.searchText.trim();
      }

      this.franchiseEnquiryService.franchiseEnquiryPagination(params).subscribe((res: any) => {
        if (res) {
          this.franchiseEnquiryInfo = res.franchiseEnquiryList;
          this.number = params.page;
          this.paginationValues.next({ type: 'page-init', page: params.page, totalTableRecords: res.countFranchiseEnquiry });
          return resolve(true);
        }
      });
    });
  }
  closeModal() {
    this.showModal = false;
    this.errorMsg = '';
  }
  deleteFranchiseEnquiryModel(id: String) {
    this.showModal = true;
    this.deleteById = id;
  }

  successDone() {
    setTimeout(() => {
      this.closeModal();
      this.successMsg = '';
      this.getFranchiseEnquiry({ page: 1 });
    }, 1000)
  }

  franchiseEnquiryDelete(id: String) {
    this.franchiseEnquiryService.deleteFranchiseEnquiry(id).subscribe((res: any) => {
      if (res) {
        this.successDone();
        this.successMsg = res;
        this.deleteById = '';
      }
    })
  }

}
