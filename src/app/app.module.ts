import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { idReducer, nameReducer } from './user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AddItemComponent } from './item/add-item/add-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './ItemsStore/items.effects';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent,
    ItemsComponent,
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot({ id: idReducer, name: nameReducer }),
    EffectsModule.forRoot([ItemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
