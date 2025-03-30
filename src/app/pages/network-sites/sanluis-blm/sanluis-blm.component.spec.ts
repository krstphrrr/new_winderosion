import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanluisBlmComponent } from './sanluis-blm.component';

describe('SanluisBlmComponent', () => {
  let component: SanluisBlmComponent;
  let fixture: ComponentFixture<SanluisBlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanluisBlmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanluisBlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
