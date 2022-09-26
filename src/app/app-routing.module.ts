import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ShoppingComponent } from './features/shopping/shopping.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
  },
  {
    path:'**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
