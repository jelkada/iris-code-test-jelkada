import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { of } from 'rxjs';

import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import { SubdivisionService } from '../services/subdivision.service';
import { mockSubdivisionApiResponse } from '../model/subdivision.model';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';
import { FilterType } from '../constants/subdivision.constants';

describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
  let subdivisionService: SubdivisionService;

  const mockSubdivisionService = jasmine.createSpyObj<SubdivisionService>('subdivisionService', [ 'getSubdivisionData']);
  mockSubdivisionService.getSubdivisionData.and.returnValue(of(mockSubdivisionApiResponse.subdivisions));
  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        MatTableModule,
        MatSortModule,
      ],
      declarations: [ SubdivisionDataDisplayComponent ],
      providers: [{ provide: SubdivisionService, useValue: mockSubdivisionService }],
    })
    .compileComponents();    

    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);

    subdivisionService = fixture.debugElement.injector.get(SubdivisionService);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should populate the table with data', () => {
    expect(subdivisionService.getSubdivisionData).toHaveBeenCalled();
    expect(component.dataSource.data.length).toEqual(mockSubdivisionApiResponse.subdivisions.length);
  });

  describe('filter table data', () => {
    it('should filter the table data when filter value is activeSections', () => {
      const changeEvent = new MatButtonToggleChange({} as  MatButtonToggle, FilterType.Active);
      component.onFilterChange(changeEvent);
  
      const activeSections = mockSubdivisionApiResponse.subdivisions.filter(obj => !!obj.activeSections)
      expect(component.dataSource.data.length).toEqual(activeSections.length);
    });

    it('should filter the table data when filter value is futureSections', () => {
      const changeEvent = new MatButtonToggleChange({} as  MatButtonToggle, FilterType.Future);
      component.onFilterChange(changeEvent);
  
      const futureSections = mockSubdivisionApiResponse.subdivisions.filter(obj => !!obj.futureSections)
      expect(component.dataSource.data.length).toEqual(futureSections.length);
    });

    it('should filter the table data when filter value is futureSections', () => {
      const changeEvent = new MatButtonToggleChange({} as  MatButtonToggle, FilterType.BuildOut);
      component.onFilterChange(changeEvent);
  
      const builtOutSections = mockSubdivisionApiResponse.subdivisions.filter(obj => !!obj.builtOutSections)
      expect(component.dataSource.data.length).toEqual(builtOutSections.length);
    });
  });
});
