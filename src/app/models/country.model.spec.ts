import { Country } from './country';
import { MatMenuModule } from '@angular/material';

describe("Test for Country", ()=>{

    describe("Test for country", ()=>{
  
     it("should return an object with name", ()=>{
       let country = new Country("GA","Georgia");
       expect(country.name).toEqual("Georgia");
     });

     it("should return an object with key", ()=>{
        let country = new Country("GA","Georgia");
        expect(country.key).toEqual("GA");
      });
    });
  });