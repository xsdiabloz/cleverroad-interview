import React, { useEffect, useState, type FC } from "react";

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

  return <div>Current UTC time: {time}</div>;
};

export default UtcClock;
