import Decimal from 'decimal.js';

export const add = (num1: number | string, num2: number | string) =>
  new Decimal(num1).plus(num2).toString();

export const subtract = (num1: number | string, num2: number | string) =>
  new Decimal(num1).minus(num2).toString();

export const multiply = (num1: number | string, num2: number | string) =>
  new Decimal(num1).times(num2).toString();

export const divide = (num1: number | string, num2: number | string) => {
  if (new Decimal(num2).isZero()) {
    throw new Error('Division by zero is not allowed.');
  }
  return new Decimal(num1).div(num2).toString();
};

export const round = (value: number | string, decimalPlaces: number) =>
  new Decimal(value).toDecimalPlaces(decimalPlaces).toString();

export const compare = (num1: number | string, num2: number | string) =>
  new Decimal(num1).comparedTo(num2);

export const isEqual = (num1: number | string, num2: number | string) =>
  new Decimal(num1).equals(num2);

export const isFloat = (num: string | number) => {
  return Number(num) % 1 !== 0;
}
export const formattedNumber = (num: string) => {
  if(num == null || num == '') return 0;  
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: isFloat(num) ? 8 : 0 }).format(
    new Decimal(num).toNumber(),
  );
};

