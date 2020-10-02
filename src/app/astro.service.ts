import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Astro } from './astro';
import { db } from './db';

@Injectable({
  providedIn: 'root'
})
export class AstroService {

  constructor() { }

  getDB(): Observable<Astro[]> {
    return of(db);
  }
  getAstroID(id: string): Observable<Astro> {
    return of(db.find(astro => astro.id === id));
  }
}
