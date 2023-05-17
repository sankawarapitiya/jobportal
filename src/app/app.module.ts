import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientModule } from './client-service/client.module'; 
import { ClientPaymentComponent } from './client-service/client-payment/client-payment.component';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,  
    FormsModule,
  
 
    AppRoutingModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
