import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // Routing con Parametri
  // { path: 'contact/:id', component: ContactComponent },

  // Routing Children
  {
    path: 'contact',
    component: ContactComponent,
    // Proteggere Rout specifici con le Guard
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }],
  },
  // Errori e Redirect
  { path: '404', component: NotfoundComponent },
  // SignUp
  { path: 'signup', component: SignupComponent },
  // SignIn
  { path: 'signin', component: SigninComponent },
  // path per le page non trovate / non esistenti
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
