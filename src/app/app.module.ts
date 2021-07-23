import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DespreNoiComponent } from './despre-noi/despre-noi.component';
import { ContactComponent } from './contact/contact.component';
import { TraininguriComponent } from './traininguri/traininguri.component';
import { ConferinteComponent } from './conferinte/conferinte.component';
import { ConcursuriComponent } from './concursuri/concursuri.component';
import { EchipaComponent } from './echipa/echipa.component';
import { ParteneriComponent } from './parteneri/parteneri.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DespreNoiComponent,
    ContactComponent,
    TraininguriComponent,
    ConferinteComponent,
    ConcursuriComponent,
    EchipaComponent,
    ParteneriComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
