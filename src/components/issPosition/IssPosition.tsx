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

    const issInterval = setInterval(fetchIssDataResult, 5000);

    return () => clearInterval(issInterval);
  }, []);

  return (
    <div className={styles["issPosition-wrapper"]}>
      {iss ? (
        <>
          <div className={styles["iss-position-info"]}>
            <p>
              <strong>Iss now located at: </strong> <br />{" "}
              <span style={{ fontStyle: "italic" }}>longitude: </span>
              {iss.iss_position.longitude},{" "}
              <span style={{ fontStyle: "italic" }}>latitude: </span>
              {iss.iss_position.latitude},
            </p>

            <div className={styles["iss-map"]}>
              <IssMap
                latitude={parseFloat(iss.iss_position.latitude)}
                longitude={parseFloat(iss.iss_position.longitude)}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles["card-spinner"]}>
          <div className={styles["card-spin"]}></div>
        </div>
      )}
    </div>
  );
};

export default IssPosition;
