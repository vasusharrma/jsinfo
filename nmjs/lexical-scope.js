function a() {
  var n = 10;
  function c() {
    console.log(b);
    console.log(n);
  }
  c();
}

var b = 10;
a();
