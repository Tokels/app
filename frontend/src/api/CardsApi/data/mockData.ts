import { ConnectedCardsPrivateResponse, ConnectedCardsPublicResponse } from './types';

export const connectedCardsPrivate: ConnectedCardsPrivateResponse = [
  {
    cardHolder: 'Laura Amstel',
    cardNumber: '3566-0020-2036-0505',
    cardEndDateMM: '06',
    cardEndDateYY: '07',
    cardCvv: '554',
  },
  {
    cardHolder: 'John Doe',
    cardNumber: '6011-0009-9013-9424',
    cardEndDateMM: '11',
    cardEndDateYY: '02',
    cardCvv: '223',
  },
];
export const connectedCardsPublic: ConnectedCardsPublicResponse = [
  {
    cardHolder: 'Laura Amstel',
  },
  {
    cardHolder: 'John Doe',
  },
];
