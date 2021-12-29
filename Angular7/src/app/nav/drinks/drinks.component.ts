import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ModifierDrinksComponent } from 'src/app/nav/modifier-drinks/modifier-drinks.component';
import { DrinkService } from 'src/app/shared/drink.service';
import { UserService } from 'src/app/shared/user.service';
import { AjouterDrinkComponent } from '../ajouter-drink/ajouter-drink.component';

import { ShowDrinksComponent } from '../show-drinks/show-drinks.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class   DrinksComponent  implements OnInit {

  constructor(private router:Router,private service:DrinkService,private uService:UserService,public dialog: MatDialog) { }
  drinkDetails;
  drinkbyid;
  public response: {dbPath: ''}
  ngOnInit() {
    this.service.getDrinks().subscribe(
      res =>{
        this.drinkDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  onDelete(d) {
    this.service.deleteDrinks(d).subscribe(
      res =>{
        this.drinkDetails= res;
        location.reload();
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit(d){
    
    this.service.getDrinksById(d).subscribe(
    res =>{
      this.drinkbyid = res;
    },
    err =>{
      console.log(err);
    }
  

  );
  


}

onEdit(d){
  this.service.editDrinks(d,this.response.dbPath).subscribe(
    (res: any) => {
      
     
        this.service.formModel.reset();
        this.ngOnInit();
        //this.toastr.success('New user created!', 'Registration successful.');
    },
        err => {
          console.log(err);
        }
    
  );
}
drinksbyid2;
onSubmit2(d){
    
  this.service.getDrinksById(d).subscribe(
  res =>{
    this.drinksbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);


}


openDialog(id) {

  const dialogRef =  this.dialog.open(ShowDrinksComponent, {
    //width: '50%',
    //height: '50%',
    data: { drinkId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openModifier(id) {

  const dialogRef =  this.dialog.open(ModifierDrinksComponent, {
    //width: '50%',
    //height: '50%',
    data: { drinkId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

public uploadFinished = (event) => {
  this.response = event;
}



ajouterDialog() {
  const dref= this.dialog.open(AjouterDrinkComponent );
  dref.afterClosed().subscribe(result => {
    this.ngOnInit();
    console.log(`Dialog result: ${result}`);
  });
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44319/${serverPath}`;
}




}


