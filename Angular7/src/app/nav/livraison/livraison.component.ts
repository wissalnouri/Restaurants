import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/shared/livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  constructor(public service:LivraisonService) { }
livraison;
  ngOnInit() {

    this.service.getLivraisons().subscribe(
      res =>{
        this.livraison= res;
      },
      err =>{
        console.log(err);
      }

    );
  }

}
