import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-celebrations',
  templateUrl: './events-celebrations.component.html',
  styleUrls: ['./events-celebrations.component.css']
})
export class EventsCelebrationsComponent implements OnInit {

  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }

}
