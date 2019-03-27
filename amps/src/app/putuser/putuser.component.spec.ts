import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutuserComponent } from './putuser.component';

describe('PutuserComponent', () => {
  let component: PutuserComponent;
  let fixture: ComponentFixture<PutuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
