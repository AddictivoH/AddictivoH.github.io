import { Component, Input, OnInit } from '@angular/core';
import {  Astro} from '../../../../astro';

@Component({
  selector: 'app-dmg',
  templateUrl: './dmg.component.html',
  styleUrls: ['./dmg.component.scss']
})
export class DmgComponent implements OnInit{
  @Input('astro') public astromon: Astro;

  ngOnInit(): void {
  }

}
