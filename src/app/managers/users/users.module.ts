import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersListComponent, UserProfileComponent],
  exports: [UsersListComponent, UserProfileComponent]
})
export class UsersManager { }
