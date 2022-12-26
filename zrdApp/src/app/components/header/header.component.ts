import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onFilter = new EventEmitter<string>();
  applyFilter($event: Event) {
    const filter = (event?.target as HTMLInputElement).value;
    this.onFilter.emit(filter);
  }
}


