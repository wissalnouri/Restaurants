import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';


  getCommands(){
    
    return this.http.get(this.BaseURI+ '/commandes');
  }


  PostCommande( nomUser,phoneNumber,platsId,platName,myDate = new Date()) {
    
    var body = {
      nomUser: nomUser,    
      dateCommande:myDate ,
      phoneNumber: phoneNumber,
      platsId: platsId,
      platName: platName
    
    };
    return this.http.post(this.BaseURI + '/commandes', body);
  }
  StatusCommand(id,nom,dt,st,De,p,Status) {
    var body = {
      idCommande: id,
      nomUser: nom,
      dateCommande: dt,
      phoneNumber: st,
      platsId: De,
      platName:p,
      status:Status

    };
    return this.http.put(this.BaseURI + '/commandes/' + id, body);
  }
  EmailNotif(toId,toName,sub,eBody){
    var body = {
    EmailToId:toId,
    EmailToName:toName,
    EmailSubject:sub,
    EmailBody:eBody
    };
    return this.http.post(this.BaseURI + '/Email', body);
  }
}
