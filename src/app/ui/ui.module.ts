import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LampComponent } from './lamp/lamp.component';
import { SimpleAlertComponent } from './simple-alert/simple-alert.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LampComponent, SimpleAlertComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [LayoutComponent, LampComponent, SimpleAlertComponent]
})
export class UiModule { }
