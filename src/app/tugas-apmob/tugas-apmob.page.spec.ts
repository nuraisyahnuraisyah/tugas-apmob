import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TugasApmobPage } from './tugas-apmob.page';

describe('TugasApmobPage', () => {
  let component: TugasApmobPage;
  let fixture: ComponentFixture<TugasApmobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TugasApmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
