export interface EquipmentDemand {
    equipmentId?: number;
    startDate?: string;
    endDate?: string;
}

export class CEquipmentDemand implements EquipmentDemand{
    constructor( 
     public equipmentId: number,
     public startDate: string,
     public endDate: string,
    ){}
}
