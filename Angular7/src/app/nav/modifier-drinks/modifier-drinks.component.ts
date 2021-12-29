import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DrinkService } from '../../shared/drink.service';


@Component({
  selector: 'app-modifier-drinks',
  templateUrl: './modifier-drinks.component.html',
  styleUrls: ['./modifier-drinks.component.css']
})
export class ModifierDrinksComponent implements OnInit {

  constructor(private service:DrinkService,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

    drinkId;
  ngOnInit() {
    this.drinkId=this.data.drinkId;
    this.onSubmit2();
  }

  drinkbyid2;
onSubmit2(){
    
  this.service.getDrinksById(this.drinkId).subscribe(
  res =>{
    this.drinkbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);
}

}