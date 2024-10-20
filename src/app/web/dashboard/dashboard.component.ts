import { Component } from '@angular/core';
import { PowerBiEmbedComponent } from '../power-bi-embed/power-bi-embed.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, PowerBIEmbedModule, PowerBiEmbedComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
