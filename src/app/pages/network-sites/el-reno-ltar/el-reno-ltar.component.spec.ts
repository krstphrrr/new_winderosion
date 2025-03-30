import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElRenoLtarComponent } from './el-reno-ltar.component';

describe('ElRenoLtarComponent', () => {
  let component: ElRenoLtarComponent;
  let fixture: ComponentFixture<ElRenoLtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElRenoLtarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElRenoLtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
