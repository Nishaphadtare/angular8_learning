import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
 
  url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  
  constructor(private httpClient: HttpClient) { }

  getDataBBFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key' : 'c1a96d0bfdmshb381d601f01709cp1756f7jsn21b497295676'
    })
   return this.httpClient.get(this.url, {headers: headers})
  }
}
