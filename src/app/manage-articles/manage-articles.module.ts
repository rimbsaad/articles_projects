import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { RouterModule } from '@angular/router';
import { ManageArticlesRoutingModule } from './manage-articles-routing.module';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [AddArticleComponent, ListArticlesComponent, UpdateArticleComponent, SearchArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ManageArticlesRoutingModule,
    HttpClientModule
  ]
})
export class ManageArticlesModule { }
