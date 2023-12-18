import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';
import { secureStoreGetValueFor } from '../api';

export const CARD_DETAILS = 'CARD_DETAILS';

type CardDetails = {
  cardNumber: string;
  cardHolder: string;
  cardEndDateMM: string;
  cardEndDateYY: string;
  cardCvv: string;
};

type CardDetailsProps = {
  cardDetails: CardDetails;
  setCardDetails: Dispatch<SetStateAction<CardDetails>>;
};

const cardDetailsInit: CardDetails = {
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

  useEffect(() => {
    const loadCardDetails = async () => {
      const cardDetails = await secureStoreGetValueFor(CARD_DETAILS);
      if (cardDetails) {
        setCardDetails(JSON.parse(cardDetails) as CardDetails);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadCardDetails();
  }, []);

  return (
    <CardDetailsContext.Provider
      value={{
        cardDetails,
        setCardDetails,
      }}
    >
      <ActivityIndicator />
      {children}
    </CardDetailsContext.Provider>
  );
};
