import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule,
    MatExpansionModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly panelOpenState = signal(false);
}
