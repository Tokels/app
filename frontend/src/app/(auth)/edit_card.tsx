import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Card from '../../components/Card';
import { useToast } from '../../providers/ToastProvider';
import { CARD_DETAILS, useCardDetails } from '../../providers/CardDetailsProvider';
import { secureStoreSave } from '../../api';

const EditCard = () => {
  const { setToast } = useToast();
  const { cardDetails, setCardDetails } = useCardDetails();

  const [cardNumber, setCardNumber] = useState(cardDetails?.cardNumber || '');
  const [cardHolder, setCardHolder] = useState(cardDetails?.cardHolder || '');
  const [cardEndDateMM, setCardEndDateMM] = useState(cardDetails?.cardEndDateMM || '');
  const [cardEndDateYY, setCardEndDateYY] = useState(cardDetails?.cardEndDateYY || '');
  const [cardCvv, setCardCvv] = useState(cardDetails?.cardCvv || '');
  const [toggleSave, setToggleSave] = useState(false);

  useEffect(() => {
    if (cardNumber || cardHolder || cardEndDateMM || cardEndDateYY || cardCvv) {
      setToggleSave(true);
    }
  }, [cardNumber, cardHolder, cardEndDateMM, cardEndDateYY, cardCvv]);

  const handleSave = async () => {
    try {
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
      {toggleSave && (
        <Pressable onPress={handleSave}>
          <Text>Save</Text>
        </Pressable>
      )}
    </View>
  );
};

export default EditCard;
