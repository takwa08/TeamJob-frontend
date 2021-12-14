import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceilComponent } from './acceil/acceil.component';
import { AuthEntrepriseComponent } from './auth-entreprise/auth-entreprise.component';
import { AuthEtudiantComponent } from './auth-etudiant/auth-etudiant.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavlogComponent } from './navlog/navlog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'acceuil',component:AcceilComponent},
  {path:'login',component:LoginComponent},
  {path:'nav',component:NavlogComponent},
  {path:'authenticationEtudiant',component:AuthEtudiantComponent},
  {path:'authenticationEntreprise',component:AuthEntrepriseComponent},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
