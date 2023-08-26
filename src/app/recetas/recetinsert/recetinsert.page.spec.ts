import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetinsertPage } from './recetinsert.page';

describe('RecetinsertPage', () => {
  let component: RecetinsertPage;
  let fixture: ComponentFixture<RecetinsertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetinsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
