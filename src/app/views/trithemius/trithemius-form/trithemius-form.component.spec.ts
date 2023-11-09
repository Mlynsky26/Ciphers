import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrithemiusFormComponent } from './trithemius-form.component';

describe('TrithemiusFormComponent', () => {
  let component: TrithemiusFormComponent;
  let fixture: ComponentFixture<TrithemiusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrithemiusFormComponent]
    });
    fixture = TestBed.createComponent(TrithemiusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
