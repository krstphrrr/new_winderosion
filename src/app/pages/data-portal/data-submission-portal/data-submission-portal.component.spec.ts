import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubmissionPortalComponent } from './data-submission-portal.component';

describe('DataSubmissionPortalComponent', () => {
  let component: DataSubmissionPortalComponent;
  let fixture: ComponentFixture<DataSubmissionPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSubmissionPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSubmissionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
