import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkronLtarComponent } from './akron-ltar.component';

describe('AkronLtarComponent', () => {
  let component: AkronLtarComponent;
  let fixture: ComponentFixture<AkronLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkronLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkronLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
