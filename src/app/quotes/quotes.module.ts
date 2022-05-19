import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';

import { MatListModule } from '@angular/material/list';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListQuotesComponent,
    CreateQuoteComponent,
    EditQuoteComponent,
    DeleteQuoteComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ],
  exports: [

  ]
})
export class QuotesModule { }
