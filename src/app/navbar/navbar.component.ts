import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  constructor() {}

  ngOnInit() {
   
    
   
  }
}
