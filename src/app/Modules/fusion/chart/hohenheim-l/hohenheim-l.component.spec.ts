import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HohenheimLComponent } from './hohenheim-l.component';

describe('HohenheimLComponent', () => {
  let component: HohenheimLComponent;
  let fixture: ComponentFixture<HohenheimLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HohenheimLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HohenheimLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
