import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
originalUser: User;
user: User;
id: string;
editMode: boolean = false;
nameInput: string;
idInput: string;
newUser: User;
onCancel(): void {
  this.router.navigate(["../user"]);
}
onSubmit(f: NgForm) {
  this.nameInput = f.value.name;
  this.idInput = f.value.id;
  this.newUser = new User(this.idInput, this.nameInput);
  if (this.editMode === true) {
    this.userService.updateUser(this.originalUser, this.newUser);
  }
else {
  this.userService.addUser(this.newUser);
}
this.onCancel();
}
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = String(+params['id']);
      this.editMode = params['id'] != null;
    });
    this.userService.getUser(this.id)
    .subscribe(m => {
      this.originalUser = m.user;
    });
  }
}
