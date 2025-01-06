import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  id?: number; // id opcional
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5000/api/services/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  addData(newData: Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, newData);
  }
  
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
