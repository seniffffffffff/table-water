import { api } from "../instance";

const getHomeTableData = () => api.get("/portal_qry_wq");

export const homeApi = {
  getHomeTableData,
};
