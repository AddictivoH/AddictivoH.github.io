import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenebrosoComponent } from './tenebroso.component';

describe('TenebrosoComponent', () => {
  let component: TenebrosoComponent;
  let fixture: ComponentFixture<TenebrosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenebrosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenebrosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
