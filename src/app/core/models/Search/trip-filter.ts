export interface TripFilter {

  location?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  durationInDays?: number;
  rating?: number;
  descending?: boolean;
  pageSize?: number;
  pageIndex?: number;


}
