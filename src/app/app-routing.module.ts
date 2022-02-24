import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guards/auth.guards';
import { NotAuthGuard } from './auth-guards/not-auth.guards';
import { PopoutchartComponent } from './home/popoutchart/popoutchart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  { path: 'popout-charts', component: PopoutchartComponent},
  //{ path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '', canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
