import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CezarComponent } from './cezar.component';

describe('CezarComponent', () => {
  let component: CezarComponent;
  let fixture: ComponentFixture<CezarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CezarComponent]
    });
    fixture = TestBed.createComponent(CezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
