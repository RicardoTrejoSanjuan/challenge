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

  public countryList: Array<Country>;
  public con = [
    {key:"AL", name:"Alabama"},
    {key:"AK", name:"Alaska"},
    {key:"AZ", name:"Arizona"},
    {key:"AR", name:"Arkansas"},
    {key:"CA", name:"California"},
    {key:"CO", name:"Colorado"},
    {key:"CT", name:"Connecticut"}
  ]
  constructor(
    private _requestService: RequestService
  ) { }

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
      // var element = new Country(key, value.toString())
      // this.countryList.push(element);
    };
  }
}
