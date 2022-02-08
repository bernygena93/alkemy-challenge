// eslint-disable-next-line import/prefer-default-export
export const arsPaymentFormat = (price) => {
  const number = new Intl.NumberFormat("ES-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
  return number;
};
