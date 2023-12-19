import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useToast } from '../providers/ToastProvider';
import { CARD_DETAILS, useCardDetails } from '../providers/CardDetailsProvider';
import { secureStoreSave } from '../api';
import Card from './Card';
import { useRoute } from '@react-navigation/native';

const AddEditCard = () => {
  const route = useRoute();
  const { setToast } = useToast();
  const { cardDetails, setCardDetails, cardDetailsSecureStore } = useCardDetails();

  const [cardNumber, setCardNumber] = useState(cardDetails?.cardNumber || '');
  const [cardHolder, setCardHolder] = useState(cardDetails?.cardHolder || '');
  const [cardEndDateMM, setCardEndDateMM] = useState(cardDetails?.cardEndDateMM || '');
  const [cardEndDateYY, setCardEndDateYY] = useState(cardDetails?.cardEndDateYY || '');
  const [cardCvv, setCardCvv] = useState(cardDetails?.cardCvv || '');
  const [toggleSave, setToggleSave] = useState(false);

  useEffect(() => {
    const tempCardDetails = { cardNumber, cardHolder, cardEndDateMM, cardEndDateYY, cardCvv };
    if (JSON.stringify(tempCardDetails) !== JSON.stringify(cardDetailsSecureStore)) {
      setToggleSave(true);
    }
  }, [cardNumber, cardHolder, cardEndDateMM, cardEndDateYY, cardCvv]);

  const handleSave = async () => {
    try {
      console.log('save');
      const cardDetails = { cardNumber, cardHolder, cardEndDateMM, cardEndDateYY, cardCvv };
      setCardDetails!(cardDetails);
      setToggleSave(false);
      await secureStoreSave(CARD_DETAILS, JSON.stringify(cardDetails));
      setToast!((prevState) => ({ ...prevState, success: 'Card details saved!' }));
    } catch (err) {
      if (err instanceof Error) {
        const error = err?.message;
        setToast!((prevState) => ({ ...prevState, error }));
      } else {
        console.error(err);
      }
    }
  };

  return (
    <View>
      <Card />
      <TextInput
        keyboardType="numeric"
        className="border"
        placeholder="XXXX-XXXX-XXXX-XXXX"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        className="border"
        placeholder="Name Namesson"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <View className="flex-row w-full">
        <View className="w-1/2 flex-row border">
          <TextInput
            keyboardType="numeric"
            className=""
            placeholder="MM"
            value={cardEndDateMM}
            onChangeText={setCardEndDateMM}
          />
          <TextInput placeholder="/" editable={false} />
          <TextInput
            keyboardType="numeric"
            className=""
            placeholder="YY"
            value={cardEndDateYY}
            onChangeText={setCardEndDateYY}
          />
        </View>
        <View className="w-1/2 flex-row border">
          <TextInput
            className=""
            keyboardType="numeric"
            placeholder="cvv"
            value={cardCvv}
            onChangeText={setCardCvv}
          />
        </View>
      </View>
      {toggleSave && (/edit/.test(route.name) || /add/.test(route.name)) && (
        <Button
          title={(/edit/.test(route.name) && 'Save') || (/add/.test(route.name) && 'Add') || ''}
          onPress={() => void handleSave()}
        />
      )}
    </View>
  );
};

export default AddEditCard;
