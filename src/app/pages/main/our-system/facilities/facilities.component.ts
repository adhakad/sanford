import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }


}
