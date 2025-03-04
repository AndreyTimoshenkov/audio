import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TableComponent } from "./components/table/table.component";
import { PlayerComponent } from "./components/player/player.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule,
    HeaderComponent,
    MatButtonModule,
    MatIconModule,
    TableComponent,
    PlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
