import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomophonicFormComponent } from './homophonic-form.component';

describe('HomophonicFormComponent', () => {
  let component: HomophonicFormComponent;
  let fixture: ComponentFixture<HomophonicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomophonicFormComponent]
    });
    fixture = TestBed.createComponent(HomophonicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
