import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSitesComponent } from './network-sites.component';

describe('NetworkSitesComponent', () => {
  let component: NetworkSitesComponent;
  let fixture: ComponentFixture<NetworkSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
