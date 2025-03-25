import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticsComponent } from './informatics.component';

describe('InformaticsComponent', () => {
  let component: InformaticsComponent;
  let fixture: ComponentFixture<InformaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformaticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
