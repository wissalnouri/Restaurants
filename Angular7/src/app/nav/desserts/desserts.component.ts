import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ModifierDessertsComponent } from 'src/app/nav/modifier-desserts/modifier-desserts.component';
import { DessertService } from 'src/app/shared/dessert.service';
import { UserService } from 'src/app/shared/user.service';
import { AjouterDessertComponent } from '../ajouter-dessert/ajouter-dessert.component';

import { ShowDessertsComponent } from '../show-desserts/show-desserts.component';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class   DessertsComponent  implements OnInit {

  constructor(private router:Router,private service:DessertService,private uService:UserService,public dialog: MatDialog) { }
  dessertDetails;
  dessertbyid;
  public response: {dbPath: ''}
  ngOnInit() {
    this.service.getDesserts().subscribe(
      res =>{
        this.dessertDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  onDelete(d) {
    this.service.deleteDesserts(d).subscribe(
      res =>{
        this.dessertDetails= res;
        location.reload();
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit(d){
    
    this.service.getDessertsById(d).subscribe(
    res =>{
      this.dessertbyid = res;
    },
    err =>{
      console.log(err);
    }
  

  );
  


}

onEdit(d){
  this.service.editDesserts(d,this.response.dbPath).subscribe(
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
dessertbyid2;
onSubmit2(d){
    
  this.service.getDessertsById(d).subscribe(
  res =>{
    this.dessertbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);


}


openDialog(id) {

  const dialogRef =  this.dialog.open(ShowDessertsComponent, {
    //width: '50%',
    //height: '50%',
    data: { dessertId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openModifier(id) {

  const dialogRef =  this.dialog.open(ModifierDessertsComponent, {
    //width: '50%',
    //height: '50%',
    data: { dessertId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

public uploadFinished = (event) => {
  this.response = event;
}



ajouterDialog() {
  const dref= this.dialog.open(AjouterDessertComponent );
  dref.afterClosed().subscribe(result => {
    this.ngOnInit();
    console.log(`Dialog result: ${result}`);
  });
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44319/${serverPath}`;
}




}


