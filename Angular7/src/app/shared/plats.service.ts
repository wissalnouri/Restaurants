import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  getPlats(){
    
    return this.http.get(this.BaseURI+ '/plats');
  }
  formModel = this.fb.group({
    Nom: [''],
    Prix: [''],
    Image: [''],
    Description: [''],
  });
  PostPlats(imgPath) {
    
    var body = {
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
      prix:this.formModel.value.Prix,
      image:imgPath
    
    };
    return this.http.post(this.BaseURI + '/plats', body);
  }

  deletePlat(id){
    
    return this.http.delete(this.BaseURI+ '/plats/' + id);
  }

  editPlat(d,imgPath){
    var body = {
      id : d,
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
      prix:this.formModel.value.Prix,
      image:imgPath
    
    };
    
    return this.http.put(this.BaseURI + '/plats/' + d, body);
  }
  getPlatsById(id){
    
    return this.http.get(this.BaseURI+ '/plats/' + id);
  }
  

}
