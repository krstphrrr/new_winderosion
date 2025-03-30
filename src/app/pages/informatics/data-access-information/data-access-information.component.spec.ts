import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccessInformationComponent } from './data-access-information.component';

describe('DataAccessInformationComponent', () => {
  let component: DataAccessInformationComponent;
  let fixture: ComponentFixture<DataAccessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAccessInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
