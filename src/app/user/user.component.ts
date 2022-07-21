import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], 
  providers: [UserService]
})
export class UserComponent implements OnInit {
selectedUser: User;
user: User;
travelGroup: string[] = [];
wishGroup: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSelectedEvent.subscribe((user: User) => {this.selectedUser = user;});
  }

}
