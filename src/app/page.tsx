"use client";

import styles from "./page.module.scss";
import { useAppContext } from "../contexts/appContext/AppContext";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  const { hasGameStarted, setHasGameStarted } = useAppContext();

  return (
    <div className={styles.description}>
      <h1 className={styles.title}>HOOKY</h1>

      <Link href={"/setup"}>
        <Button
          type={"primary"}
          size={"large"}
          style={{ fontSize: "3rem", height: "auto" }}
          onClick={() => {
            setHasGameStarted((prevState: boolean) => !prevState);
          }}
        >
          Start Game
        </Button>
      </Link>
    </div>
  );
}
