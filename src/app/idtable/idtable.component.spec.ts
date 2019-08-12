import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdtableComponent } from './idtable.component';

describe('IdtableComponent', () => {
  let component: IdtableComponent;
  let fixture: ComponentFixture<IdtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
