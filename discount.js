function calculateFinalPrice(price, membership) {
  if (price <= 0) {
    throw new Error('Price must be positive');
  }
  let rate = 1;
  if (membership === 'gold') {
    rate = 0.8;
  } else if (membership === 'silver') {
    rate = 0.9;
  }
  return Math.round(price * rate * 100) / 100;
}

module.exports = { calculateFinalPrice };
