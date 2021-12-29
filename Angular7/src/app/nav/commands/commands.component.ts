import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/shared/command.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  constructor(public service:CommandService) { }

  commands;
  ngOnInit() {

    this.service.getCommands().subscribe(
      res =>{
        this.commands = res;
      },
      err =>{
        console.log(err);
      }

    );
  }


  toDo(id,nom,dt,st,De,p) {
    this.service.EmailNotif(st,nom,'commande in queue','your submittion is in queue, estimated time: between 30 min and 1h').subscribe();
    this.service.StatusCommand(id,nom,dt,st,De,p,'in queue').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();
        
         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }      
    );
  }

  inProg(id,nom,dt,st,De,p) {
    this.service.EmailNotif(st,nom,'Commnde in progress','your submittion is in queue, estimated time: between 30 min and 1h').subscribe();
    this.service.StatusCommand(id,nom,dt,st,De,p,'in progress').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();
        
         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }      
    );
  }

  Done(id,nom,dt,st,De,p) {
    this.service.EmailNotif(st,nom,'Commande ready','your submittion is in queue, estimated time: between 1 and 3 days').subscribe();
    this.service.StatusCommand(id,nom,dt,st,De,p,'Done').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();
        
         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }      
    );
  }

}
