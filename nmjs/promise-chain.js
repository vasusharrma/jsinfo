const cart = ["shoes", 'umbrealla', 'shirt']

const promise = createOrder(cart);

promise.then(({ cart, orderId }) => {
  console.log("created order for the cart : ", cart);
  return proceedToPayment(orderId);
}).then((msg) => {
  console.log(msg);
})
  .catch((err) => {
    console.log(err);
  })

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    let conditionalNumber = Math.floor(Math.random() * 10);
    if (conditionalNumber > 4) {
      resolve({ cart, orderId: crypto.randomUUID() });
    }
    else {
      reject(new Error("error while creating Order with cart : ", cart))
    }
  })
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    let conditionalNumber = Math.floor(Math.random() * 10);
    if (conditionalNumber > 4) {
      resolve(`payment succesfull for orderId : ${orderId}`);
    }
    else {
      reject(new Error(`error while processing payment with orderId : orderId`));
    }
  })
}


