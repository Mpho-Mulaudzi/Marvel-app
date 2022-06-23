import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './authentication/auth/auth.component';

const routes: Routes =[
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule)
  }]},

  {
    path : 'auth',
    component: AuthComponent,
    children:[{
        path: '',
        loadChildren: () => import('./authentication/auth/auth.module').then(x=>x.AuthModule)
    }]},
  {
    path: '**',
    redirectTo: '/'
  },

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

