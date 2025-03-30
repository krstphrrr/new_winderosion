import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortonLtarComponent } from './morton-ltar.component';

describe('MortonLtarComponent', () => {
  let component: MortonLtarComponent;
  let fixture: ComponentFixture<MortonLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortonLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortonLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
