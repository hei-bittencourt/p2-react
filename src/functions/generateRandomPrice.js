export function generateRandomPrice() {
    const min = 0.01;
    const max = 0.5;
    return (Math.random() * (max - min) + min).toFixed(2) + ' ETH';
}

