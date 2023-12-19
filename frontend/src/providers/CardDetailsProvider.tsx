import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { secureStoreGetValueFor } from '../api';
import { CardDetailsPrivate } from '../api/CardsApi/data/types';

export const CARD_DETAILS = 'CARD_DETAILS';

type CardDetailsProps = {
  cardDetails: CardDetailsPrivate;
  cardDetailsSecureStore: CardDetailsPrivate;
  setCardDetails: Dispatch<SetStateAction<CardDetailsPrivate>>;
};

export const cardDetailsInit: CardDetailsPrivate = {
  cardNumber: '',
  cardHolder: '',
  cardEndDateMM: '',
  cardEndDateYY: '',
  cardCvv: '',
};

const CardDetailsContext = createContext<Partial<CardDetailsProps>>({});

export function useCardDetails() {
  return useContext(CardDetailsContext);
}

export const CardDetailsProvider = ({ children }: { children: ReactElement }) => {
  const [cardDetails, setCardDetails] = useState(cardDetailsInit);
  const [cardDetailsSecureStore, setCardDetailsSecureStore] = useState(cardDetailsInit);

  useEffect(() => {
    const loadCardDetails = async () => {
      const cardDetails = await secureStoreGetValueFor(CARD_DETAILS);
      if (cardDetails) {
        setCardDetails(JSON.parse(cardDetails) as CardDetailsPrivate);
        setCardDetailsSecureStore(JSON.parse(cardDetails) as CardDetailsPrivate);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadCardDetails();
  }, []);

  useEffect(() => {
    if (cardDetails) {
      setCardDetailsSecureStore(cardDetails);
    }
  }, [cardDetails]);

  return (
    <CardDetailsContext.Provider
      value={{
        cardDetails,
        cardDetailsSecureStore,
        setCardDetails,
      }}
    >
      {children}
    </CardDetailsContext.Provider>
  );
};
