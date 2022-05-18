import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quotes/quote.service';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {

  quoteData: any;
  dataSource: any;
  
  
  constructor(private quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getQuotesByID(102).subscribe((data: any) => {
      this.quoteData = data;
      this.dataSource = this.quoteData;



      console.log(this.quoteData);
    });
  }
  
  displayedColumns: string[] = ['Quote_Type', 'Contact_Name', 'Task_Type', 'Quote_ID'];
}
