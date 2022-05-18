import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quotes/quote.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {


  //listQuotes: any;
  quoteData: any;
  dataSource: any;
  id: number = 0;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotesByID(this.id).subscribe((data) => {
      this.quoteData = data;
      this.dataSource = this.quoteData;
      console.log(data);
    });
  }


  displayedColumns: string[] = ['Quote_Type', 'Contact_Name'];
}

