import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
    {path: '', component: HomeComponent, children:[{path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '' }
]},
]