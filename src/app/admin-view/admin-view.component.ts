import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  successMessage:string;
  errorMessage:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   
  }
 
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
