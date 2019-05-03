import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { WatchlistComponent } from './watchlist/watchlist.component';

import { StocksService } from './stocks.service';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    WatchlistComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
