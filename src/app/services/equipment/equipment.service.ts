import { Injectable } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ResponseModel } from '../../core/request/response.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {

  private apiUrl = "http://localhost:8081/api/v1/equipments";

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.apiUrl).pipe(
        map((res: any) => res.data)
    )
  }

  addEquipments(equipment: Equipment): Observable<ResponseModel<Equipment>>{
    return this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }
  
}
