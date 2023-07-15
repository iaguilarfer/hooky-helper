"use client";

import { Button, Input, Label } from "semantic-ui-react";
import styles from "./page.module.scss";
import { useState } from "react";
import { useAppContext } from "../../../contexts/appContext/AppContext";
import { useRouter } from "next/navigation";

export default function AddPlayer() {
  const { addPlayer, numberOfLettersPerPlayer, players, numberOfPlayers } =
    useAppContext();
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");

  const asciiCodes = Array(26)
    .fill(0)
    .map((value, index) => 65 + index);
  const letters = asciiCodes.map((code) => String.fromCharCode(code));

  const [selectedLetters, setSelectedLetters] = useState<Array<string>>([]);

  const onClickLetter = (letter: string) => {
    setSelectedLetters((prevState) => {
      const result = [...prevState];
      if (result.includes(letter)) {
        return result.filter((item) => item !== letter);
      }
      result.push(letter);
      return result;
    });
  };

  const onClickSavePlayer = () => {
    addPlayer(playerName, selectedLetters);
    if (players.length === numberOfPlayers - 1) {
      router.push("/game/ask-question");
    } else {
      setPlayerName("");
      setSelectedLetters([]);
    }
  };

  const isFormReady =
    playerName !== "" && selectedLetters.length === numberOfLettersPerPlayer;

  return (
    <div>
      <label htmlFor={"playerName"}>Enter player name:</label>
      <Input
        id={"playerName"}
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
      <p>Select their letters:</p>
      <div className={styles.letters}>
        {letters.map((letter) => {
          const isSelected = selectedLetters.includes(letter);
          return (
            <Button
              key={letter}
              className={styles["letter-button"]}
              color={isSelected ? "blue" : "grey"}
              onClick={() => onClickLetter(letter)}
            >
              {letter}
            </Button>
          );
        })}
      </div>
      <Button
        disabled={!isFormReady}
        primary={true}
        onClick={onClickSavePlayer}
      >
        Add player
      </Button>
    </div>
  );
}
