import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CperLtarComponent } from './cper-ltar.component';

describe('CperLtarComponent', () => {
  let component: CperLtarComponent;
  let fixture: ComponentFixture<CperLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CperLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CperLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
