import Pagination from "../entities/pagination/Pagination";

export default interface IJsonResponse {
  status: boolean;
  message: string;
  data?: any;
  pagination?: Pagination;
}
