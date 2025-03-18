import IPagination from "./IPagination";

export default class Pagination {
  private page: number;
  private maxCount: number;
  private maxPages: number;
  private hasNextP: boolean;
  private hasLastP: boolean;
  private limit: number;
  private start: number;

  constructor(page: number, maxCount: number, limit: number = 7) {
    this.limit = limit;
    this.page = page;
    this.maxCount = maxCount;
    this.maxPages = Math.ceil(this.maxCount / this.limit);

    if (this.page > this.maxPages) {
      this.page = this.maxPages;
    }

    if (this.page <= 0) {
      this.page = 1;
    }

    this.start = this.page * this.limit - this.limit;
    this.start = this.start <= 0 ? 0 : this.start;

    this.hasLastP = this.page > 1 ? true : false;
    this.hasNextP = this.page <= this.maxPages - 1 ? true : false;
  }

  getPage(): number {
    return this.page;
  }

  getMaxPages(): number {
    return this.maxPages;
  }

  getMaxCount(): number {
    return this.maxCount;
  }

  hasNextPage(): boolean {
    return this.hasNextP;
  }

  hasLastPage(): boolean {
    return this.hasLastP;
  }

  getLimit(): number {
    return this.limit;
  }

  getStart(): number {
    return this.start;
  }

  getAsObject(): IPagination {
    return {
      page: this.getPage(),
      maxPages: this.getMaxPages(),
      maxCount: this.getMaxCount(),
      hasLastPage: this.hasLastPage(),
      hasNextPage: this.hasNextPage(),
      limit: this.getLimit(),
    };
  }
}
