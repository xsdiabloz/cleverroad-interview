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
  const issData = await fetch(GET_ISS_URL);
  const issRes = await issData.json();
  console.log(issRes);
  return issRes;
};
