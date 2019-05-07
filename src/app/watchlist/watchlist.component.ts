import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/stock';
import { StocksService } from 'app/stocks.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  private watchlistId: number
  private watchlist: Array<Stock> // This should be a service. Also, it could also be it's own model.

  constructor(private stockService: StocksService) {

  }

  ngOnInit() {
    this.watchlistId = 1;
    this.watchlist = new Array<Stock>(
      {companyName: "Apple", tickerSymbol: "AAPL"}, 
      {companyName: "Microsoft", tickerSymbol: "MSFT"}
      );
  }

  addStock(tickerSymbol: string) {
    let stock: Stock = this.stockService.findStock(tickerSymbol);
    this.watchlist.push(stock);
  }
}
