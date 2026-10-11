"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", { timeZone: "America/Mexico_City", hour: "2-digit", minute: "2-digit", hour12: false });
    const update = () => setTime(format.format(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  return <span>CDMX {time}</span>;
}
