import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(public userService: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().
    then((users: any) => {
        this.users = users;
    }, (error: any) => {
        console.log(error);
  });
  }



}
