import { Demand } from '../../models/demand';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ResponseModel } from '../../core/request/response.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DemandService {

  private apiUrl = "http://127.0.0.1:8081/api/v1/demand";
  
  constructor(private http: HttpClient) { }

  getDemands(): Observable<Demand[]>{
    return this.http.get<Demand[]>(this.apiUrl).pipe(
      map((res: any) => res.result)
    )
  }

  addDemand(demand: Demand): Observable<Demand>{
    return this.http.post<Demand>(this.apiUrl, demand);
  }

}
