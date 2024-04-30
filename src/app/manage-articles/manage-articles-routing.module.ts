import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';

const routes: Routes = [
    { path: 'list', component: ListArticlesComponent }, 
    { path: 'search', component: SearchArticleComponent }, 
    { path: 'add', component: AddArticleComponent }, 
    { path: '**', redirectTo: 'list' } 
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArticlesRoutingModule { }