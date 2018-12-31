import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { TabContentModule } from './tab-content/tab-content.module';
//import { SimpleAlertComponent } from './ui/simple-alert/simple-alert.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    TabContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
