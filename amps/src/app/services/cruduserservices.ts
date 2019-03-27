import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { environment } from '../../environments/environment';

@Injectable()
export class CurdUserService {
    apiUri:any;
   // private _listners = new Subject<any>();
    constructor(private httpClient: HttpClient) {
        this.getConfigs();
      }
      getConfigs() {
        const host = window.location.host;
        let envType = 'local';
        
        this.apiUri = environment.envs[envType].apiEndpoint;
        console.log('Angular environment detected as ' +envType +' and API URL is ' +this.apiUri);
    
      }

}