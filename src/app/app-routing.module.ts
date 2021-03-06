import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuoteComponent } from './quotes/create-quote/create-quote.component';
import { EditQuoteComponent } from './quotes/edit-quote/edit-quote.component';
import { ListQuotesComponent } from './quotes/list-quotes/list-quotes.component';
import { ViewQuoteComponent } from './quotes/view-quote/view-quote.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'quote/create', component: CreateQuoteComponent },
  { path: 'quote/list', component: ListQuotesComponent },
  { path: 'quote/list/:id', component: ViewQuoteComponent},
  { path: 'quote/edit/:id', component: EditQuoteComponent },
  { path: 'user/login', component: LoginUserComponent, },
  { path: 'user/view/:id', component: ViewUserComponent, },
  { path: 'user/register', component: RegisterUserComponent },
  // Wildcard path { path: '**'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
