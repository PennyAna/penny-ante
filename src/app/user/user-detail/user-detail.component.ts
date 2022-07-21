import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
selectedUser: User;
user: User;
id: string;
onDelete() {
  this.userService.deleteUser(this.selectedUser);
  this.router.navigate(["../user"]);
}
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = String(+params['id']);
      this.userService.getUser(this.id).subscribe(uData => {
        this.selectedUser = uData.user;
      })
    });
  }

}
