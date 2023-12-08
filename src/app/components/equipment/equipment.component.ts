import { EquipmentService } from '../../services/equipment/equipment.service';
import { CEquipment, Equipment } from './../../models/equipment';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {

  equipments: Equipment[] = [];
  toSave: Equipment = new CEquipment();

  constructor(private equipmentService: EquipmentService){}

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
      this.equipments = data;
    })
  }

  onSubmit(){
    this.equipmentService.addEquipments(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.data);
      },
      error: (err)=>{console.log(err)}
    })
  }

  onSuccessSave(equipment?: Equipment){
    if(equipment){
      this.equipments.push(equipment);
    }
  }

}
