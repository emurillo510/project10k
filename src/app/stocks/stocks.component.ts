import { Component, OnInit } from '@angular/core';
import { StocksService } from 'app/stocks.service';
import { Router } from '@angular/router';
import { Stock } from '../stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Array<Stock>;

  constructor(private stocksService: StocksService, private _router: Router) { 
    this.stocks = stocksService.getStocks();
  }

  ngOnInit() {
  }

  onSelect(stock: Stock) {
    this._router.navigate(["/stocks", stock.tickerSymbol]);
  }
}
