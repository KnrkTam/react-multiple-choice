import React, { useEffect, useState } from "react";

export default function Clock() {
  const [minute, setMinute] = useState(10);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (second < 0) {
      setSecond(59);
      if (minute > 0) {
        setMinute(minute - 1);
      }
    }
    setTimeout(() => setSecond(second - 1), 1000);
  }, [second]);

  return (
    <p>
      {minute.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {second.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
    </p>
  );
}
