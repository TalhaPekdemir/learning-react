import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [date, setDate] = useState("");

  var d = new Date();

  setInterval(updateDate, 1000);

  function convertToDayString(dayNumber) {
    var result =
      dayNumber == 1
        ? "Pazartesi"
        : dayNumber == 2
        ? "Salı"
        : dayNumber == 3
        ? "Çarşamba"
        : dayNumber == 4
        ? "Perşembe"
        : dayNumber == 5
        ? "Cuma"
        : dayNumber == 6
        ? "Cumartesi"
        : dayNumber == 7
        ? "Pazar"
        : "Invalid day of time";

    return result;
  }

  function formatSeconds(seconds) {
    if (seconds.toString().length < 2) return `0${seconds}`;

    return seconds;
  }

  function updateDate() {
    setDate(
      `${d.getUTCDay()}/${d.getUTCMonth()}/${d.getFullYear()} - ${convertToDayString(
        d.getUTCDay()
      )} ${d.getHours()}:${d.getUTCMinutes()}:${formatSeconds(
        d.getUTCSeconds()
      )}`
    );
  }

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <span>{date}</span>
    </div>
  );
}
