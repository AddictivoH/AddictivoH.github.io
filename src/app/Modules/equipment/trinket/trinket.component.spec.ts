import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinketComponent } from './trinket.component';

describe('TrinketComponent', () => {
  let component: TrinketComponent;
  let fixture: ComponentFixture<TrinketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
