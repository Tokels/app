export const regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  cardNumber: /^[0-9]*$/,
  cardHolder: /^[a-zA-Z\s]*$/,
  cardEndDateMM: /^(0?[1-9]|1[012])$/,
  cardEndDateYY: /^[0-9]*$/,
  cardCvv: /^[0-9]*$/,
};
