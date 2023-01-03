import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignrapidapiService {


   Url = 'https:/ng/bb-finance.p.rapidapi.com/news/list';

  constructor(private httpClient : HttpClient) { }


  getDataBBFinance(){
    return this.httpClient.get(this.Url);
  }
}

