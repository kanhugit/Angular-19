import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSelectorComponent } from './id-selector.component';

describe('IdSelectorComponent', () => {
  let component: IdSelectorComponent;
  let fixture: ComponentFixture<IdSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
