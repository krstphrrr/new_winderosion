import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullmanLtarComponent } from './pullman-ltar.component';

describe('PullmanLtarComponent', () => {
  let component: PullmanLtarComponent;
  let fixture: ComponentFixture<PullmanLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PullmanLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullmanLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
