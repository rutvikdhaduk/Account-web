import { Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';

export const routes: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'',  loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),component:SecureComponent}
];
