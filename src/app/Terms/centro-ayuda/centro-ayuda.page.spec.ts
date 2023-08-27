import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroAyudaPage } from './centro-ayuda.page';

describe('CentroAyudaPage', () => {
  let component: CentroAyudaPage;
  let fixture: ComponentFixture<CentroAyudaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentroAyudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
