import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
