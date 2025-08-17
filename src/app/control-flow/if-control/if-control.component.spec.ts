import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfControlComponent } from './if-control.component';

describe('IfControlComponent', () => {
  let component: IfControlComponent;
  let fixture: ComponentFixture<IfControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
