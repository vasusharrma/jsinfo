const cart = ['shoes', 'pants', 'mouse'];

//this is becomeing the callback hell one callback inside another callback as every task is dependent on another task so we want to perform the task after one another , this is now becomeing  a callback hell 

api.createOrder(cart, () => {
  api.proceedtoPayment(() => {
    api.showOrderSummary(() => {
      api.updateWallet();
    });
  })
})




const data = { name: "Vasu", age: 33 };


function updateDB(data, cb, nextCb) {

  console.log("data is updated : ", data)
  cb(data, nextCb);
}


function deleteUser(data, fn) {
  console.log("user is deleted : ", data);

  fn(data);

}


function updateUserInformation(data) {
  console.log("user is updated : ", data);

}


updateDB(data, deleteUser, updateUserInformation);





function createOrder(cart, proceedToPayment) {

  const api = {
    createOrder(cart) {
      console.log("create order for the products : ", cart);
      return crypto.randomUUID();
    }
  }

  let orderId = api.createOrder(cart);

  proceedToPayment(orderId);

}

function proceedToPayment(orderId) {

  console.log(`payment succesfull from orderId ${orderId}`)
}

createOrder(cart, proceedToPayment);
