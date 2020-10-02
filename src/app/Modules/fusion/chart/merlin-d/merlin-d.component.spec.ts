import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerlinDComponent } from './merlin-d.component';

describe('MerlinDComponent', () => {
  let component: MerlinDComponent;
  let fixture: ComponentFixture<MerlinDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerlinDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
