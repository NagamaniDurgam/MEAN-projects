import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(route : ActivatedRoute) {
    route.params.subscribe(params => console.log("side menu id number : "+params['id']));
   }

  ngOnInit() {
  }

}
