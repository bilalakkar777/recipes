import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

  constructor() { }

  @Input() countries: string[];

  @Output() countrySelected = new EventEmitter();

  selectedCountry: string;

  sliderOpts = {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesOffsetBefore: 20
  };

  selectCountry(country: string) {
      if (this.selectedCountry === country) {
          this.selectedCountry = undefined;
      } else {
          this.selectedCountry = country;
      }
      this.countrySelected.emit(this.selectedCountry);
  }

  isSelected(country: string) {
      return country === this.selectedCountry;
  }



}
