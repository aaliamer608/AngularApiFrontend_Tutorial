import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { MatDatepickerModule } from '@angular/material/datepicker';

import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';
import { QuotesModule } from './quotes/quotes.module';
import { ListQuotesComponent } from './quotes/list-quotes/list-quotes.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { ViewQuoteComponent } from './quotes/view-quote/view-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    ViewQuoteComponent,
    LoginComponent,
    RegisterComponent,
    LoginUserComponent,
    RegisterUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    QuotesModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatDatepickerModule,
    NgbModule,
  ],
  exports: [
    MatListModule,
    MatTableModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
