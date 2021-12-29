import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  formModel = this.fb.group({
    Adresse: ['']
    
  });

  getLivraisons(){
    
    return this.http.get(this.BaseURI+ '/livraisons');
  }


  PostLivraison( nomUser,phoneNumber,platsId,platName,myDate = new Date()) {
    
    var body = {
      nomUser: nomUser,    
      dateCommande:myDate ,
      phoneNumber: phoneNumber,
      platsId: platsId,
      platName: platName,
      adresse: this.formModel.value.Adresse
    
    };
    return this.http.post(this.BaseURI + '/livraisons', body);
  }
}
