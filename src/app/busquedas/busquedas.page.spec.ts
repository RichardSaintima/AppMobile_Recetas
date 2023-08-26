import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedasPage } from './busquedas.page';

describe('BusquedasPage', () => {
  let component: BusquedasPage;
  let fixture: ComponentFixture<BusquedasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
