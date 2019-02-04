import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulainComponent } from './formulain.component';

describe('FormulainComponent', () => {
  let component: FormulainComponent;
  let fixture: ComponentFixture<FormulainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
