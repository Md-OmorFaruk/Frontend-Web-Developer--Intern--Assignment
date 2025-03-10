var childAge = 25;
var product = 5000;

if (childAge <= 18) {
      var products = product * (10 / 100);
      product = product-products
      console.log('Discount Price(10%) :', product);
}
else if (childAge >= 18 && childAge <= 24) {
      var products = product * (5 / 100);
      product = product - products;
       console.log("Discount Price(5%) :", product);
}
else {
      var products = product * (2 / 100);
      product = product - products;
       console.log("Discount Price(2%) :", product);

}