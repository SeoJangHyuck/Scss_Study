import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConComponent } from './con.component';

describe('ConComponent', () => {
  let component: ConComponent;
  let fixture: ComponentFixture<ConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
