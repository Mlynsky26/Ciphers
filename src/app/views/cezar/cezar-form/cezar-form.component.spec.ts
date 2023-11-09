import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CezarFormComponent } from './cezar-form.component';

describe('CezarFormComponent', () => {
  let component: CezarFormComponent;
  let fixture: ComponentFixture<CezarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CezarFormComponent]
    });
    fixture = TestBed.createComponent(CezarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
