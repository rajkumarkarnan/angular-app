import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {
        path : '',
        redirectTo : '/login',
        pathMatch : 'full'
      },
      { path : 'login',
        component : LoginLayoutComponent,
        children : [
          {
            path : '',
            component : LoginComponent
          }
        ]
      },
      { path : 'home',
        component : HomeLayoutComponent,
        children : [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path : 'main', component : HomeComponent },
          { path : 'user-profile', component : UserProfileComponent }
        ]
      },
      { path : 'user-profile',
      component : HomeLayoutComponent,
      children : [
        {
          path : '',
          component : UserProfileComponent
        }
      ]
    },
      { path : '**',
        component : HomeComponent,
      },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  