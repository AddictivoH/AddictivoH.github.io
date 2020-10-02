import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColossusComponent } from './colossus.component';

describe('ColossusComponent', () => {
  let component: ColossusComponent;
  let fixture: ComponentFixture<ColossusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColossusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColossusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
