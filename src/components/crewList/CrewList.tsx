import React, { useEffect, useState, type FC } from "react";
import { fetchCrewData } from "../../api/crewApi";
import { type CrewData } from "../../api/crewApi";
import avatar from "../../../public/photo.jpg";

const CrewList: FC = () => {
  const [crew, setCrew] = useState<CrewData | null>(null);

  const filteredCrew = crew?.people?.filter((pl) => pl.craft === "ISS");

  useEffect(() => {
    const fetchCrewDataResult = async () => {
      try {
        const crewDataResult = await fetchCrewData();
        setCrew(crewDataResult);
        console.log(crewDataResult);
      } catch (err) {
        console.error("Error fetching Crew data:", err);
      }
    };
    fetchCrewDataResult();
  }, []);

  return (
    <div>
      <ul className="">
        {filteredCrew?.map((pl, index) => (
          <li key={index}>
            <img src={avatar} alt="crewmember-avatar" /> {pl.name}
          </li>
        ))}
      </ul>

      <p>Total amount: {filteredCrew?.length} people on ISS</p>
    </div>
  );
};

export default CrewList;
