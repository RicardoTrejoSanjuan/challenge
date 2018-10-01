import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [RequestService]
})
export class CountryComponent implements OnInit {

  public countries: Country[];
  public selectedCountry: string[];

  constructor(
    private _requestService: RequestService
  ) { 
    this.countries = [];
    this.selectedCountry = [];
  }

  ngOnInit() {
    this._requestService.getCountries().subscribe(
      result => {
        this.populateCountry(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  populateCountry (data) {
    for (let [key, value] of Object.entries(data)) {
      this.countries.push(new Country(key, value.toString()));
    };
  }
}
