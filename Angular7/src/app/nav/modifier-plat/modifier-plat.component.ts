import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlatsService } from '../../shared/plats.service';

@Component({
  selector: 'app-modifier-plat',
  templateUrl: './modifier-plat.component.html',
  styleUrls: ['./modifier-plat.component.css']
})
export class ModifierPlatComponent implements OnInit {

  constructor(private service:PlatsService,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

    platId;
  ngOnInit() {
    this.platId=this.data.platId;
    this.onSubmit2();
  }

  platsbyid2;
onSubmit2(){
    
  this.service.getPlatsById(this.platId).subscribe(
  res =>{
    this.platsbyid2 = res;
  },
  err =>{
    console.log(err);
  }


);
}

}
