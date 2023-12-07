import { Routes } from '@angular/router';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { DemandComponent } from './components/demand/demand.component';

export const routes: Routes = [
    { path: 'equipments', component: EquipmentComponent },
    { path: 'demands', component: DemandComponent}
];
