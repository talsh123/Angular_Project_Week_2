import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Column {
  position: number;
  name: string;
}

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const path = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getColumns(): Observable<Column[]> {
    return this.httpClient.get<Column[]>(path + 'columns');
  }

  getTableData(): Observable<PeriodicElement[]> {
    return this.httpClient.get<PeriodicElement[]>(path + 'tableData');
  }
}
