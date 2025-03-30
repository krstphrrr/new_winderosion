import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollomanAfbComponent } from './holloman-afb.component';

describe('HollomanAfbComponent', () => {
  let component: HollomanAfbComponent;
  let fixture: ComponentFixture<HollomanAfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HollomanAfbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollomanAfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
