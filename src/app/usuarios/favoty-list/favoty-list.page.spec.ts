import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavotyListPage } from './favoty-list.page';

describe('FavotyListPage', () => {
  let component: FavotyListPage;
  let fixture: ComponentFixture<FavotyListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavotyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
