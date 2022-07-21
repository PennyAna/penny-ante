import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/user/';
  users: User[] = [];
  userListChangedEvent = new EventEmitter<User[]>();
  userSelectedEvent = new EventEmitter<User>();
  userChangedEvent = new Subject<User[]>();
getUsers() {
  this.http.get<{message: string, users: User[]}>(this.url)
  .subscribe((responseData) => {
    this.users = responseData.users;
    this.sortAndSend();
  }, 
  (error: any) => {
    console.log(error);
  });
}
getUser(id: string) {
  return this.http.get<{message: string, user: User}>(this.url + id);
}
deleteUser(user: User) {
  if (!user) {
    return;
  }
  const pos = this.users.findIndex(d => d.id === user.id);
    if (pos < 0) {
    return;
  }
  this.http.delete(this.url + user.id).subscribe((response) => {
    console.log(response);
    this.users.splice(pos, 1);
    this.sortAndSend();
  });
}
addUser(user: User) {
  if(!user) {
    return;
  }
  user.id = '';
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  this.http.post<{message: string, user: User}>(this.url, user, {headers: headers})
  .subscribe((responseData) => {
    this.users.push(responseData.user);
    this.sortAndSend();
  });
  this.getUsers();
}
updateUser(originalUser: User, newUser: User) {
  if(!originalUser || !newUser) {
    return;
  }
  const pos = this.users.findIndex(d =>d.id === originalUser.id);
  if (pos < 0) {
    return;
  }
  newUser.id = originalUser.id;
  newUser._id = originalUser._id;
  const headers = new HttpHeaders({'Content-Type':'application/json'});
  this.http.put(this.url + originalUser.id, newUser, {headers: headers})
  .subscribe((response) => {
    console.log(response);
    this.users[pos] = newUser;
    console.log(response);
    this.sortAndSend();
  }); 
}

sortAndSend() {
  console.log("in sort");
  this.users?.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1: 0);
}
  constructor(private http: HttpClient) {}
}
