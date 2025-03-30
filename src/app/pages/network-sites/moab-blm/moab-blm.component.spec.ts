import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoabBlmComponent } from './moab-blm.component';

describe('MoabBlmComponent', () => {
  let component: MoabBlmComponent;
  let fixture: ComponentFixture<MoabBlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoabBlmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoabBlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
