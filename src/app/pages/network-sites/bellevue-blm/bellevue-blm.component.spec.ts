import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellevueBlmComponent } from './bellevue-blm.component';

describe('BellevueBlmComponent', () => {
  let component: BellevueBlmComponent;
  let fixture: ComponentFixture<BellevueBlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BellevueBlmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BellevueBlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
