import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

let mockStocks: Array<Stock> = [
  {companyName: 'Apple, Inc', tickerSymbol: 'AAPL', marketPrice: '189.20', changeInPriceDaily: '0.88', changeInPercentDaily: '0.46'}, 
  {companyName: 'Microsoft', tickerSymbol: 'MSFT', marketPrice: '128.07', changeInPriceDaily: '0.86', changeInPercentDaily: '0.67'}
];

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
