import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeglobalComponent } from './greeglobal.component';

describe('GreeglobalComponent', () => {
  let component: GreeglobalComponent;
  let fixture: ComponentFixture<GreeglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
