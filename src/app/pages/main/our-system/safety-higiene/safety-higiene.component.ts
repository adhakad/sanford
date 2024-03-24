import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-higiene',
  templateUrl: './safety-higiene.component.html',
  styleUrls: ['./safety-higiene.component.css']
})
export class SafetyHigieneComponent implements OnInit {

  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }
}
