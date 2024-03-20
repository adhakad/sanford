import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platformId);
  schoolInfo: any;
  loader: Boolean = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchool();
  }
  getSchool() {
    this.loader = false;
    this.schoolService.getSchool().subscribe((res: any) => {
      if (res) {
        this.schoolInfo = res;
        setTimeout(() => {
          // this.loader = false;
        }, 1000)
      }
    })
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
