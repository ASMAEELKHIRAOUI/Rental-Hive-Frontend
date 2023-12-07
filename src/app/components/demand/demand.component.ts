import { Component } from '@angular/core';
import { CDemand, Demand } from '../../models/demand';
import { DemandService } from '../../services/demand/demand.service';

@Component({
  selector: 'app-demand',
  standalone: true,
  imports: [],
  templateUrl: './demand.component.html',
  styleUrl: './demand.component.css'
})
export class DemandComponent {
  demands: Demand[] = [];
  toSave: Demand = new CDemand();

  constructor(private demandService: DemandService){}

  ngOnInit(): void {
    this.demandService.getDemands().subscribe((data: Demand[]) => {
      this.demands = data;
    })
  }

  onSubmit(){
    this.demandService.addDemand(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.result);
      },
      error: (err) =>{console.log(err)}
    })
  }

  onSuccessSave(demand?: Demand){
    if(demand){
      this.demands.push(demand);
    }
  }
}
