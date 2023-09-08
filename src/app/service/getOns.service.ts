import {Injectable} from "@angular/core";
import { HttpHeaders, HttpClient,HttpErrorResponse } from "@angular/common/http";
import {Observable} from "rxjs";
import {gold} from "../model/gold.model";
import {borsaModel,borsa} from "../model/borsa.model";

@Injectable({
  providedIn:'root'
})
export class getOnsService{
  getheaders(){
    return new HttpHeaders({
      "Content-Type" : "application/json",
      'Authorization' : 'apikey 1CD6gqgH4pux9StzIIJT8I:0rlyxqUWEHMrdeQucm1jPp'
    });
  }
  header = this.getheaders();
  constructor(private http:HttpClient) {}
  root_url="https://api.collectapi.com/economy/";
  getOns():Observable<gold>{
    return this.http.get<gold>(this.root_url+"goldPrice",{headers : this.header});
  }
  getBorsa():Observable<borsa>{
    return this.http.get<borsa>(this.root_url+"liveBorsa",{headers:this.header});
  }

}
