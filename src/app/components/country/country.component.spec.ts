import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CountryComponent } from './country.component';
import {CommonModule} from '@angular/common';
import { Country } from '../../models/country';
import { RequestService } from '../../services/request.service';

import { MultiselectComponent } from '../../utilities/multiselect/multiselect.component';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatButtonModule, 
  MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
  import { NgModule } from '@angular/core';

  import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { HttpClientModule } from '@angular/common/http';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent, MultiselectComponent, Country, RequestService],
      imports: [Component,
        CommonModule,
        NgModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatButtonModule, 
        MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        OverlayModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
