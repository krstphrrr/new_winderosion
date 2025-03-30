import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedhillsArsComponent } from './redhills-ars.component';

describe('RedhillsArsComponent', () => {
  let component: RedhillsArsComponent;
  let fixture: ComponentFixture<RedhillsArsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedhillsArsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedhillsArsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
