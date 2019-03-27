import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ServicecontentComponent } from './servicecontent/servicecontent.component';
import { PostuserComponent } from './postuser/postuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { PutuserComponent } from './putuser/putuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

export const routerConfig: Routes = [
    {   path: 'home', component: HomeComponent  },
    {   path: 'about',component: AboutComponent  },
    {   path: 'services', component:ServicesComponent,
        children :[
        {   path: '', component: ServicecontentComponent },
        {   path: '', outlet: 'sidemenu', component:SidemenuComponent  },
        {   path: 'createuser', component: PostuserComponent},
        {   path: 'getuser', component: GetuserComponent},
        {   path: 'enabledisableuser', component: PutuserComponent},
        {   path: 'deleteuser', component: DeleteuserComponent}
        ]
     },
    {   path: '',  redirectTo: '/home',  pathMatch: 'full'  },
    {   path: '**', redirectTo: '/home', pathMatch: 'full'  }
];
