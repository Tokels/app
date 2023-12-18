export const validateInput = (input: string, regex?: RegExp): boolean => {
  if (!regex) {
    const r = new RegExp(input);
    return r.test(input);
  }
  return regex.test(input);
};
