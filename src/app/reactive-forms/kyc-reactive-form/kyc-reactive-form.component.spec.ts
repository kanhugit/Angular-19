import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCReactiveFormComponent } from './kyc-reactive-form.component';

describe('KYCReactiveFormComponent', () => {
  let component: KYCReactiveFormComponent;
  let fixture: ComponentFixture<KYCReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KYCReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KYCReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
