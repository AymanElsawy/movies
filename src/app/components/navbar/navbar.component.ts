import { MoviesService } from 'src/app/services/movies.service';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  details!: boolean;
  constructor(private MoviesService: MoviesService) {}
  ngOnInit() {
    this.MoviesService.details.subscribe((details) => {
      this.details = details;
    });
  }
}
