import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculam',
  templateUrl: './curriculam.component.html',
  styleUrls: ['./curriculam.component.css']
})
export class CurriculamComponent implements OnInit {
  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }

}
