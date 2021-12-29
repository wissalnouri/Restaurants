import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel={
    UserName: '',
    Password: ''
  }

  constructor(private service:UserService,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/accueil');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{

        this.snackBar.open("connected", "welcom!");
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/accueil');

      },
      err=>{
        this.snackBar.open("wrong password", "try again");
      }

    );
    
  }

}
