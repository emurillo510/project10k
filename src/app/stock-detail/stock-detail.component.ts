import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  tickerSymbol: string;

  constructor(private route: ActivatedRoute) {
    console.log(this.route);
    this.route.params.subscribe(p => this.tickerSymbol = p['tickerSymbol']);
    console.log('tickerSymbol: ', this.tickerSymbol);
  }

  ngOnInit() {
  }

}
