import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from '../stocks/stocks.component';
import { StockDetailComponent } from '../stock-detail/stock-detail.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
  { path: 'stocks/:tickerSymbol', component: StockDetailComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

