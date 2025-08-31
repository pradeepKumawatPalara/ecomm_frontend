function calculateDiscountedPrice(price, discountPercentage) {
    if (typeof price !== "number" || typeof discountPercentage !== "number") {
      throw new Error("Both price and discountPercentage should be numbers");
    }
    
    if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error("Invalid values: price must be >= 0 and discountPercentage must be between 0 and 100");
    }
    
    const discountAmount = (price * discountPercentage) / 100;
    return Math.round(price - discountAmount);
  }
  
export default calculateDiscountedPrice;
  