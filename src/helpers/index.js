export const formattedInterest = (interest) => {
    return parseFloat(interest).toFixed(2);
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
};