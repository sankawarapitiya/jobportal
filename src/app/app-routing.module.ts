import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client-service/client/client.component';
import { ClientModule } from './client-service/client.module';

const routes: Routes = [
  { path : '',   redirectTo : 'client' ,pathMatch : 'full'}, 
  { path : 'client',   loadChildren: () => import('./client-service/client.module').then(m => m.ClientModule)}, 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
