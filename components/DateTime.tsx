"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

export const DateTime = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <time dateTime={date.toISOString()}>{date.toLocaleString()}</time>
      <div className="text-xl">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
        <p>
          Full :{" "}
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "long",
          }).format(date)}
        </p>
      </div>
    </>
  );
};

export default DateTime;
