import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomophonicComponent } from './homophonic.component';

describe('HomophonicComponent', () => {
  let component: HomophonicComponent;
  let fixture: ComponentFixture<HomophonicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomophonicComponent]
    });
    fixture = TestBed.createComponent(HomophonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
