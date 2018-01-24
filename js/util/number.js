var NumberUtil = {
  formatPrice: function(price) {
    var integralPart = Math.floor(price);
    var fractionalPart = String(Math.floor(100 * (price - integralPart)));
    fractionalPart = fractionalPart.length === 1
        ? fractionalPart + '0'
        : fractionalPart
    return integralPart + ',' + fractionalPart
  }
};
