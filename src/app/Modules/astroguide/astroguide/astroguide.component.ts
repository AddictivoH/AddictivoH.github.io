import { Component, OnInit } from '@angular/core';
import { AstroService } from '../../../astro.service';
import { Astro } from '../../../astro';

@Component({
  selector: 'app-astroguide',
  templateUrl: './astroguide.component.html',
  styleUrls: ['./astroguide.component.scss']
})
export class AstroguideComponent implements OnInit {
  db: Astro[];

  // tslint:disable-next-line: variable-name
  constructor(private _astroService: AstroService ) {  }

  ngOnInit() {
    this.getDB();
  }
  getDB(): void {
    this._astroService.getDB()
    .subscribe(db => this.db = db);
  }

}
