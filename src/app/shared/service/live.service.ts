import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'https://64691c2b03bb12ac208656c6.mockapi.io/agenda/lives';

  httpOptions = {
     headers : new HttpHeaders({
      'content-type': 'application/json'
    })
  };
    constructor(
        private httpClient: HttpClient) { }
  
    public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>('https://run.mocky.io/v3/ebfa3d7f-d8f0-4979-ac08-13c8075fb2b8');
      return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
    }
  }