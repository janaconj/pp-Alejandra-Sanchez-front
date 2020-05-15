import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user'; 

declare var M:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UserService ]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  addUser(form: NgForm){
    if(form.value._id){
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Usuario actualizado con exito!'});
        });
        this.getUsers;
    }else{
      this.userService.postUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Usuario guardado con exito!'});
      });
      this.getUsers;
    }
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe(res =>{
        this.userService.users = res as User[];
      });
  }

  editUser(user: User){
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string){
    if(confirm('Lo quieres eliminar?')){
      this.userService.deleteUser(_id)
        .subscribe(res => {
          M.toast({html: 'Usuario eliminado con exito!'});
          this.getUsers;
        });
    }else{
      this.getUsers;
    }
    
  }
}
