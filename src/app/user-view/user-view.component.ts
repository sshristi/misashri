import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../app/theme-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  toggleDarkTheme(checked) {
    this.themeService.setDarkTheme(checked.checked);
    // console.log("checked >", this.isThemeDark);
    console.log("checked >", checked.checked);
  }
   
}
