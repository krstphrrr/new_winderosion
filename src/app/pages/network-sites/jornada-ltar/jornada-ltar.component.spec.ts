import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaLtarComponent } from './jornada-ltar.component';

describe('JornadaLtarComponent', () => {
  let component: JornadaLtarComponent;
  let fixture: ComponentFixture<JornadaLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JornadaLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
