import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { AjouterDessertComponent } from './nav/ajouter-dessert/ajouter-dessert.component';
import { AjouterDrinkComponent } from './nav/ajouter-drink/ajouter-drink.component';
import { AjouterplatsComponent } from './nav/ajouterplats/ajouterplats.component';
import { CommandsComponent } from './nav/commands/commands.component';
import { DessertsComponent } from './nav/desserts/desserts.component';
import { DrinksComponent } from './nav/drinks/drinks.component';
import { LivraisonComponent } from './nav/livraison/livraison.component';

import { NavComponent } from './nav/nav.component';
import { PlatsComponent } from './nav/plats/plats.component';
import { ProfilComponent } from './nav/profil/profil.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'accueil',component:AccueilComponent},

  {
    path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]
},
{path:'nav',component:NavComponent,canActivate:[AuthGuard],
children: [
  
  { path: 'plats', component: PlatsComponent },{ path: 'desserts', component: DessertsComponent },{ path: 'profil', component: ProfilComponent },
  { path: 'ajouterplats', component: AjouterplatsComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},
  { path: 'commands', component: CommandsComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},
  { path: 'livraison', component:LivraisonComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},
  
  { path: 'ajouter-drink', component: AjouterDrinkComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},
  { path: 'ajouter-dessert', component: AjouterDessertComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Agent'] }},
  { path: 'drinks', component: DrinksComponent }]
},
{path:'agentpanel',component:AgentPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Agent']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
