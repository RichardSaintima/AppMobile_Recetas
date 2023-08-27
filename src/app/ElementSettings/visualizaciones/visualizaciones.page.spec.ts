import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizacionesPage } from './visualizaciones.page';

describe('VisualizacionesPage', () => {
  let component: VisualizacionesPage;
  let fixture: ComponentFixture<VisualizacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
