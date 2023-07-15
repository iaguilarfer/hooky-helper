"use client";

import { Button } from "semantic-ui-react";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Setup() {
  const numberOfPlayersOptions = [3, 4, 5];

  return (
    <div>
      <h1>Select number of players:</h1>
      <div className={styles.buttons}>
        {numberOfPlayersOptions.map((option) => (
          <Link key={option} href={"/setup/add-player"}>
            <Button primary={true} className={styles.button}>
              {`${option} Players`}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
