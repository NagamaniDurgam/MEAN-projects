import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { timeout } from 'q';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.display(true);
    // setTimeout(() => {
    //   this.spinnerService.display(false);
    // }, 5000);

  }

}
