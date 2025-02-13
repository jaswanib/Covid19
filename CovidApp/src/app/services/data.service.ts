
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private canadaUrl = 'https://health-infobase.canada.ca/covid-19/epidemiological-summary-covid-19-cases.html#a1';
  private ontarioUrl = 'https://covid-19.ontario.ca#covidNumbersSection';
  private localDataUrl = 'assets/data/ontario-covid-data.json';

  constructor(private http: HttpClient) { }

  getCanadaData(): Observable<any> {
    return this.http.get<any>(this.canadaUrl);
  }

  getOntarioData(): Observable<any> {
    return this.http.get<any>(this.ontarioUrl);
  }

  getLocalData(): Observable<any> {
    return this.http.get<any>(this.localDataUrl);
  }
}
