import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestHeaderComponent } from './app-test-header.component';

describe('AppTestHeaderComponent', () => {
  let component: AppTestHeaderComponent;
  let fixture: ComponentFixture<AppTestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
