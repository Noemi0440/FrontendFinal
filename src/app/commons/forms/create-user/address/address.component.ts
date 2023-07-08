import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit{
  id:number;
  constructor(){

  }
  
  ngOnInit(): void {
    this.id=history.state.id; 
  }

}
