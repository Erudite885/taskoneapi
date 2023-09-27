import { apiClient } from "../api/index";
import { ENDPOINTS } from "../api/endpoints";
import { ApplicationForm } from "../components/Form/interface";

export const getData = async () => {
  const data = await apiClient.get(ENDPOINTS.getForm);
  return data.data as ApplicationForm;
};
