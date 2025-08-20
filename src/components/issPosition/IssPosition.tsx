import React, { useEffect, useState, type FC } from "react";
import { fetchIssData, type IssLocationResponse } from "../../api/issApi";
import IssMap from "../issMap/IssMap";
import styles from "../issPosition/issPosition.module.css";

const IssPosition: FC = () => {
  const [iss, setIss] = useState<IssLocationResponse | null>(null);

  useEffect(() => {
    const fetchIssDataResult = async () => {
      try {
        const issDataResult = await fetchIssData();
        setIss(issDataResult);
        console.log(issDataResult);
      } catch (err) {
        console.error("Error fetching ISS data:", err);
      }
    };
    fetchIssDataResult();

    const interval = setInterval(fetchIssDataResult, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles["issPosition-wrapper"]}>
      <h1>Iss now located at</h1>

      {iss ? (
        <>
          <p>
            longitude: {iss.iss_position.longitude}, latitude:{" "}
            {iss.iss_position.latitude},
          </p>
          <IssMap
            latitude={parseFloat(iss.iss_position.latitude)}
            longitude={parseFloat(iss.iss_position.longitude)}
          />
        </>
      ) : (
        <p>Loading for data...</p>
      )}
    </div>
  );
};

export default IssPosition;
