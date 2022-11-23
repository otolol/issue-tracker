import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IssueContainerModule } from '@containers/issue-list-container/issue-container.module';
import { AddIssueContainerModule } from '@containers/add-issue-container/add-issue-container.module';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const reducers: ActionReducerMap<any> = {};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    IssueContainerModule,
    AddIssueContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
