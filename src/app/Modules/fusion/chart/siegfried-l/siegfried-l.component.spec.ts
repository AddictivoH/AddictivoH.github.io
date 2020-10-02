import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegfriedLComponent } from './siegfried-l.component';

describe('SiegfriedLComponent', () => {
  let component: SiegfriedLComponent;
  let fixture: ComponentFixture<SiegfriedLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiegfriedLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiegfriedLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
