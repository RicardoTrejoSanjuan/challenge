
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatButtonModule, 
  MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiselectComponent } from './utilities/multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    MultiselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatButtonModule, 
    MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
