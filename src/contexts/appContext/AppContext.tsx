"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { StyleProvider } from "@ant-design/cssinjs";

export interface AppContextProps {
  hasGameStarted: boolean;
  setHasGameStarted: Dispatch<SetStateAction<boolean>>;
}

const defaultAppContextProps: AppContextProps = {
  hasGameStarted: false,
  setHasGameStarted: () => null,
};

export const AppContext = createContext<AppContextProps>(
  defaultAppContextProps
);

export const useAppContext = (): AppContextProps => useContext(AppContext);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  return (
    <StyleProvider hashPriority={"high"}>
      <AppContext.Provider value={{ hasGameStarted, setHasGameStarted }}>
        {children}
      </AppContext.Provider>
    </StyleProvider>
  );
};
