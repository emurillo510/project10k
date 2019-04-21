import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from '../stocks/stocks.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
  { path: 'watchlist', component: WatchlistComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
