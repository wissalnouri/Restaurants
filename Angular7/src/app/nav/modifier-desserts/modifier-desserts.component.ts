import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DessertService } from '../../shared/dessert.service';


@Component({
  selector: 'app-modifier-desserts',
  templateUrl: './modifier-desserts.component.html',
  styleUrls: ['./modifier-desserts.component.css']
})
export class ModifierDessertsComponent implements OnInit {

  constructor(private service:DessertService,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

    dessertId;
  ngOnInit() {
    this.dessertId=this.data.dessertId;
    this.onSubmit2();
  }

  dessertbyid2;
onSubmit2(){
    
  this.service.getDessertsById(this.dessertId).subscribe(
  res =>{
    this.dessertbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);
}

}