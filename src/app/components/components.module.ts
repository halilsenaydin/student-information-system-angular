import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ModalAddTeacherComponent } from './modals/modal-add-teacher/modal-add-teacher.component';
import { ModalAddDepartmentComponent } from './modals/modal-add-department/modal-add-department.component';
import { LectureDetailComponent } from './lecture-detail/lecture-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
        ComponentsComponent,
        LoginComponent,
        ProfileComponent,
        ProfileStudentComponent,
        ProfileTeacherComponent,
        DirectMessageComponent,
        ProfileAdminComponent,
        ModalAddTeacherComponent,
        ModalAddDepartmentComponent,
        LectureDetailComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
