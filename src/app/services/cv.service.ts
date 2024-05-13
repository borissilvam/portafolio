import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../interfaces/cv.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private http = inject(HttpClient);

  private baseUrl: string = environment.url;

  getCv():Observable<Cv> {
    return this.http.get<Cv>(this.baseUrl);
  }
}
