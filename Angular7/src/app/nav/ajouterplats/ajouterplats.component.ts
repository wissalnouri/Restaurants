import { HttpClient,HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/shared/plats.service';

@Component({
  selector: 'app-ajouterplats',
  templateUrl: './ajouterplats.component.html',
  styleUrls: ['./ajouterplats.component.css']
})
export class AjouterplatsComponent implements OnInit {

  constructor(public service: PlatsService,private router:Router) { }
  myplats;
  public response: {dbPath: ''};


  ngOnInit() {

  }

  onSubmit() {
    this.service.PostPlats(this.response.dbPath).subscribe(
      (res: any) => {
        
          this.myplats = res;
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
