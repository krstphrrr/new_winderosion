import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManitobaComponent } from './manitoba.component';

describe('ManitobaComponent', () => {
  let component: ManitobaComponent;
  let fixture: ComponentFixture<ManitobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManitobaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManitobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
