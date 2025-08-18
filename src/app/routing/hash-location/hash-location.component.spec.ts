import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashLocationComponent } from './hash-location.component';

describe('HashLocationComponent', () => {
  let component: HashLocationComponent;
  let fixture: ComponentFixture<HashLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
