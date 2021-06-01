import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MovieFormComponent } from './movie/movie-form/movie-form.component';
//import { RfFormComponent } from './movie/rf-form/rf-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviemodelModule } from './movie/moviemodel/moviemodel.module';
import { MovieserviceService } from './movie/movieservice.service';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviemodelModule
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
