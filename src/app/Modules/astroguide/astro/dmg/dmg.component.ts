import { Component, Input, OnInit } from '@angular/core';
import {  Astro} from '../../../../astro';

@Component({
  selector: 'app-dmg',
  templateUrl: './dmg.component.html',
  styleUrls: ['./dmg.component.scss']
})
export class DmgComponent implements OnInit{
  @Input('astro') public astromon: Astro;

  baseeHP: any;
  basecrATK: any;
  baseDmgB: any;

  ngOnInit(): void {
    this.baseeHP = Math.round(this.astromon.hp / (1 - (this.astromon.def / (this.astromon.def + 1200))));
    document.getElementById('baseeHP').innerText = this.baseeHP;
    this.baseDmgB = Math.round((this.astromon.def / (this.astromon.def + 1200)) * 100) + ' %';
    document.getElementById('baseDmgB').innerText = this.baseDmgB;
    this.basecrATK = Math.round(this.astromon.atk + (this.astromon.atk * this.astromon.cd ));
    document.getElementById('basecrATK').innerText = this.basecrATK;
  }

}
