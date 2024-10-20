import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

import { SubdivisionApiData, SubdivisionData } from "../model/subdivision.model";
import { API_BASE_URL, SUBDIVISION_URL } from "../constants/subdivision.constants";

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {

  http = inject(HttpClient);

  getSubdivisionData(): Observable<SubdivisionData[]> {
    console.log('\n\n getSubdivisionData() ')
    return this.http.get<SubdivisionApiData>(API_BASE_URL + SUBDIVISION_URL)
      .pipe(map((result: SubdivisionApiData) => result.subdivisions));
  }
} 
