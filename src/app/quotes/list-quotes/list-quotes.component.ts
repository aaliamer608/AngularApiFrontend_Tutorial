import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quotes/quote.service';


@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {

  quoteData: any;
  dataSource: any;
  constructor(private quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.listQuotes().subscribe((data) => {
      this.quoteData = data;
      this.dataSource = this.quoteData;
      console.log(data);
    });
  }
  
  displayedColumns: string[] = ['Quote_Type', 'Contact_Name', 'Task_Type', 'Quote_ID'];
}
