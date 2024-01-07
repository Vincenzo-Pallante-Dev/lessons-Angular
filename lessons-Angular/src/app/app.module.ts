import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { InputComponent } from './input/input.component';
import { DirectivesComponent } from './directives/directives.component';
import { Prova2Component } from './prova2/prova2.component';
import { Prova3Component } from './prova3/prova3.component';
import { HighlightDirective } from './direttive/highlight.directive';
import { ProvaForServicesComponent } from './prova-for-services/prova-for-services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ContattoComponent } from './components/contatto/contatto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './components/http/http.component';
import { Http2Component } from './components/http2/http2.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  // in declarations abbiamo i "mattoncini" della nostra applicazione ovvero: i componenti, le direttive , le pipes etc..
  declarations: [
    AppComponent,
    ProvaComponent,
    InputComponent,
    DirectivesComponent,
    Prova2Component,
    Prova3Component,
    HighlightDirective,
    ProvaForServicesComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContattoComponent,
    NotfoundComponent,
    FormComponent,
    ReactiveFormComponent,
    HttpComponent,
    Http2Component,
    SignupComponent,
    SigninComponent,
  ],
  // in imports abbiamo i moduli che ci servono per lavorare
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
  ],
  // in providers abbiamo i services
  // in questo caso non lo mettiamo perche nel nostro service abbiamo providedIn: 'root', ovvero: accesso a qualunque elemento della root(quindi tutti gli elementi)
  // che sarebbe la stessa cosa di metterlo qui in providers
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
