import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsCuentaPage } from './settings-cuenta.page';

describe('SettingsCuentaPage', () => {
  let component: SettingsCuentaPage;
  let fixture: ComponentFixture<SettingsCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SettingsCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
