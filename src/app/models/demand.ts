export interface Demand {
    id?: number;
    offerId?: number;
}

export class CDemand implements Demand{
    constructor(
        public id?: number,
        public offerId?: number
    ){}
}