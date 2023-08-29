export const thousandsSeparate = (value) => {
    if (typeof value !== 'number') {
        throw new Error('Input must be a number: ', value);
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};