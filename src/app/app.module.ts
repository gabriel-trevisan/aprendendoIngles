import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { PoModule } from '@portinari/portinari-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoNavbarModule } from '@portinari/portinari-ui';
import { PoContainerModule } from '@portinari/portinari-ui';
import { PoPageModule } from '@portinari/portinari-ui';
import { PoProgressModule } from '@portinari/portinari-ui';
import { PoToolbarModule } from '@portinari/portinari-ui';
import { PoFieldModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoNavbarModule,
    BrowserAnimationsModule,
    PoContainerModule,
    PoProgressModule,
    PoPageModule,
    PoToolbarModule,
    PoFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
