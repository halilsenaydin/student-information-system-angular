import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { LoginGuard } from './guards/login.guard';
import { LectureDetailComponent } from './components/lecture-detail/lecture-detail.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { DepartmentAddComponent } from './components/department-add/department-add.component';

const routes: Routes =[
    { path: '', pathMatch: 'full',                      component: ComponentsComponent },
    { path: 'profile/student/:userName',                component: ProfileStudentComponent, canActivate:[LoginGuard]},
    { path: 'profile/teacher/:userName',                component: ProfileTeacherComponent, canActivate:[LoginGuard]},
    { path: 'profile/admin/:userName',                  component: ProfileAdminComponent,   canActivate:[LoginGuard]},
    { path: 'profile/direct-message',                   component: DirectMessageComponent,  canActivate:[LoginGuard] },
    { path: 'lectures/lecture-detail/:lectureId',       component: LectureDetailComponent,  canActivate:[LoginGuard] },
    { path: 'login',                                    component: LoginComponent},
    { path: 'admin/teacher-add',                        component: TeacherAddComponent,     canActivate:[LoginGuard]},
    { path: 'admin/department-add',                     component: DepartmentAddComponent,  canActivate:[LoginGuard]},
    { path: 'examples/landing',                         component: LandingComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
