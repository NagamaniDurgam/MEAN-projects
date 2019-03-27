import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  LOAD_SPINNER: boolean =false; 

  constructor(private spinnerService: SpinnerService ) {   
    
    console.log('Event listened in App Component ');     
   
    }
    ngOnInit() { 
      this.spinnerService.status.subscribe((val: boolean) => {
          this.LOAD_SPINNER = val;
      });
    }
  
}
