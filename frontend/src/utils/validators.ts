export const validateInput = (input: string, regex: RegExp): boolean => {
  return regex.test(input);
};
