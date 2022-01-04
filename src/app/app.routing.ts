import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { LoginGuard } from './guards/login.guard';
import { LectureDetailComponent } from './components/lecture-detail/lecture-detail.component';

const routes: Routes =[
    { path: '', pathMatch: 'full',                      component: ComponentsComponent },
    { path: 'profile',                                  component: ProfileComponent },
    { path: 'profile/student/:userName',                component: ProfileStudentComponent, canActivate:[LoginGuard]},
    { path: 'profile/teacher/:userName',                component: ProfileTeacherComponent , canActivate:[LoginGuard]},
    { path: 'profile/admin/:userName',                  component: ProfileAdminComponent},
    { path: 'profile/direct-message',                   component: DirectMessageComponent, canActivate:[LoginGuard] },
    { path: 'lectures/lecture-detail/:lectureId',       component: LectureDetailComponent, canActivate:[LoginGuard] },
    { path: 'login',                                    component: LoginComponent },
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
