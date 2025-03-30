import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LordsburgNmComponent } from './lordsburg-nm.component';

describe('LordsburgNmComponent', () => {
  let component: LordsburgNmComponent;
  let fixture: ComponentFixture<LordsburgNmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LordsburgNmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LordsburgNmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
