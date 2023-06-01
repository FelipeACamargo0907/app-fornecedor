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

  getSupplier() : Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.url);
  }
  save(supplier : Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.url, supplier);
  }
  delete (supplier : Supplier): Observable<void>{
    return this.http.delete<void>(`${this.url}/${supplier.id}`);
  }
  update (supplier : Supplier): Observable<Supplier>{
    return this.http.put<Supplier>(`${this.url}/${supplier.id}`, supplier);
  }
  clean(supplier : Supplier): Observable<void>{
    return this.http.delete<void>(`${this.url}/${supplier.id}`);
  }
}
