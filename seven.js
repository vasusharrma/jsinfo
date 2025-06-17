
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promsie one is a good boy");
  }, 1000);
});

promiseOne.then((message) => {
  console.log(message);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("inside promise two");
    resolve({ name: "Akash Kumar", city: "Bilaspur" });
  }, 1000);
})
  .then((user) => {
    return user.name;
  })
  .then((name) => {
    console.log(name);
  });

const promiseThree = new Promise((resolve, reject) => {
  let error = true;
  setTimeout(() => {
    console.log("inside promise three");
    if (error) {
      reject("went wrong in promise three");
    } else {
      resolve({ name: "lala from three", age: 23 });
    }
  });
});

async function consumePromiseThree() {
  try {
    const response = await promiseThree;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
