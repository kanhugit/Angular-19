import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFromComponent } from './demo-from.component';

describe('DemoFromComponent', () => {
  let component: DemoFromComponent;
  let fixture: ComponentFixture<DemoFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
