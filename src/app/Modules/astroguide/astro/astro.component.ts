import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import {  Astro} from '../../../astro';
import {  AstroService} from '../../../astro.service';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent implements OnInit, AfterViewInit {
  public isCollapsed = false;
  astro: Astro;

  constructor(
    private route: ActivatedRoute,
    private astroService: AstroService,
  ) {}

  ngOnInit(): void {
    this.getAstroID();
  }

  getAstroID(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.astroService.getAstroID(id).subscribe(astro => this.astro = astro);
  }

  ngAfterViewInit(): void {
  }
}
