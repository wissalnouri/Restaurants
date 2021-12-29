import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
  userDetails;
  ngOnInit() {

    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
}
}
