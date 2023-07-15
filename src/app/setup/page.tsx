"use client";

import { Button } from "semantic-ui-react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useAppContext } from "../../contexts/appContext/AppContext";

export default function Setup() {
  const numberOfPlayersOptions = [3, 4, 5];
  const { setNumberOfPlayers } = useAppContext();

  return (
    <div>
      <h1>Select number of players:</h1>
      <div className={styles.buttons}>
        {numberOfPlayersOptions.map((option) => (
          <Link key={option} href={"/setup/add-player"}>
            <Button
              primary={true}
              className={styles.button}
              onClick={() => setNumberOfPlayers(option)}
            >
              {`${option} Players`}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
