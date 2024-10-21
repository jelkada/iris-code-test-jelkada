export const API_BASE_URL = 'http://localhost:3000';
export const SUBDIVISION_URL = '/v1/subdivisions';

export enum FilterType {
  All = 'All',
  Active = 'Active',
  Future = 'Future',
  BuildOut = 'Build out'
};

export enum FilterApiType {
  Active = 'activeSections',
  Future = 'futureSections',
  BuildOut = 'builtOutSections'
};
