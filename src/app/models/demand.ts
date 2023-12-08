export interface Demand {
    title?: string;
    description?: string;
    user?: {
      name: string;
      email: string;
      phoneNumber: string;
      role: string;
    };
    equipmentDemands?: Array<{
      equipmentId: number;
      startDate: string;
      endDate: string;
    }>;
 
}
export class CDemand implements Demand{
    constructor(
        public title?: string,
        public description?: string,
        public user?: {
          name: string;
          email: string;
          phoneNumber: string;
          role: string;
        },
        public equipmentDemands?: {
          equipmentId: number;
          startDate: string;
          endDate: string;
        }[]
    ) {}
  }