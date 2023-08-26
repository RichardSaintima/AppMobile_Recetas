import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetUpdatePage } from './recet-update.page';

describe('RecetUpdatePage', () => {
  let component: RecetUpdatePage;
  let fixture: ComponentFixture<RecetUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
