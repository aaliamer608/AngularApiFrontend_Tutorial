import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuoteService } from 'src/app/services/quotes/quote.service';

import { HttpClient } from '@angular/common/http';
import { IQuote } from 'src/app/services/quotes/mock-quote';



@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})

export class CreateQuoteComponent implements OnInit {

 
  data: any;
  genForm: any;
  quote: IQuote | undefined;
  

  constructor(private http: HttpClient,
    private quoteService: QuoteService,
    private fb: FormBuilder) {

  }



  ngOnInit(): void {
    
    this.fb = new FormBuilder();
    this.genForm = this.fb.group({
      Quote_ID: new FormControl(0),
      Quote_Type: new FormControl(''),
      Contact_Name: new FormControl(''),
      DueDate: new FormControl(Date()),
      Task_Type: new FormControl(''),
    });
    

    console.log(this.genForm.value)


  }

  fillData() {

    this.quote = {
      Quote_ID: this.genForm.value.Quote_ID,
      Quote_Type: this.genForm.value.Quote_Type,
      Contact_Name: this.genForm.value.Contact_Name,
      Task_Type: this.genForm.value.Task_Type,
      DueDate: this.genForm.value.DueDate
    }

//    console.log(this.genForm.value.DueDate)
    console.log(this.quote);
  }


  submit() {

    try {
      this.quoteService.createQuotes(this.quote).subscribe((data) => {
        //alert(this.quote);
        //this.quote = data;
        console.log("Quote Added");
      });
    } catch (err: any) {
      console.log("Error With Post", err)
    }
  }
}

