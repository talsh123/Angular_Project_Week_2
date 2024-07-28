import { Component, OnInit } from '@angular/core';

import {
  Column,
  DataService,
  PeriodicElement,
} from '../../services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  tableData: PeriodicElement[] = [];
  showingData: PeriodicElement[] = [];
  columns: String[] = [];

  // Pagination variables
  steps: string = '';
  paginationActive = false;
  currentPage = 1;
  maxPages: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getColumns().subscribe({
      next: (res) => {
        res.forEach((columnObject) => {
          this.columns.push(columnObject.name);
        });
      },
    });

    this.dataService.getTableData().subscribe({
      next: (res) => {
        this.tableData = res;
        this.showingData = res;
      },
    });
  }

  onPagination() {
    this.currentPage = 1;
    this.maxPages = Math.ceil(this.tableData.length / parseInt(this.steps));
    this.slicingData();
  }

  isPaginationActive() {
    this.paginationActive = true;
    return this.tableData.length > this.showingData.length;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.slicingData();
    }
  }

  nextPage() {
    if (this.maxPages > this.currentPage) {
      this.currentPage++;
      this.slicingData();
    }
  }

  slicingData() {
    this.showingData = this.tableData.slice(
      (this.currentPage - 1) * parseInt(this.steps),
      this.currentPage * parseInt(this.steps)
    );
  }
}
