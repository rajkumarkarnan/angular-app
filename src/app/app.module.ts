import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ AdService, AuthService, AuthGuard ],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    HomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    UserProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

