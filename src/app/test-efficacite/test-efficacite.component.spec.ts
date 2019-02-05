import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEfficaciteComponent } from './test-efficacite.component';

describe('TestEfficaciteComponent', () => {
  let component: TestEfficaciteComponent;
  let fixture: ComponentFixture<TestEfficaciteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEfficaciteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEfficaciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
