import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddTeacherComponent } from './modal-add-teacher.component';

describe('ModalAddTeacherComponent', () => {
  let component: ModalAddTeacherComponent;
  let fixture: ComponentFixture<ModalAddTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
