import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatelDComponent } from './beatel-d.component';

describe('BeatelDComponent', () => {
  let component: BeatelDComponent;
  let fixture: ComponentFixture<BeatelDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatelDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
