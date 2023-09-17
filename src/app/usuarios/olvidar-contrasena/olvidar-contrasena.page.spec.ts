import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidarContrasenaPage } from './olvidar-contrasena.page';

describe('OlvidarContrasenaPage', () => {
  let component: OlvidarContrasenaPage;
  let fixture: ComponentFixture<OlvidarContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidarContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
