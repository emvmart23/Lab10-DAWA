import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    NavmenuComponent,
    PagenotfoundComponent,
    ContactComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
