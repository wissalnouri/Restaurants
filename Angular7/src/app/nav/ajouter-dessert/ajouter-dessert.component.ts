import { HttpClient,HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from 'src/app/shared/dessert.service';

@Component({
  selector: 'app-ajouter-dessert',
  templateUrl: './ajouter-dessert.component.html',
  styleUrls: ['./ajouter-dessert.component.css']
})
export class AjouterDessertComponent implements OnInit {

  constructor(public service: DessertService,private router:Router) { }
  public response: {dbPath: ''};
  mydesserts;
  ngOnInit() {

  }

  onSubmit() {
    this.service.PostDesserts(this.response.dbPath).subscribe(
      (res: any) => {
        
          this.mydesserts= res;
          this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  
  public uploadFinished = (event) => {
    this.response = event;
  }

  



  

}

