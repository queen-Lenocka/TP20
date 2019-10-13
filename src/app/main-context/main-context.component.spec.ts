import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContextComponent } from './main-context.component';

describe('MainContextComponent', () => {
  let component: MainContextComponent;
  let fixture: ComponentFixture<MainContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
