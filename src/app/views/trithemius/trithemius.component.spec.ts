import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrithemiusComponent } from './trithemius.component';

describe('TrithemiusComponent', () => {
  let component: TrithemiusComponent;
  let fixture: ComponentFixture<TrithemiusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrithemiusComponent]
    });
    fixture = TestBed.createComponent(TrithemiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
