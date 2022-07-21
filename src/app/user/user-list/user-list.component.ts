import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
travelGroup: string[] = [];
wishGroup: string[] = [];
user: User;
  private subscription: Subscription;
  @Output() selectedUserEvent = new EventEmitter<User>();
  users: User[] = [];
  userId: string = '';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.userListChangedEvent.subscribe((usersList: User[]) => {
      this.users = usersList;
    });
    this.userService.getUsers();
  }
}

