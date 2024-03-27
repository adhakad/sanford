import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platformId);
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object,) { }

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

}
