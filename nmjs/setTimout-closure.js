function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}

x();

function y() {
  var count = 0;

  var intervalId = setInterval(() => {

    count++;
    console.log(count);
    if (count == 5) {
      clearInterval(intervalId);
    }
  }, 1000)
}

y();
