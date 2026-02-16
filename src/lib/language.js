
export const translateNumber = (num, language) => {
    if (language !== 'bn') return num;
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => {
        const d = parseInt(digit);
        return isNaN(d) ? digit : bengaliDigits[d];
    }).join('');
};
