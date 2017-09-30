import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProviderModule } from './provider/provider.module';
import {OrdersModule} from './orders/orders.module';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';

import {IndexComponent} from './provider/index/index.component';
import {PcComponent} from './orders/pc/pc.component';


const appRoutes: Routes = [
  { path:"provider/index", component:IndexComponent},
  { path:"pc.orders",         component: PcComponent },

  {},

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SelectComponent,
 
   
  ],
  imports: [
    BrowserModule,
    ProviderModule,
    OrdersModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
