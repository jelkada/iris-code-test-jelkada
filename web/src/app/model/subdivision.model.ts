export interface SubdivisionApiData {
  subdivisions: SubdivisionData[];
}

export interface SubdivisionData {
  id: number;
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  fieldSurveyTerritoryId: number;
  marketId: number;
  subdivisionStatusId: number;
  surveyMethodId: number;
  activeSections: number;
  futureSections: number;
  builtOutSections: number;
  totalLots: number;
  fieldSurveyTerritoryName: string;
  marketName: string;
  marketAbbreviation: string;
  subdivisionStatusCode: string;
  surveyMethodCode: string;
  county: string;
  community: string | null;
  zoom17Date: string;
  zoom18Date: string;
  subdivisionGeometryId: string | null;
  subdivisionGeometryBoundingBoxId: string | null;
  subdivisionGeometryBoundaryId: string | null;
  subdivisionGeometryIntelligenceBoundaryId: number;
  subdivisionGeometryIntelligenceBoundaryStatusId: number;
  subdivisionGeometryIntelligenceBoundaryStatusCode: string;
  subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
  nearMapImageDate: string;
  imageBoxId: number;
  mostRecentIPointBatchDate: string | null;
  iPoints: string | null;
  validatediPoints: string | null;
  subdivisionSpecificStatus: string;
}

export const mockSubdivisionApiResponse: SubdivisionApiData = {
  subdivisions: [
    {
      id: 26951,
      code: '001B3',
      name: 'Alexander Park',
      longitude: -115.07067,
      latitude: 36.233263,
      fieldSurveyTerritoryId: 3782,
      marketId: 16,
      subdivisionStatusId: 2,
      surveyMethodId: 2,
      activeSections: 0,
      futureSections: 1,
      builtOutSections: 2,
      totalLots: 237,
      fieldSurveyTerritoryName: 'EldorBI',
      marketName: 'Las Vegas',
      marketAbbreviation: 'LV',
      subdivisionStatusCode: 'Future',
      surveyMethodCode: 'DRIVE',
      county: 'Clark',
      community: null,
      zoom17Date: '2023-08-11T18:20:25.557Z',
      zoom18Date: '2023-08-11T18:20:25.557Z',
      subdivisionGeometryId: null,
      subdivisionGeometryBoundingBoxId: null,
      subdivisionGeometryBoundaryId: null,
      subdivisionGeometryIntelligenceBoundaryId: 24714,
      subdivisionGeometryIntelligenceBoundaryStatusId: 4,
      subdivisionGeometryIntelligenceBoundaryStatusCode: 'Finalized',
      subdivisionGeometryIntelligenceBoundaryStatusChangeDate: '2022-07-14T04:41:38.403Z',
      nearMapImageDate: '2023-06-17T18:02:42.000Z',
      imageBoxId: 59809,
      mostRecentIPointBatchDate: '2023-07-07T00:00:00.000Z',
      iPoints: null,
      validatediPoints: null,
      subdivisionSpecificStatus: 'Future'
    },
    {
      id: 26952,
      code: '001D7',
      name: 'Searchlight and Airpark',
      longitude: -114.91801,
      latitude: 35.460599,
      fieldSurveyTerritoryId: 1693,
      marketId: 16,
      subdivisionStatusId: 2,
      surveyMethodId: 2,
      activeSections: 0,
      futureSections: 1,
      builtOutSections: 0,
      totalLots: 32,
      fieldSurveyTerritoryName: 'Search/Air',
      marketName: 'Las Vegas',
      marketAbbreviation: 'LV',
      subdivisionStatusCode: 'Future',
      surveyMethodCode: 'DRIVE',
      county: 'Clark',
      community: null,
      zoom17Date: '2023-07-02T18:02:02.873Z',
      zoom18Date: '2023-05-19T21:27:14.000Z',
      subdivisionGeometryId: null,
      subdivisionGeometryBoundingBoxId: null,
      subdivisionGeometryBoundaryId: null,
      subdivisionGeometryIntelligenceBoundaryId: 58509,
      subdivisionGeometryIntelligenceBoundaryStatusId: 2,
      subdivisionGeometryIntelligenceBoundaryStatusCode: 'Default',
      subdivisionGeometryIntelligenceBoundaryStatusChangeDate: '2020-08-25T18:16:50.463Z',
      nearMapImageDate: '2022-07-06T17:13:41.000Z',
      imageBoxId: 59810,
      mostRecentIPointBatchDate: null,
      iPoints: null,
      validatediPoints: null,
      subdivisionSpecificStatus: 'Future'
    },
    {
      id: 26962,
      code: '003D6',
      name: 'MacDonald Highlands/Bent Green',
      longitude: -115.04183,
      latitude: 36.005609,
      fieldSurveyTerritoryId: 1686,
      marketId: 16,
      subdivisionStatusId: 4,
      surveyMethodId: 9,
      activeSections: 0,
      futureSections: 0,
      builtOutSections: 1,
      totalLots: 33,
      fieldSurveyTerritoryName: 'HNBA',
      marketName: 'Las Vegas',
      marketAbbreviation: 'LV',
      subdivisionStatusCode: 'Builtout',
      surveyMethodCode: 'NEARMAP',
      county: 'Clark',
      community: 'MacDonald Highlands',
      zoom17Date: '2023-07-02T18:02:02.873Z',
      zoom18Date: '2023-06-30T18:26:32.957Z',
      subdivisionGeometryId: null,
      subdivisionGeometryBoundingBoxId: null,
      subdivisionGeometryBoundaryId: null,
      subdivisionGeometryIntelligenceBoundaryId: 24723,
      subdivisionGeometryIntelligenceBoundaryStatusId: 4,
      subdivisionGeometryIntelligenceBoundaryStatusCode: 'Finalized',
      subdivisionGeometryIntelligenceBoundaryStatusChangeDate: '2020-08-16T00:00:00.000Z',
      nearMapImageDate: '2023-06-06T23:50:55.000Z',
      imageBoxId: 59820,
      mostRecentIPointBatchDate: '2020-10-29T00:00:00.000Z',
      iPoints: null,
      validatediPoints: null,
      subdivisionSpecificStatus: 'BO 1Q22'
    },
    {
      id: 26964,
      code: '003E6',
      name: 'Diamond Ridge',
      longitude: -114.8257,
      latitude: 35.979154,
      fieldSurveyTerritoryId: 1703,
      marketId: 16,
      subdivisionStatusId: 2,
      surveyMethodId: 9,
      activeSections: 0,
      futureSections: 1,
      builtOutSections: 0,
      totalLots: 15,
      fieldSurveyTerritoryName: 'Bould City',
      marketName: 'Las Vegas',
      marketAbbreviation: 'LV',
      subdivisionStatusCode: 'Future',
      surveyMethodCode: 'NEARMAP',
      county: 'Clark',
      community: null,
      zoom17Date: '2023-07-02T18:02:02.873Z',
      zoom18Date: '2023-06-06T23:50:55.000Z',
      subdivisionGeometryId: null,
      subdivisionGeometryBoundingBoxId: null,
      subdivisionGeometryBoundaryId: null,
      subdivisionGeometryIntelligenceBoundaryId: 58511,
      subdivisionGeometryIntelligenceBoundaryStatusId: 4,
      subdivisionGeometryIntelligenceBoundaryStatusCode: 'Finalized',
      subdivisionGeometryIntelligenceBoundaryStatusChangeDate: '2022-10-26T21:00:23.740Z',
      nearMapImageDate: '2023-06-06T23:50:55.000Z',
      imageBoxId: 59822,
      mostRecentIPointBatchDate: null,
      iPoints: null,
      validatediPoints: null,
      subdivisionSpecificStatus: 'Future'
    },
  ],
};
