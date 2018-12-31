import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { SendRequestComponent } from './send-request/send-request.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [SendRequestComponent, HistoryComponent, AboutComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ SendRequestComponent, HistoryComponent, AboutComponent ]
})
export class TabContentModule { }
