const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

export const formatPrice = (amount: number) => currencyFormatter.format(amount);