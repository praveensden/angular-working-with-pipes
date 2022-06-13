import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;
  car: object = {
    name: 'BMW',
    model: 'classic',
    yom: 2016,
    owner: 'pRAVEEN',
  };
  onMilesChange(event: Event) {
    this.miles = Number((event.target as HTMLInputElement).value);
  }
  onHeightChange(event: Event) {
    this.height = Number((event.target as HTMLInputElement).value);
  }
  OnNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }
  onAmountChange(event: Event) {
    this.amount = parseInt((event.target as HTMLInputElement).value);
  }
  
}
