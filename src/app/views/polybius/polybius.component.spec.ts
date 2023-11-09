import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolybiusComponent } from './polybius.component';

describe('PolybiusComponent', () => {
  let component: PolybiusComponent;
  let fixture: ComponentFixture<PolybiusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolybiusComponent]
    });
    fixture = TestBed.createComponent(PolybiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
