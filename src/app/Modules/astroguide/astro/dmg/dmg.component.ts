import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {  Astro} from '../../../../astro';

@Component({
  selector: 'app-dmg',
  templateUrl: './dmg.component.html',
  styleUrls: ['./dmg.component.scss']
})
export class DmgComponent implements OnInit, AfterViewInit{
  @Input('astro') public astromon: Astro;

  baseeHP: any;
  basecrATK: any;
  baseDmgB: any;
  superc: any;
  superg: any;

  ngOnInit(): void {
    this.baseeHP = Math.round(this.astromon.hp / (1 - (this.astromon.def / (this.astromon.def + 1200))));
    document.getElementById('baseeHP').innerText = this.baseeHP;
    this.baseDmgB = Math.round((this.astromon.def / (this.astromon.def + 1200)) * 100) + ' %';
    document.getElementById('baseDmgB').innerText = this.baseDmgB;
    this.basecrATK = Math.round(this.astromon.atk + (this.astromon.atk * this.astromon.cd ));
    document.getElementById('basecrATK').innerText = this.basecrATK;

    this.superc = document.getElementById('supercn').innerText;
    this.superg = document.getElementById('supergn').innerText;
    console.log(this.superc); document.getElementById('superc').style.display = 'block';
    console.log(this.superg + ': supergggg'); document.getElementById('superg').style.display = 'block';
  }

  ngAfterViewInit(): void {
    this.superc = document.getElementById('supercn').innerText;
    this.superg = document.getElementById('supergn').innerText;
    if (this.superc === undefined) {	document.getElementById('superc').style.display = 'none'; }
    else {document.getElementById('superc').style.display = 'block'; }
    if (this.superg === 'undefined') {	document.getElementById('superg').style.display = 'none'; }
    else{document.getElementById('superg').style.display = 'block'; }
  }
}
