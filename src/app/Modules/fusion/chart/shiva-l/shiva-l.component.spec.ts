import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivaLComponent } from './shiva-l.component';

describe('ShivaLComponent', () => {
  let component: ShivaLComponent;
  let fixture: ComponentFixture<ShivaLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShivaLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
