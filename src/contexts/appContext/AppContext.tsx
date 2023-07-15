"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Player } from "../../models/Player";

export interface AppContextProps {
  hasGameStarted: boolean;
  setHasGameStarted: Dispatch<SetStateAction<boolean>>;
  numberOfPlayers: number;
  setNumberOfPlayers: Dispatch<SetStateAction<number>>;
  numberOfLettersPerPlayer: number;
  players: Array<Player>;
  addPlayer: (name: string, letters: Array<string>) => void;
}

const defaultAppContextProps: AppContextProps = {
  hasGameStarted: false,
  setHasGameStarted: () => null,
  numberOfPlayers: 4,
  setNumberOfPlayers: () => null,
  numberOfLettersPerPlayer: 5,
  players: [],
  addPlayer: () => null,
};

export const AppContext = createContext<AppContextProps>(
  defaultAppContextProps
);

export const useAppContext = (): AppContextProps => useContext(AppContext);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(4);

  const numberOfLettersPerPlayer = useMemo(() => {
    switch (numberOfPlayers) {
      case 3:
        return 7;
      case 4:
        return 5;
      case 5:
        return 4;
      default:
        return 4;
    }
  }, [numberOfPlayers]);

  const [players, setPlayers] = useState<Array<Player>>([]);

  const addPlayer = (name: string, letters: Array<string>) => {
    setPlayers((prevState) => [
      ...prevState,
      {
        name,
        letters,
      },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        hasGameStarted,
        setHasGameStarted,
        players,
        addPlayer,
        numberOfPlayers,
        setNumberOfPlayers,
        numberOfLettersPerPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
