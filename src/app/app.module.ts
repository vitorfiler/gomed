import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { PainelComponent } from './pages/painel/painel.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscaComponent } from './pages/home/busca/busca.component';
import { InfoComponent } from './pages/home/info/info.component';
import { RecomendacoesComponent } from './pages/home/recomendacoes/recomendacoes.component';
import { ParceirosComponent } from './pages/home/parceiros/parceiros.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AppComponent, PainelComponent, HomeComponent, BuscaComponent, InfoComponent, RecomendacoesComponent, ParceirosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PageLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatSelectModule,
    
    // Vex
    VexModule,
    CustomLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
