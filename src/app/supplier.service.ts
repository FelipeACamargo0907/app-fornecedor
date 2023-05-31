import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = "http://localhost:3000/supplier";

  constructor(private http : HttpClient) { }

  getClient() : Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.url);
  }

}
