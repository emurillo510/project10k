import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StocksService } from 'app/stocks.service';
import { Stock } from 'app/stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  tickerSymbol: string;
  stock: Stock;

  constructor(private route: ActivatedRoute, private stockService: StocksService) {
    console.log(this.route);
    this.route.params.subscribe(p => this.tickerSymbol = p['tickerSymbol']);
    console.log('tickerSymbol: ', this.tickerSymbol);
  }

  ngOnInit() {
    this.stock = this.stockService.findStock(this.tickerSymbol);
  }

}
