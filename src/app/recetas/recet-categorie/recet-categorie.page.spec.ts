import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetCategoriePage } from './recet-categorie.page';

describe('RecetCategoriePage', () => {
  let component: RecetCategoriePage;
  let fixture: ComponentFixture<RecetCategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
