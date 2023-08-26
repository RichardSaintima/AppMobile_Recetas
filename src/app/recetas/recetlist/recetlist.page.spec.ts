import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetlistPage } from './recetlist.page';

describe('RecetlistPage', () => {
  let component: RecetlistPage;
  let fixture: ComponentFixture<RecetlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
