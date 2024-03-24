import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }


}
