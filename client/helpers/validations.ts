export const isName = (value: string, maxLength=72): boolean => {
  if (value.length > maxLength) {
    return false;
  }

  const pattern = /^[A-Z][a-z]+( ?[A-Z][a-z]+)?$/;

  return pattern.test(value);
};

export const isAddress = (value: string, maxLength=100): boolean => {
  if (value.length > maxLength) {
    return false;
  }

  const pattern = /^[A-Z][a-z]+(,\s[A-Z][a-z]+){3}$/;

  return pattern.test(value);
};
