import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  city:string=''

  @Output() citySelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  searchCity(){
    if(this.city.trim() !== ''){
      this.citySelected.emit(this.city)
      this.city=''
    }
  }
}
