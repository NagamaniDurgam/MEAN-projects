import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecontentComponent } from './servicecontent.component';

describe('ServicecontentComponent', () => {
  let component: ServicecontentComponent;
  let fixture: ComponentFixture<ServicecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
