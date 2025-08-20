import axios from "axios";

export type TPeople = {
  name: string;
  craft: string;
};

export type CrewData = {
  message: string;
  number: number;
  people: TPeople[];
};

const GET_CREW_URL: string =
  import.meta.env.VITE_OPEN_API_BASE_URL + "/astros.json";

export const fetchCrewData = async (): Promise<CrewData> => {
  const crewData = await axios.get(GET_CREW_URL);
  console.log(crewData);
  return crewData.data;
};
