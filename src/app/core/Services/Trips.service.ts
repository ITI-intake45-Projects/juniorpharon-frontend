
import { Injectable } from '@angular/core';
import { env } from '../../Environment/env';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TripFilter } from '../models/Search/trip-filter';


@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }
 searchTrips(filter: TripFilter): Observable<any> {
    let params = new HttpParams();
    Object.keys(filter).forEach(key => {
      if (filter[key as keyof TripFilter] !== undefined && filter[key as keyof TripFilter] !== null) {
        params = params.set(key, filter[key as keyof TripFilter] as any);
      }
    });
    return this.http.get(`${env.baseApi}Trip/SearchTrip`, { params });
  }

}
