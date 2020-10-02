import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSL-Data-Nest';
  update = false;
  constructor(
    private location: Location,
    updates: SwUpdate
  ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
   }
   goBack(): void {
    this.location.back();
  }

}
