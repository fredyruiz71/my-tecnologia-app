import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProviderModule } from './provider/provider.module';
import {OrdersModule} from './orders/orders.module';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
