import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

let mockStocks: Array<Stock> = [{companyName: 'Apple, Inc', 'tickerSymbol': 'AAPL'}, {companyName: 'Microsoft', tickerSymbol: 'MSFT'}];

@Injectable()
export class StocksService {

  stocks: Array<Stock>;

  constructor(private httpClient: HttpClient) { 
    this.stocks = mockStocks;
  }

  ngOnInit() {
    this.httpClient.get<Stock>("http://localhost:8080/stocks")
    .subscribe( data => console.log(data), 
      (err: HttpErrorResponse) => console.log(`Error: ${err}`)
    );
  }

  getStocks() {
    return this.stocks;
  }

  findStock(tickerSymbol: string): Stock {

    for(let stock of this.stocks) {
      if(tickerSymbol == stock.tickerSymbol) {
        return stock;
      }
    }

    return null;
  }
}
