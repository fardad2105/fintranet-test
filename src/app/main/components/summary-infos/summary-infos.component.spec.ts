import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryInfosComponent } from './summary-infos.component';

describe('SummaryInfosComponent', () => {
  let component: SummaryInfosComponent;
  let fixture: ComponentFixture<SummaryInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
