import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CommandService } from 'src/app/shared/command.service';
import { DrinkService } from 'src/app/shared/drink.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-show-drinks',
  templateUrl: './show-drinks.component.html',
  styleUrls: ['./show-drinks.component.css']
})
export class ShowDrinksComponent implements OnInit {
  drinkId:string
  drink:any
    constructor(public service:DrinkService,public uService:UserService, public cService:CommandService,
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
     this.drinkId=this.data.drinkId;
     this.getDrinkById()
    }
  
    getDrinkById(){
      this.service.getDrinksById(this.drinkId).subscribe(
        res =>{
          console.log(res)
          this.drink = res;
        },
        err =>{
          console.log(err);
        }   
      );
    }
  
    subCommande(nomUser,phoneNumber,drinksId,drinkName){
      this.cService.PostCommande(nomUser,phoneNumber,drinksId,drinkName).subscribe(
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
  