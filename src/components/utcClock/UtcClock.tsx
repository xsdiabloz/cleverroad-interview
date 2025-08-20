import React, { useEffect, useState, type FC } from "react";
import styles from "../utcClock/utcClock.module.css";

const UtcClock: FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toUTCString());
    };
    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles["utc-clock"]}>
      <strong>Current UTC time: </strong>
      {time}
    </div>
  );
};

export default UtcClock;
