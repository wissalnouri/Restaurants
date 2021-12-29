import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CommandService } from 'src/app/shared/command.service';
import { LivraisonService } from 'src/app/shared/livraison.service';
import { PlatsService } from 'src/app/shared/plats.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-show-plats',
  templateUrl: './show-plats.component.html',
  styleUrls: ['./show-plats.component.css']
})
export class ShowPlatsComponent implements OnInit {
platId:string
plat:any
strikeCheckout:any = null;
  constructor(public service:PlatsService,public uService:UserService,public LService:LivraisonService ,public cService:CommandService,
    @Inject(MAT_DIALOG_DATA) private data: any,private snackBar: MatSnackBar) { 
    
  }

  userDetails
  ngOnInit() {
    this.stripePaymentGateway();
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
   this.platId=this.data.platId;
   this.getPlatById()
  }

  getPlatById(){
    this.service.getPlatsById(this.platId).subscribe(
      res =>{
        console.log(res)
        this.plat = res;
      },
      err =>{
        console.log(err);
      }   
    );
  }

  subCommande(nomUser,phoneNumber,platsId,platName){
    this.cService.PostCommande(nomUser,phoneNumber,platsId,platName).subscribe(
      (res: any) => {
        
        this.snackBar.open("commande valide", "welcom!"); 
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

  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KC6aNGOApHmVGCipzSP0NkaWT4Jsj7X6MeWhtxQMZ0BJgp3coRRlCw67uIyaPKeKVRXG5NuNLqJkuPzIUslExHb00vmIpvjE9',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }

  checkout(amount,nomUser,phoneNumber,platsId,platName) {
    this.subCommande(nomUser,phoneNumber,platsId,platName);
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KC6aNGOApHmVGCipzSP0NkaWT4Jsj7X6MeWhtxQMZ0BJgp3coRRlCw67uIyaPKeKVRXG5NuNLqJkuPzIUslExHb00vmIpvjE9',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: platName,
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  subLivraison(nomUser,phoneNumber,platsId,platName){
    this.LService.PostLivraison(nomUser,phoneNumber,platsId,platName).subscribe(
      (res: any) => {
        
          
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );

  }
  

}
