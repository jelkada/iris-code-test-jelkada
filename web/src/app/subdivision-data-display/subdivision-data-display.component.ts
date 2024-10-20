import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { take } from 'rxjs';

import { SubdivisionService } from '../services/subdivision.service';
import { SubdivisionData } from '../model/subdivision.model';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FilterApiType, FilterType } from '../constants/subdivision.constants';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) tableSort!: MatSort;

  dataSource = new MatTableDataSource<SubdivisionData>([]);
  displayedColumns: string[] = [];
  filterOptions = Object.values(FilterType);

  private allSubdivisionData: SubdivisionData[] = [];
  private subdivisionService = inject(SubdivisionService);

  ngOnInit(): void {
    console.log('\n\n ngOnInit()');
    this.subdivisionService.getSubdivisionData()
      .pipe(take(1))
      .subscribe(((data: SubdivisionData[]) => {
        console.log('\n data: ', data);
        this.displayedColumns = Object.keys(data[0]);
        console.log('\n this.displayedColumns: ', this.displayedColumns);
        this.allSubdivisionData = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator as MatPaginator;
        this.dataSource.sort = this.tableSort;
      }));
  }

  onFilterChange($event: MatButtonToggleChange): void {
    console.log('\n $event: ', $event);

    if ($event.value === FilterType.All) {
      this.dataSource.data = this.allSubdivisionData;
    } else {
      const apiFilterKey = this.getFilterKeyByValue($event.value) as keyof typeof FilterApiType;
      this.dataSource.data = this.allSubdivisionData.filter((subdivisionData: SubdivisionData) =>
        !!subdivisionData[FilterApiType[apiFilterKey]]
      );
    }
  }

  private getFilterKeyByValue = (value: string): string | undefined => {
    const filterEntries = Object.entries(FilterType);
    const filterKey = filterEntries.filter(entry => entry[1] === value);

    return filterKey && filterKey.length ? filterKey[0][0] : undefined;
  }
}
