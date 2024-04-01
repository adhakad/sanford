import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';
import { FranchiseEnquiryService } from 'src/app/services/franchise-enquiry.service';


@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platformId);
  franchiseForm: FormGroup;
  successMsg: String = '';
  errorMsg: String = '';
  errorCheck: Boolean = false;
  loader: Boolean = true;
  indianStates: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private fb: FormBuilder, private franchiseEnquiryService: FranchiseEnquiryService) {
    this.franchiseForm = this.fb.group({
      _id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      investment: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],

    })
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }

  ngAfterViewInit() {
    if (this.isBrowser) {

      setTimeout(() => {

        jQuery('.award-carousel').owlCarousel({
          items: 2,
          loop: true,
          dots: false,
          nav: true,
          autoplay: true,

          autoplayHoverPause: true,
          responsiveClass: true,

          smartSpeed: 10000,
          singleItem: false,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          pagination: true,
          responsive: {
            600: {
              items: 6,
            },
            1500: {
              items: 6,
            },
          }
        });
        setTimeout(() => {
          this.loader = false;
        }, 500)
      }, 3000);
    }
  }


  franchiseAddUpdate() {
    if (this.franchiseForm.valid) {
      this.franchiseEnquiryService.addFranchiseEnquiry(this.franchiseForm.value).subscribe((res: any) => {
        if (res) {
          this.errorCheck = false;
          this.errorMsg = '';
          if (this.errorCheck == false && this.errorMsg == '') {
            this.franchiseForm.reset();
            this.successMsg = res.successMsg;
          }
        }
      }, (err: any) => {
        this.successMsg = '';
        if (this.successMsg == '') {
          this.errorCheck = true;
          this.errorMsg = err.error;
        }
      })
    }
  }

}
