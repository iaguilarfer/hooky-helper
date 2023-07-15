"use client";
import { useAppContext } from "../../../contexts/appContext/AppContext";
import { Button, Dropdown, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import styles from "./page.module.scss";

export default function AskQuestion() {
  const { players } = useAppContext();

  const options = players.map((player) => ({
    key: player.name,
    text: player.name,
    value: player.name,
  }));

  const [selectedPlayer, setSelectedPlayer] = useState();
  const [word, setWord] = useState<string>("");

  const [response, setResponse] = useState("");

  const onClickAsk = () => {
    const selectedPlayerLetters = players.find(
      (player) => player.name === selectedPlayer
    )?.letters;
    if (selectedPlayerLetters) {
      const numberOfLettersInWord = word.split("").reduce((acc, letter) => {
        if (selectedPlayerLetters.includes(letter)) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setResponse(
        `${selectedPlayer} has ${numberOfLettersInWord} of the letters in ${word}`
      );
      setWord("");
      setSelectedPlayer(null);
    }
  };

  const isQuestionReady = word.length === 5 && selectedPlayer !== undefined;

  return (
    <div className={styles.page}>
      {response && <p>{response}</p>}
      <Form>
        <Form.Field>
          <label className={styles.label}>Select a player:</label>
          <Dropdown
            selection={true}
            options={options}
            value={selectedPlayer}
            onChange={(event, data) => setSelectedPlayer(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className={styles.label}>Enter a five letter word:</label>
          <Input
            value={word}
            onChange={(event) => setWord(event.target.value.toUpperCase())}
          />
        </Form.Field>
      </Form>
      <Button
        className={styles.button}
        disabled={!isQuestionReady}
        onClick={onClickAsk}
        fluid={true}
      >
        Ask
      </Button>
    </div>
  );
}
