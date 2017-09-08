import {Injectable} from "@angular/core";
import {CarsService} from "./cars.service";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class HttpCarsService implements CarsService {

  private baseUrl = "http://localhost:3000/cars";
  private availableUrl="http://localhost:3000/available";

  constructor(private http: Http){

  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl).map(response => response.json())
  }

  save(car: any): Observable<any> {
    return this.http.post(this.baseUrl, car)
  }

  update(car: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${car.id}`, car)
  }
  remove(car:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${car.id}`)
  };

  saveId(id:any): Observable<any>{
    return this.http.post(this.availableUrl, {id:id})
  }

  removeId(id:any): Observable<any>{
    return this.http.delete(this.availableUrl+"/"+id)
  }
}
