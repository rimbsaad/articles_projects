import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageArticlesModule } from './manage-articles/manage-articles.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, ManageArticlesModule,ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
