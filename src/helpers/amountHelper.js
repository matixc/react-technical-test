export const prepareAvailableAmount = (amount, currency, language) => {
    return new Intl.NumberFormat(language, {
        style: "currency",
        currency: currency
    }).format(amount);
};
