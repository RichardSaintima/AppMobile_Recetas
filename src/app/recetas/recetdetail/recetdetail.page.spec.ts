import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetdetailPage } from './recetdetail.page';

describe('RecetdetailPage', () => {
  let component: RecetdetailPage;
  let fixture: ComponentFixture<RecetdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
