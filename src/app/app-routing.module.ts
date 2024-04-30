import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{ path: '', component:DashboardComponent},
  {
    path: 'manage-articles',
    loadChildren: () => import('./manage-articles/manage-articles.module').then(m => m.ManageArticlesModule)
  },
 { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 