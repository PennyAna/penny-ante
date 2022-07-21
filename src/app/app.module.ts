import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';
import { LocationFilterPipe } from './location/location-filter.pipe';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationItemComponent } from './location/location-item/location-item.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserItemComponent } from './user/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LocationComponent,
    HeaderComponent,
    UserDetailComponent,
    LocationDetailComponent,
    LocationFilterPipe,
    LocationListComponent,
    LocationItemComponent,
    UserEditComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
