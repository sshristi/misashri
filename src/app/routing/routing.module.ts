import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from '../admin-view/login/login.component';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard] },
  {path: 'view', component: UserViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
