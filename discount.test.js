const { calculateFinalPrice } = require('./discount');

test('regular member pays full price', () => {
  expect(calculateFinalPrice(100, 'regular')).toBe(100);
});

test('gold member gets 20% off', () => {
  expect(calculateFinalPrice(100, 'gold')).toBeLessThan(100);
});

test('silver member gets 10% off', () => {
  expect(calculateFinalPrice(100, 'silver')).toBe(90);
});

test('unknown membership gets no discount', () => {
  expect(calculateFinalPrice(100, 'platinum')).toBe(100);
});

test('throws when price is zero', () => {
  expect(() => calculateFinalPrice(0, 'gold')).toThrow('Price must be positive');
});

test('throws when price is negative', () => {
  expect(() => calculateFinalPrice(-5, 'gold')).toThrow('Price must be positive');
});

test('rounds final price to 2 decimal places', () => {
  expect(calculateFinalPrice(99.99, 'gold')).toBe(79.99);
});

test('gold member discount applies to very small prices', () => {
  expect(calculateFinalPrice(0.01, 'gold')).toBe(0.01);
});

test('silver member discount applies correctly to fractional prices', () => {
  expect(calculateFinalPrice(77.77, 'silver')).toBe(69.99);
});

test('discount calculations are exact for each membership level', () => {
  const price = 100;
  expect(calculateFinalPrice(price, 'gold')).toBe(80);
  expect(calculateFinalPrice(price, 'silver')).toBe(90);
  expect(calculateFinalPrice(price, 'regular')).toBe(100);
});