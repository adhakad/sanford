
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare var jQuery: any;
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import { Banner } from 'src/app/modal/banner.model';
// import { Teacher } from 'src/app/modal/teacher.model';
// import { Ads } from 'src/app/modal/ads.model';
// import { Topper } from 'src/app/modal/topper.model';
// import { Testimonial } from 'src/app/modal/testimonial.model';
import { environment } from 'src/environments/environment';
import { BannerService } from 'src/app/services/banner.service';
import { AdsService } from 'src/app/services/ads.service';
import { TopperService } from 'src/app/services/topper.service';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { StudentAuthService } from 'src/app/services/auth/student-auth.service';
import { PrintPdfService } from 'src/app/services/print-pdf/print-pdf.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platformId);
  public baseUrl = environment.API_URL;
  bannerInfo: any[] = [];
  teacherInfo: any[] = [];
  adsInfo: any[] = [];
  topperInfo: any[] = [];
  testimonialInfo: any[] = [];
  cls: number = 0;
  loggedInStudentInfo: any;
  no: number = 0;
  loadTitle = false;
  loader: Boolean = true;
  schoolInfo: any;
  showModal: Boolean = false;

  youtubeVideoUrls: string[] = [
    "https://www.youtube.com/watch?v=FK0vHW42v_0",
    "https://www.youtube.com/watch?v=0SdcTnZAMEU",
    "https://www.youtube.com/watch?v=jnXSGbVTnUg",
    "https://www.youtube.com/watch?v=w1L5B8bHqP0",
    "https://www.youtube.com/watch?v=7K5P17QQvaE",
    "https://www.youtube.com/watch?v=_c5khMsUNto",
    "https://www.youtube.com/watch?v=i31E6h_2JIE",
    "https://www.youtube.com/watch?v=bdZEmVMAzoI",
    "https://www.youtube.com/watch?v=l3eAJM1hjMQ",
    // Add more video URLs as needed
  ];
  thumbnailUrls: SafeUrl[] = [];
  youtubeVideoSafeUrls: SafeResourceUrl[] = [];



  constructor(@Inject(PLATFORM_ID) private platformId: Object, private sanitizer: DomSanitizer, private schoolService: SchoolService, private printPdfService: PrintPdfService, private bannerService: BannerService, private topperService: TopperService, private testimonialService: TestimonialService, private adsService: AdsService, private studentAuthService: StudentAuthService) {
    this.youtubeVideoUrls.forEach(url => {
      const videoId = this.getVideoIdFromUrl(url);
      const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
      const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

      // Sanitize URLs
      this.youtubeVideoSafeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl));
      this.thumbnailUrls.push(this.sanitizer.bypassSecurityTrustUrl(thumbnailUrl));
    });
  }

  async ngOnInit() {
    this.getLoggedInStudentInfo();
    this.getBanner();
    this.getAds()
    this.getTestimonial();
    this.getTopper();
  }

  getVideoIdFromUrl(url: string): string | null {
    const videoIdMatch = url.match(/(?:\?|&)v=([^\?&]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null;
  }

  redirectUser(videoUrl: string) {
    window.location.href = videoUrl;
  }
  getLoggedInStudentInfo() {
    this.loggedInStudentInfo = this.studentAuthService.getLoggedInStudentInfo();
    if (this.loggedInStudentInfo) {
      this.cls = this.loggedInStudentInfo?.class;
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser) {

      setTimeout(() => {
        jQuery('.banner-carousel').owlCarousel({
          items: 1,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          loop: true,
          dots: false,
          margin: 0,
          responsiveClass: true,
          responsive: {
            600: {
              items: 1,
            },
            1500: {
              nav: true,
              navText: [
                "<button style='position:absolute;left:12px;background:#e9a621e9;color:#fff;border:none;border-radius:50%;width:45px;height:45px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;' class='material-icons'>keyboard_arrow_left</mat-icon></button>",
                "<button style='position:absolute;right:12px;background:#e9a621e9;color:#fff;border:none;border-radius:50%;width:45px;height:45px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;' class='material-icons'>keyboard_arrow_right</mat-icon></button>"
              ],
            },
          }
          
        });
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
        jQuery('.topper-carousel').owlCarousel({
          stagePadding: 30,
          items: 2,
          loop: false,
          dots: false,
          nav: true,
          responsiveClass: true,
          navText: [
            "<button style='position:absolute;left:-12px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_left</mat-icon></button>",
            "<button style='position:absolute;right:-12px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_right</mat-icon></button>"
          ],
          responsive: {
            600: {
              stagePadding: 30,
              items: 4,
            },
            1500: {
              stagePadding: 50,
              items: 5,
            },
          }
        });
        jQuery('.ads-carousel').owlCarousel({
          stagePadding: 25,
          items: 1,
          margin: 10,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          dots: false,
          nav: false,
          responsiveClass: true,
          responsive: {
            600: {
              stagePadding: 65,
              items: 2,
              margin: 40,
            },
            1500: {
              stagePadding: 65,
              items: 3,
              margin: 40,
            },
          }
        });
        jQuery('.testimonial-carousel').owlCarousel({
          stagePadding: 30,
          items: 1,
          loop: false,
          dots: false,
          nav: true,
          responsiveClass: true,
          navText: [
            "<button style='position:absolute;left:-10px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_left</mat-icon></button>",
            "<button style='position:absolute;right:-10px;background:#8c88ff3d;color:#4e4caacd;border:none;border-radius:50%;width:30px;height:30px;top:50%;transform:translateY(-50%);'><mat-icon style='margin-top:2px;margin-left:-3px;' class='material-icons'>keyboard_arrow_right</mat-icon></button>"
          ],
          responsive: {
            600: {
              stagePadding: 50,
              items: 3,
            },
            1500: {
              stagePadding: 50,
              items: 4,
            },
          }
        });
        setTimeout(() => {
          this.loader = false;
        }, 500)
      }, 3000);

    }
  }

  getBanner() {
    this.schoolService.getSchool().subscribe((res: any) => {
      if (res) {
        this.schoolInfo = res;
      }
    })
    this.bannerService.getBannerList().subscribe((res: any[]) => {
      if (res) {
        this.bannerInfo = res;
      }
    })
  }
  getTopper() {
    this.topperService.getTopperList().subscribe((res: any[]) => {
      if (res) {
        this.topperInfo = res;
        setTimeout(() => {
          this.loadTitle = true;
        }, 1500)
      }
    })
  }
  getAds() {
    this.adsService.getAdsList().subscribe((res: any[]) => {
      if (res) {
        this.adsInfo = res;
      }
    })
  }

  getTestimonial() {
    this.testimonialService.getTestimonialList().subscribe((res: any[]) => {
      if (res) {
        this.testimonialInfo = res;
      }
    })
  }

  closeModal() {
    this.showModal = false;
  }
}