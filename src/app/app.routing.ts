import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ProfileComponent } from '../app/components/profile/profile.component';

const routes: Routes =[
    { path: '', pathMatch: 'full',  component: ComponentsComponent },
    { path: 'profile',              component: ProfileComponent },
    { path: 'login',                component: LoginComponent },
    { path: 'examples/landing',     component: LandingComponent }
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
