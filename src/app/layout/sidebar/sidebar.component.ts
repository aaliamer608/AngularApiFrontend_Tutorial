import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ListQuotesComponent } from 'src/app/quotes/list-quotes/list-quotes.component';
import { QuotesModule } from 'src/app/quotes/quotes.module';


// import { QuoteService } from 'src/app/services/quote.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

