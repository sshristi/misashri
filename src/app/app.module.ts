import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginComponent } from './admin-view/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { BlogViewComponent } from './user-view/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    AdminViewComponent,
    LoginComponent,
    BlogViewComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
