import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  getDesserts(){
    
    return this.http.get(this.BaseURI+ '/desserts');
  }
  formModel = this.fb.group({
    Nom: [''],
    Prix: [''],
    Image: [''],
    Description: [''],
  });
  PostDesserts(imgPath) {
    
    
    var body = {
      nom: this.formModel.value.Nom,
      description:this.formModel.value.Description,    
      prix:this.formModel.value.Prix,
     image:imgPath
    
    };
    return this.http.post(this.BaseURI + '/desserts', body);
  }

  deleteDesserts(id){
    
    return this.http.delete(this.BaseURI+ '/desserts/' + id);
  }

  editDesserts(d,imgPath){
    var body = {
      id : d,
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
      prix:this.formModel.value.Prix,
      image:imgPath
    
    };
    
    return this.http.put(this.BaseURI + '/desserts/' + d, body);
  }
  getDessertsById(id){
    
    return this.http.get(this.BaseURI+ '/desserts/' + id);
  }

  

  
  
  

}
