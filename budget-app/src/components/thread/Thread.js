/* eslint-disable use-isnan */
import React, { useState, useEffect } from "react";
import styles from "./thread.module.css";
import { percentage } from "../../utils/functions/percentageConvert";

function Thread({ category, operations, income, type }) {
  const [categoryTotal, setCategoryTotal] = useState(0);
  const [total, setTotal] = useState(100);
  const [info, setInfo] = useState([]);
  const [color, setColor] = useState(type);

  useEffect(() => {
    if (operations) {
      operations.forEach((operation) => {
        setTotal((prev) => prev + parseFloat(operation.amount));
        if (category === operation.category.name) {
          setCategoryTotal((prev) => prev + parseFloat(operation.amount));
        }
      });
    } else {
      setTotal(0);
      setCategoryTotal(0);
    }
  }, [operations, category]);

  useEffect(() => {
    setInfo(percentage(total, categoryTotal));
  }, [total, categoryTotal]);

  useEffect(() => {
    if (info[0] > 30 && info[0] < 70) setColor("#F3F2C9");
    else if (info[0] > 70) {
      if (income) setColor("#24d1a6");
      else setColor("orangered");
    }
  }, [info, income]);

  return (
    <div>
      <ul className={styles.chartSkills}>
        <li
          style={{
            "--frame-deg": info[1],
            "--color-var": color,
          }}
        />
      </ul>
      <span className={styles.percentage}>{`% ${info[0]}`}</span>
      <span className={styles.category}>{category}</span>
    </div>
  );
}

export default Thread;
