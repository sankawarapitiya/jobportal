import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { Router, RouterModule } from '@angular/router';
import { ClientPaymentComponent } from './client-payment/client-payment.component';


 const routes  = [
 
  {path: 'registed-client', component: ClientComponent},
  {path: 'client-payment', component: ClientPaymentComponent}
]

@NgModule({
  declarations: [
    ClientComponent,
    ClientPaymentComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
