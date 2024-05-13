import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../interfaces/cv.interface';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private http = inject(HttpClient);

  private baseUrl: string = '../../assets/data/cv.json'

  getCv():Observable<Cv> {
    return this.http.get<Cv>(this.baseUrl);
  }
}
