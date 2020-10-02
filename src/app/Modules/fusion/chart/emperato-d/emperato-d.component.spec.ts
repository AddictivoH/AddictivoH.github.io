import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmperatoDComponent } from './emperato-d.component';

describe('EmperatoDComponent', () => {
  let component: EmperatoDComponent;
  let fixture: ComponentFixture<EmperatoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmperatoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmperatoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
