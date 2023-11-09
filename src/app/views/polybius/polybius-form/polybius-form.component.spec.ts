import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolybiusFormComponent } from './polybius-form.component';

describe('PolybiusFormComponent', () => {
  let component: PolybiusFormComponent;
  let fixture: ComponentFixture<PolybiusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolybiusFormComponent]
    });
    fixture = TestBed.createComponent(PolybiusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
