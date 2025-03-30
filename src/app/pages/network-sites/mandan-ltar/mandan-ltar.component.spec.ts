import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandanLtarComponent } from './mandan-ltar.component';

describe('MandanLtarComponent', () => {
  let component: MandanLtarComponent;
  let fixture: ComponentFixture<MandanLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandanLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandanLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
