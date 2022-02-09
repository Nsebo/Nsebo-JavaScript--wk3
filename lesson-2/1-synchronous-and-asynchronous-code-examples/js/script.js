// Asynchronous System tasks are completed independently.
// Asynchronous all the files runs at the same time

//  Synchronous Code Example

// console.log("I");
// console.log("eat");

// setTimeout(() => {
//   //console.log("ice cream ");
// }, 4000);

// console.log("with a");
// console.log("spoon");

// synchronous runs one after another example
// Synchronous System tasks are completed one after another.

// console.log(" I");
// console.log(" love");
// console.log(" Spicy Food");

// //  Asynchronous Code Example
// // This will be shown after 2 seconds

// console.log("I");
// setTimeout(() => {
//   console.log("love");
// }, 5000);

// console.log("Spicy Food");

// callback is calling a function inside a function
//  call back  Code Example

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected `);
//     call_production();
//   }, 2000);
// };

// // the below codes are called callback hell
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("The food has been chopped");

//       setTimeout(() => {
//         console.log(` ${stocks.liquid[0]} and ${stocks.liquid[1]} was added `);

//         setTimeout(() => {
//           console.log("The machine was started");

//           setTimeout(() => {
//             console.log(`ice cream was placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as toppings `);

//               setTimeout(() => {
//                 console.log("served ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);

// let is_shop_open = true;

// let order2 = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order2(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order2(0000, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order2(2000, () => console.log("the fruits was chopped"));
//   })
//   .then(() => {
//     return order2(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} `);
//     });
//   })
//   .then(() => {
//     return order2(1000, () => console.log("start the machine"));
//   })

//   .then(() => {
//     return order2(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[0]}`)
//     );
//   })

//   .then(() => {
//     return order2(3000, () => {
//       console.log(` ${stocks.toppings[0]}  was selected`);
//     });
//   })

//   .then(() => {
//     return order2(2000, () => console.log("ice cream was served"));
//   })

//   .catch(() => {
//     console.log("Customer left ");
//   })

//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });

// async await

// let order3 = () => {
//  return new Promise((resolve, reject) => {
// if (true) {
//   resolve();
// } else {
// reject();
//  }
// });
// }

//order3()
//.then()
//.catch()
//.finally;
// async function order3() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// order3().then(() => {
//   console.log("i am happy");
// });

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping do you like?"));
//     }, 3000);
//   });
// };
// async function kitchen() {
//   console.log(" A");
//   console.log(" B");
//   console.log(" C");

//   await toppings_choice();

//   console.log(" D ");
//   console.log(" E");
// }

// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");

let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(2000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(` ${stocks.toppings[0]}was selected`);

    await time(2000);
    console.log("serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended shop is closed");
  }
}

kitchen();
