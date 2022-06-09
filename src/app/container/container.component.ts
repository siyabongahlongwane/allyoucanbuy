import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  retrieveCurrentRoute(route){
    console.log(route);
    this.router.navigate([route]);
  }
}
