import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
 
  { path: 'location', component: LocationComponent, 
  children: [
    {
      path: ':id', component: LocationDetailComponent
    },
  ], 
}, 
{ path: 'user', component: UserComponent, 
children: [
  {
    path: 'new', component: UserEditComponent, 
  }, 
  {
    path: ':id', component: UserDetailComponent, 
  }, 
  {
    path: ':id/edit', component: UserEditComponent,
  },
]
},
  { 
    path: '', redirectTo: '/document', pathMatch: 'full' 
  }, //redirect to document
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    [RouterModule.forRoot(routes)], 
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule {}