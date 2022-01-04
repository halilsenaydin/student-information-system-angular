import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddDepartmentComponent } from './modal-add-department.component';

describe('ModalAddDepartmentComponent', () => {
  let component: ModalAddDepartmentComponent;
  let fixture: ComponentFixture<ModalAddDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
