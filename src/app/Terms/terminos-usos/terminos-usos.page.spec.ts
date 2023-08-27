import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminosUsosPage } from './terminos-usos.page';

describe('TerminosUsosPage', () => {
  let component: TerminosUsosPage;
  let fixture: ComponentFixture<TerminosUsosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminosUsosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
