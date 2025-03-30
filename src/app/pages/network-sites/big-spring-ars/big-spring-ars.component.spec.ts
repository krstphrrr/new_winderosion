import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSpringArsComponent } from './big-spring-ars.component';

describe('BigSpringArsComponent', () => {
  let component: BigSpringArsComponent;
  let fixture: ComponentFixture<BigSpringArsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSpringArsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSpringArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
