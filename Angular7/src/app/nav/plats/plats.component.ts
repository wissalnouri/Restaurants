import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ModifierPlatComponent } from 'src/app/nav/modifier-plat/modifier-plat.component';
import { PlatsService } from 'src/app/shared/plats.service';
import { UserService } from 'src/app/shared/user.service';
import { AjouterplatsComponent } from '../ajouterplats/ajouterplats.component';
import { ShowPlatsComponent } from '../show-plats/show-plats.component';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  constructor(private router:Router,private service:PlatsService,private uService:UserService,public dialog: MatDialog) { }
  platsDetalis;
  platsbyid;
  public response: {dbPath: ''}
  ngOnInit() {
    this.service.getPlats().subscribe(
      res =>{
        this.platsDetalis = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  onDelete(d) {
    this.service.deletePlat(d).subscribe(
      res =>{
        this.platsDetalis= res;
        this.ngOnInit();
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit(d){
    
    this.service.getPlatsById(d).subscribe(
    res =>{
      this.platsbyid = res;
    },
    err =>{
      console.log(err);
    }
  

  );


}

onEdit(d){
  this.service.editPlat(d,this.response.dbPath).subscribe(
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
platsbyid2;
onSubmit2(d){
    
  this.service.getPlatsById(d).subscribe(
  res =>{
    this.platsbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);


}


openDialog(id) {

  const dialogRef =  this.dialog.open(ShowPlatsComponent, {
    //width: '50%',
    height: '75%',
    data: { platId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openModifier(id) {

  const dialogRef =  this.dialog.open(ModifierPlatComponent, {
    //width: '50%',
    //height: '50%',
    data: { platId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

public uploadFinished = (event) => {
  this.response = event;
}



ajouterDialog() {
  const dref= this.dialog.open(AjouterplatsComponent);
  dref.afterClosed().subscribe(result => {
    this.ngOnInit();
    console.log(`Dialog result: ${result}`);
  });
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44319/${serverPath}`;
}




}
