import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemandComponent } from './components/demand/demand.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, EquipmentComponent, DemandComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalhive-frontend';

  constructor (private http: HttpClient, private modalService: NgbModal){}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
