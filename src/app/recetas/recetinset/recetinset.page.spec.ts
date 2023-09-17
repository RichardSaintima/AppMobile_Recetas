import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetinsetPage } from './recetinset.page';

describe('RecetinsetPage', () => {
  let component: RecetinsetPage;
  let fixture: ComponentFixture<RecetinsetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetinsetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
