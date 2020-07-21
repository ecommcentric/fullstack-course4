// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

// Assign a default value for an undefined
// variable using the OR || statement, as above.
// This takes the place of an If stmt:
// 
// if (sideDish === undefined) {
//     sideDish = "whatever!";
// }
// 
// sideDish will be undefined when the 2nd call of the
// function orderChickenWith doesn't pass a value in the () - line 8.