import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsGeneralPage } from './settings-general.page';

describe('SettingsGeneralPage', () => {
  let component: SettingsGeneralPage;
  let fixture: ComponentFixture<SettingsGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SettingsGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
