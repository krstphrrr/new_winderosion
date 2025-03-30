import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinvalleyArsComponent } from './twinvalley-ars.component';

describe('TwinvalleyArsComponent', () => {
  let component: TwinvalleyArsComponent;
  let fixture: ComponentFixture<TwinvalleyArsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwinvalleyArsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwinvalleyArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
