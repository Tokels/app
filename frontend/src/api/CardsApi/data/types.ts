export interface CardDetailsPublic {
  cardHolder: string;
}

export interface CardDetailsPrivate extends CardDetailsPublic {
  cardNumber: string;
  cardEndDateMM: string;
  cardEndDateYY: string;
  cardCvv: string;
}

export type ConnectedCardsPublicResponse = CardDetailsPublic[];
export type ConnectedCardsPrivateResponse = CardDetailsPrivate[];
