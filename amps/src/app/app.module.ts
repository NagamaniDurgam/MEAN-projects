import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ServicecontentComponent } from './servicecontent/servicecontent.component';
import {routerConfig} from '././router.config';
import { PostuserComponent } from './postuser/postuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { PutuserComponent } from './putuser/putuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { SpinnerService} from "./services/spinner.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SidemenuComponent,
    ServicecontentComponent,
    PostuserComponent,
    GetuserComponent,
    PutuserComponent,
    DeleteuserComponent,
    ShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(routerConfig)
  ],
  exports:[RouterModule],
  providers: [SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
