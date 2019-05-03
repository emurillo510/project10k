import { Injectable } from '@angular/core';
import { Stock } from './stock';

let mockStocks: Array<Stock> = [{companyName: 'Apple, Inc', 'tickerSymbol': 'AAPL'}, {companyName: 'Microsoft', tickerSymbol: 'MSFT'}];

@Injectable()
export class StocksService {

  stocks: Array<Stock>;

  constructor() { 
    this.stocks = mockStocks;
  }

  getStocks() {
    return this.stocks;
  }
}
