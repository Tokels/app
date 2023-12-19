import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getConnectedCardsPublic } from '../api';
import { ConnectedCardsPublicResponse } from '../api/CardsApi/data/types';

export const CONNECTED_CARDS = 'CONNECTED_CARDS_PUBLIC';

type ConnectedCardsProps = {
  connectedCards: ConnectedCardsPublicResponse;
  setConnectedCards: Dispatch<SetStateAction<ConnectedCardsPublicResponse>>;
};

export const connectedCardsInit: ConnectedCardsPublicResponse = [];

const ConnectedCardsContext = createContext<Partial<ConnectedCardsProps>>({});

export function useConnectedCards() {
  return useContext(ConnectedCardsContext);
}

export const ConnectedCardsProvider = ({ children }: { children: ReactElement }) => {
  const [connectedCards, setConnectedCards] = useState(connectedCardsInit);

  useEffect(() => {
    const loadConnectedCards = () => {
      const connectedCards = getConnectedCardsPublic();
      if (connectedCards) {
        setConnectedCards(connectedCards);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadConnectedCards();
  }, []);

  return (
    <ConnectedCardsContext.Provider
      value={{
        connectedCards,
      }}
    >
      {children}
    </ConnectedCardsContext.Provider>
  );
};
