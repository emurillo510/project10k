import { Component, OnInit } from '@angular/core';

interface Stock {
  companyName: string
  tickerSymbol: string
}

let mockStocks: Array<Stock> = [{companyName: 'Apple, Inc', 'tickerSymbol': 'AAPL'}, {companyName: 'Microsoft', tickerSymbol: 'MSFT'}];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = mockStocks;
  }

}
