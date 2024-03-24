import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-connect',
  templateUrl: './parents-connect.component.html',
  styleUrls: ['./parents-connect.component.css']
})
export class ParentsConnectComponent implements OnInit {

  loader: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }

}
