import axios from "axios";

export type IssLocationResponse = {
  message: string;
  timestamp: number;
  iss_position: {
    latitude: string;
    longitude: string;
  };
};

const GET_ISS_URL: string =
  import.meta.env.VITE_OPEN_API_BASE_URL + "/iss-now.json";

export const fetchIssData = async (): Promise<IssLocationResponse> => {
  const issData = await axios.get(GET_ISS_URL);
  console.log(issData);
  return issData.data;
};
