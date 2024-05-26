import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompounds(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
    getCompound(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
    updateCompound(id: number, compound: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, compound);
  }
}
