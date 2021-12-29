import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoginComponent } from './user/login/login.component';
import { NavComponent } from './nav/nav.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlatsComponent } from './nav/plats/plats.component';
import { ProfilComponent } from './nav/profil/profil.component';
import { AjouterplatsComponent } from './nav/ajouterplats/ajouterplats.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterDrinkComponent } from './nav/ajouter-drink/ajouter-drink.component';
import { DrinksComponent } from './nav/drinks/drinks.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowPlatsComponent } from './nav/show-plats/show-plats.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadComponent } from './nav/upload/upload.component';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommandsComponent } from './nav/commands/commands.component';
import { ModifierPlatComponent } from './nav/modifier-plat/modifier-plat.component';
import {MatSelectModule} from '@angular/material/select';
import { ModifierDrinksComponent } from './nav/modifier-drinks/modifier-drinks.component';
import { ShowDrinksComponent } from './nav/show-drinks/show-drinks.component';
import { DessertsComponent } from './nav/desserts/desserts.component';
import { ModifierDessertsComponent } from './nav/modifier-desserts/modifier-desserts.component';
import { AjouterDessertComponent } from './nav/ajouter-dessert/ajouter-dessert.component';
import { ShowDessertsComponent } from './nav/show-desserts/show-desserts.component';
import { LivraisonComponent } from './nav/livraison/livraison.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    NavComponent,
    AgentPanelComponent,
    ForbiddenComponent,
    PlatsComponent,
    ProfilComponent,
    AjouterplatsComponent,
    AccueilComponent,
    AjouterDrinkComponent,
    DrinksComponent,
    ShowPlatsComponent,
    UploadComponent,
    CommandsComponent,
    ModifierPlatComponent,
    ModifierDrinksComponent,
    ShowDrinksComponent,
    DessertsComponent,
    ModifierDessertsComponent,
    AjouterDessertComponent,
    ShowDessertsComponent,
    LivraisonComponent
  
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents:[PlatsComponent,ShowPlatsComponent,ModifierPlatComponent,ShowDrinksComponent,ShowDessertsComponent],
})
export class AppModule { }
