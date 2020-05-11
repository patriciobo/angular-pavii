import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { InicioComponent } from './inicio/inicio.component';
import { FamiliaArticulosComponent } from './familia-articulos/familia-articulos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ArticuloComponent, InicioComponent, FamiliaArticulosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
