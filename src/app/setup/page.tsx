"use client";

import { Button } from "antd";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Setup() {
  const numberOfPlayersOptions = [3, 4, 5];

  return (
    <div>
      <h1>Select number of players:</h1>
      <div className={styles.buttons}>
        {numberOfPlayersOptions.map((option) => (
          <Link key={option} href={"/setup/mode"}>
            <Button
              type={"primary"}
              style={{ fontSize: "3rem", height: "auto" }}
            >
              {`${option} Players`}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
