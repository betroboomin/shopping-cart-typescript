import React from 'react';

interface CurrencyFormatterProps {
  number: number;
}

const formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'XAF',
  minimumFractionDigits: 0, // Set the number of decimal places
});

export const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ number }) => {
  return formatter.format(number);
};
