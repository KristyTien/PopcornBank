import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAtmComponent } from './test-atm.component';

describe('TestAtmComponent', () => {
  let component: TestAtmComponent;
  let fixture: ComponentFixture<TestAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
