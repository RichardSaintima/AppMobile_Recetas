import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPrivacidadPage } from './settings-privacidad.page';

describe('SettingsPrivacidadPage', () => {
  let component: SettingsPrivacidadPage;
  let fixture: ComponentFixture<SettingsPrivacidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SettingsPrivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
