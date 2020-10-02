import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltwingLComponent } from './boltwing-l.component';

describe('BoltwingLComponent', () => {
  let component: BoltwingLComponent;
  let fixture: ComponentFixture<BoltwingLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoltwingLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoltwingLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
