export function generateRandomPrice() {
    const min = 0.01;
    const max = 1.0;
    return (Math.random() * (max - min) + min).toFixed(2) + ' ETH';
}
export function generateRandomPriceLendarias() {
    const min = 1.01;
    const max = 2.0;
    return (Math.random() * (max - min) + min).toFixed(2) + ' ETH';
}

