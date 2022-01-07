export const getAgeWord = (age: string | number) => {
  const normalizedAge = Number(age);

  const lastDigit = normalizedAge % 10;

  const digitBeforeLast = Math.floor(normalizedAge / 10) % 10;

  if (digitBeforeLast === 1) {
    return 'лет';
  }

  if (lastDigit === 1) {
    return 'год';
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return 'года';
  }

  return 'лет';
};
