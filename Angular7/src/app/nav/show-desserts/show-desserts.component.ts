import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CommandService } from 'src/app/shared/command.service';
import { DessertService } from 'src/app/shared/dessert.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-show-desserts',
  templateUrl: './show-desserts.component.html',
  styleUrls: ['./show-desserts.component.css']
})
export class ShowDessertsComponent implements OnInit {
  dessertId:string
  dessert:any
    constructor(public service:DessertService,public uService:UserService, public cService:CommandService,
      @Inject(MAT_DIALOG_DATA) private data: any,) { 
      
    }
  
    userDetails
    ngOnInit() {
      this.uService.getUserProfile().subscribe(
        res =>{
          this.userDetails = res;
        },
        err =>{
          console.log(err);
        }
  
      );
     this.dessertId=this.data.dessertId;
     this.getDessertById()
    }
  
    getDessertById(){
      this.service.getDessertsById(this.dessertId).subscribe(
        res =>{
          console.log(res)
          this.dessert = res;
        },
        err =>{
          console.log(err);
        }   
      );
    }
  
    subCommande(nomUser,phoneNumber,dessertId,drinkName){
      this.cService.PostCommande(nomUser,phoneNumber,dessertId,drinkName).subscribe(
        (res: any) => {
          
            
            //this.toastr.success('New user created!', 'Registration successful.');
        },
            err => {
              console.log(err);
            }
          
        
        
      );
  
    }
  
    public createImgPath = (serverPath: string) => {
      return `https://localhost:44319/${serverPath}`;
    }
    
  
  }
  