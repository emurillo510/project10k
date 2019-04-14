import { Component } from '@angular/core';

interface Stock {
  companyName: string
  ticker: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';

  stocks: Array<Stock>;


  AppCompoonent() {

  }

  ngOnInit() {
    console.log("hello");
    this.stocks = [
      { companyName: "Microsoft",
        ticker: "MSFT"
      },
      { companyName: "Apple",
        ticker: "AAPL"
      }
    ];
  }
}
