export default interface IPagination {
  page: number;
  maxCount: number;
  maxPages: number;
  hasNextPage: boolean;
  hasLastPage: boolean;
  limit: number;
}
