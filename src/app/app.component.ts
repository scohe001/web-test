import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Vicki Alert';

  @ViewChild('alerter') alerter;
  @ViewChild('sender') sender;

  add_alert() {
      this.alerter.add('info', 'I\'m an info alert!');
  }
}
