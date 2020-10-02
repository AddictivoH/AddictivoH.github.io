import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroguideComponent } from './astroguide.component';

describe('AstroguideComponent', () => {
  let component: AstroguideComponent;
  let fixture: ComponentFixture<AstroguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
