import React, { useEffect, useState, type FC } from "react";
import { fetchCrewData } from "../../api/crewApi";
import { type CrewData } from "../../api/crewApi";
import avatar from "../../../public/photo.jpg";
import styles from "../crewList/crewList.module.css";

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
    <div className={styles["crew-list-info"]}>
      <ul className={styles["crew-list"]}>
        {filteredCrew?.map((pl, index) => (
          <li className={styles["crew-card"]} key={index}>
            <img src={avatar} alt="crewmember-avatar" /> {pl.name}
          </li>
        ))}
      </ul>

      <p>Total amount: {filteredCrew?.length} people on ISS</p>
    </div>
  );
};

export default CrewList;
