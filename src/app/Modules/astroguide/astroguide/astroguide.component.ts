import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { AstroService } from '../../../astro.service';
import { Astro } from '../../../astro';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-astroguide',
  templateUrl: './astroguide.component.html',
  styleUrls: ['./astroguide.component.scss']
})

export class AstroguideComponent implements OnInit, AfterViewInit {
  db: Astro[];
  displayedColumns: string[] = ['icon',	'astromon',	'nat',	'element',	'leader',	'normal',	'active',	'class',	'hp',	'atk',	'def',	'rec'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
  valuesearch = 'Clear me';

  // tslint:disable-next-line: variable-name
  constructor(private _astroService: AstroService ) {
    this.dataSource.filterPredicate = (data: Astro, filter: string) => {
      return data.name1.toLocaleLowerCase().includes(filter) ||
      data.name2.toLocaleLowerCase().includes(filter) ||
      data.name3.toLocaleLowerCase().includes(filter);
    };
   }

  ngOnInit(): void {
    this._astroService.getDB().subscribe(db => this.db = db);
    this.dataSource = new MatTableDataSource(this.db);
  }

  // tslint:disable-next-line: typedef
  applyFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
   }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
